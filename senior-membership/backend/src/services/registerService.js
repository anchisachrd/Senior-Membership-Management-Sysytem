import { query } from "../db.js"            // your Postgres pool.
import { pool } from "../db.js";
import * as accountModel from "../models/accountModel.js";
import * as heirModel from "../models/heirModel.js";
import * as addressModel from "../models/addressModel.js";
import * as documentModel from "../models/documentModel.js";
import * as candidateModel from "../models/candidateModel.js";
import * as emailService from "../services/emailService.js"
import bcrypt from "bcrypt"
import crypto from 'crypto';

const generateRandomPassword = (length = 12) => {
  return crypto.randomBytes(length).toString('base64').slice(0, length);
};
export const register = async (candidateData, heirData) => {
    const client = await pool.connect();
  try {
    // Start transaction


    await client.query("BEGIN");

    //-------------------------------------------
    // 1) CREATE CANDIDATE'S ADDRESS
    //-------------------------------------------

    const candidateAddressID = await addressModel.createAddress({
      house_num: candidateData.address.house_number,
      moo: candidateData.address.moo,
      soi: candidateData.address.soi,
      street: candidateData.address.street,
      subdistrict: candidateData.address.subdistrict,
      district: candidateData.address.district,
      province: candidateData.address.province,
      postal_code: candidateData.address.postal_code,
    });
    console.log("Candidate Address ID:", candidateAddressID); 

    //-------------------------------------------
    // 2) CREATE CANDIDATE'S ACCOUNT
    //-------------------------------------------
    console.log("Candidate Password:", candidateData.account.password);
    
    const hashedCandidatePassword = await bcrypt.hash(candidateData.account.password, 10);
    const candidateAccountID = await accountModel.createAccount({
      email: candidateData.account.email,
      password_hash: hashedCandidatePassword, // make sure to hash in the model if needed
      role: "candidate",
    });

    //-------------------------------------------
    // 3) CREATE CANDIDATE
    //-------------------------------------------
  
    const candidateID = await candidateModel.createCandidate({
      title: candidateData.title,
      first_name: candidateData.first_name,
      last_name: candidateData.last_name,
      national_id: candidateData.national_id,
      dob: candidateData.dob,
      phone: candidateData.phone,
      gender: candidateData.gender,
      occupation: candidateData.occupation,
      address_id: candidateAddressID,
      account_id: candidateAccountID,
    });

    //-------------------------------------------
    // 4) HANDLE CANDIDATE DOCUMENTS
    //-------------------------------------------
    // Typically, you would store each uploaded doc as a new row in `Documents`.
    // For example, if your `candidateData.document` looks like this:
    //
    // document: {
    //   house_registration: 'uploads/houseReg.pdf',
    //   id_card: 'uploads/idCard.pdf',
    //   rename_doc: 'uploads/rename.pdf',
    //   med_certification: 'uploads/med.pdf'
    // }
    //
    // Then for each property, you’d create a row in the Documents table referencing the candidate’s ID.
    if (candidateData.document) {
      if (candidateData.document.house_registration) {
        await documentModel.createDocument({
          doc_path: candidateData.document.house_registration,
          doc_type: "house_registration",
          entity_type: "candidate",
          entity_id: candidateID,
        });
      }
      if (candidateData.document.id_card) {
        await documentModel.createDocument({
          doc_path: candidateData.document.id_card,
          doc_type: "id_card",
          entity_type: "candidate",
          entity_id: candidateID,
        });
      }
      if (candidateData.document.rename_doc) {
        await documentModel.createDocument({
          doc_path: candidateData.document.rename_doc,
          doc_type: "rename_doc",
          entity_type: "candidate",
          entityId: candidateID,
        });
      }
      if (candidateData.document.med_certification) {
        await documentModel.createDocument({
          doc_path: candidateData.document.med_certification,
          doc_type: "med_certification",
          entity_type: "candidate",
          entity_id: candidateID,
        });
      }
    }

    //-------------------------------------------
    // 5) DETERMINE HEIR ADDRESS
    //-------------------------------------------
  
    let heirAddressID = candidateAddressID;
    if (!heirData.sameAddress) {
      heirAddressID = await addressModel.createAddress({
        house_num: heirData.address.house_number,
        moo: heirData.address.moo,
        soi: heirData.address.soi,
        street: heirData.address.street,
        subdistrict: heirData.address.subdistrict,
        district: heirData.address.district,
        province: heirData.address.province,
        postal_code: heirData.address.postal_code,
      });
    }

    //-------------------------------------------
    // 6) CREATE HEIR ACCOUNT 
    //-------------------------------------------
  
    let heirAccountID = null;
    if (heirData.account && heirData.account.email) {
      const autoGeneratedPassword = generateRandomPassword();
      const hashedHeirPassword = await bcrypt.hash(autoGeneratedPassword, 10);
      heirAccountID = await accountModel.createAccount({
        email: heirData.account.email,
        password_hash: hashedHeirPassword,
        role: "heir",
      });
      console.log('password auto: ', autoGeneratedPassword)

      const htmlContent = emailService.generatePasswordEmailTemplate(heirData.first_name, autoGeneratedPassword);
      await emailService.sendEmail(
          heirData.account.email,
          'Welcome to Senior Club - Your Password',
          htmlContent
      );
    }

    //-------------------------------------------
    // 7) CREATE HEIR
    //-------------------------------------------
    const newHeirID = await heirModel.createHeir({
      title: heirData.title,
      first_name: heirData.first_name,
      last_name: heirData.last_name,
      national_id: heirData.national_id,
      dob: heirData.dob,
      phone: heirData.phone,
      gender: heirData.gender,
      occupation: heirData.occupation,
      // If you have a 'relationship' field, include it
      relationship: heirData.relationship, 
      address_id: heirAddressID,
      account_id: heirAccountID,
      // documentID: etc., or just let it be null for now
    });

    //-------------------------------------------
    // 8) HANDLE HEIR DOCUMENTS
    //-------------------------------------------
    if (heirData.document) {
      if (heirData.document.house_registration) {
        await documentModel.createDocument({
          doc_path: heirData.document.house_registration,
          doc_type: "house_registration",
          entity_type: "heir",
          entity_id: newHeirID,
        });
      }
      if (heirData.document.id_card) {
        await documentModel.createDocument({
          doc_path: heirData.document.id_card,
          doc_type: "id_card",
          entity_type: "heir",
          entity_id: newHeirID,
        });
      }
      if (heirData.document.rename_doc) {
        await documentModel.createDocument({
          doc_path: heirData.document.rename_doc,
          doc_type: "rename_doc",
          entity_type: "heir",
          entity_id: newHeirID,
        });
      }
    }

    //-------------------------------------------
    // 9) UPDATE CANDIDATE WITH HEIRID (IF NEEDED)
    //-------------------------------------------
    // If your `Candidates` table has a `HeirID` column, we link them now:
    await candidateModel.updateCandidateHeirID(candidateID, newHeirID);

    //-------------------------------------------
    // 10) COMMIT TRANSACTION
    //-------------------------------------------
    await client.query("COMMIT");

    return {
      success: true,
      candidateID,
      heirID: newHeirID,
      message: "Candidate and Heir created successfully",
    };

    
  } catch (error) {
    // ROLLBACK if anything fails
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
};
