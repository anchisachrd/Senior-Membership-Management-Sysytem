import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router";
// Import the API helper
import { createCandidate } from "../../api/candidateApi";

// =============== STEP 1: Candidate Page ===============
function RegisterPage1({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <div>
      <div className="bg-gray-50 overflow-hidden rounded-xl shadow-xl">
        <div className="p-8">
          <p className="block mt-1 mb-7 text-xl font-bold text-grey-600">
            1. ข้อมูลส่วนตัวของผู้สมัคร
          </p>

          <div className="grid gap-6 mb-6 md:grid-cols-3">
            {/* Title */}
            <div>
              <label htmlFor="candidate_title" className="block mb-2 text-sm font-medium text-gray-900">
                คำนำหน้า
              </label>
              <select
                name="candidate_title"
                value={formData.candidate_title || ""}
                onChange={handleChange}
                id="candidate_title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2"
                required
              >
                <option value="">เลือกคำนำหน้า</option>
                <option value="mr">นาย</option>
                <option value="miss">นางสาว</option>
                <option value="mrs">นาง</option>
              </select>
            </div>

            {/* First Name */}
            <div>
              <label htmlFor="candidate_first_name" className="block mb-2 text-sm font-medium text-gray-900">
                ชื่อจริง
              </label>
              <input
                type="text"
                name="candidate_first_name"
                value={formData.candidate_first_name || ""}
                onChange={handleChange}
                id="candidate_first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder="กรอกชื่อของผู้สมัคร"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="candidate_last_name" className="block mb-2 text-sm font-medium text-gray-900">
                นามสกุล
              </label>
              <input
                type="text"
                name="candidate_last_name"
                value={formData.candidate_last_name || ""}
                onChange={handleChange}
                id="candidate_last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder="กรอกนามสกุลของผู้สมัคร"
                required
              />
            </div>

            {/* National ID */}
            <div>
              <label htmlFor="candidate_national_id" className="block mb-2 text-sm font-medium text-gray-900">
                เลขบัตรประชาชน
              </label>
              <input
                type="text"
                name="candidate_national_id"
                value={formData.candidate_national_id || ""}
                onChange={handleChange}
                id="candidate_national_id"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder="กรอกเลขบัตรประชาชน"
                required
              />
            </div>

            {/* DOB */}
            <div>
              <label htmlFor="candidate_dob" className="block mb-2 text-sm font-medium text-gray-900">
                วัน/เดือน/ปี เกิด
              </label>
              <input
                id="candidate_dob"
                name="candidate_dob"
                type="date"
                value={formData.candidate_dob || ""}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                required
              />
            </div>

            {/* Gender */}
            <div>
              <label htmlFor="candidate_gender" className="block mb-2 text-sm font-medium text-gray-900">
                เพศ
              </label>
              <select
                id="candidate_gender"
                name="candidate_gender"
                value={formData.candidate_gender || ""}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2"
                required
              >
                <option value="">เลือกเพศ</option>
                <option value="M">ชาย</option>
                <option value="F">หญิง</option>
              </select>
            </div>
          </div>

          {/* Occupation & Phone */}
          <div className="grid gap-6 mb-4 md:grid-cols-2">
            <div>
              <label htmlFor="candidate_occupation" className="block mb-2 text-sm font-medium text-gray-900">
                อาชีพ
              </label>
              <select
                id="candidate_occupation"
                name="candidate_occupation"
                value={formData.candidate_occupation || ""}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2"
                required
              >
                <option value="">เลือกอาชีพ</option>
                <option value="อาชีพ1">อาชีพ 1</option>
                <option value="อาชีพ2">อาชีพ 2</option>
                <option value="อาชีพ3">อาชีพ 3</option>
              </select>
            </div>

            <div>
              <label htmlFor="candidate_phone" className="block mb-2 text-sm font-medium text-gray-900">
                หมายเลขโทรศัพท์
              </label>
              <input
                type="text"
                name="candidate_phone"
                value={formData.candidate_phone || ""}
                onChange={handleChange}
                id="candidate_phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder="กรอกหมายเลขโทรศัพท์"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="candidate_email" className="block mb-2 text-sm font-medium text-gray-900">
              อีเมล
            </label>
            <input
              type="email"
              name="candidate_email"
              id="candidate_email"
              value={formData.candidate_email || ""}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              placeholder="กรอกอีเมลของผู้สมัคร"
              required
            />
          </div>

          {/* Password / Confirm Password */}
          <div className="grid gap-6 mb-4 md:grid-cols-2">
            <div>
              <label htmlFor="candidate_password" className="block mb-2 text-sm font-medium text-gray-900">
                รหัสผ่าน
              </label>
              <input
                type="password"
                name="candidate_password"
                id="candidate_password"
                value={formData.candidate_password || ""}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder="กรอกรหัสผ่าน"
                required
              />
            </div>
            <div>
              <label htmlFor="candidate_confirm_password" className="block mb-2 text-sm font-medium text-gray-900">
                ยืนยันรหัสผ่าน
              </label>
              <input
                type="password"
                name="candidate_confirm_password"
                id="candidate_confirm_password"
                
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder="กรอกรหัสผ่านให้ตรงกัน"
                required
              />
            </div>
          </div>

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />

          {/* Address */}
          <p className="block mb-5 text-base font-bold text-grey-600">ที่อยู่ปัจจุบัน</p>

          {/* HouseNumber, Moo, Soi */}
          <div className="grid gap-6 mb-5 md:grid-cols-3">
            <div>
              <label htmlFor="candidate_house_number" className="block mb-2 text-sm font-medium text-gray-900">
                บ้านเลขที่
              </label>
              <input
                type="text"
                name="candidate_house_number"
                id="candidate_house_number"
                value={formData.candidate_house_number || ""}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              />
            </div>
            <div>
              <label htmlFor="candidate_moo" className="block mb-2 text-sm font-medium text-gray-900">
                หมู่ที่
              </label>
              <input
                type="text"
                name="candidate_moo"
                id="candidate_moo"
                value={formData.candidate_moo || ""}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              />
            </div>
            <div>
              <label htmlFor="candidate_soi" className="block mb-2 text-sm font-medium text-gray-900">
                ซอย
              </label>
              <input
                type="text"
                name="candidate_soi"
                id="candidate_soi"
                value={formData.candidate_soi || ""}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              />
            </div>
          </div>

          {/* Street, Subdistrict, District, Province, Postal */}
          <div className="grid gap-6 mb-4 md:grid-cols-2">
            <div>
              <label htmlFor="candidate_street" className="block mb-2 text-sm font-medium text-gray-900">
                ถนน
              </label>
              <input
                type="text"
                name="candidate_street"
                id="candidate_street"
                value={formData.candidate_street || ""}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              />
            </div>
            <div>
              <label htmlFor="candidate_subdistrict" className="block mb-2 text-sm font-medium text-gray-900">
                ตำบล/แขวง
              </label>
              <input
                type="text"
                name="candidate_subdistrict"
                id="candidate_subdistrict"
                value={formData.candidate_subdistrict || ""}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                required
              />
            </div>

            <div>
              <label htmlFor="candidate_district" className="block mb-2 text-sm font-medium text-gray-900">
                อำเภอ/เขต
              </label>
              <input
                type="text"
                name="candidate_district"
                id="candidate_district"
                value={formData.candidate_district || ""}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                required
              />
            </div>
            <div>
              <label htmlFor="candidate_province" className="block mb-2 text-sm font-medium text-gray-900">
                จังหวัด
              </label>
              <select
                id="candidate_province"
                name="candidate_province"
                value={formData.candidate_province || ""}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2"
                required
              >
                <option value="">เลือกจังหวัด</option>
                <option value="กรุงเทพฯ">กรุงเทพมหานคร</option>
                <option value="เชียงใหม่">เชียงใหม่</option>
                <option value="ภูเก็ต">ภูเก็ต</option>
                
              </select>
            </div>
          </div>

          {/* Postal Code */}
          <div className="grid gap-6 mb-3 md:grid-cols-2">
            <div>
              <label htmlFor="candidate_postal_code" className="block mb-2 text-sm font-medium text-gray-900">
                รหัสไปรษณีย์
              </label>
              <input
                type="text"
                name="candidate_postal_code"
                id="candidate_postal_code"
                value={formData.candidate_postal_code || ""}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* เอกสารของผู้สมัคร */}
      <div className="bg-gray-50 overflow-hidden rounded-xl shadow-xl mt-14">
        <div className="p-8">
          <p className="block mt-1 mb-7 text-xl font-bold text-grey-600">
            2. เอกสารของผู้สมัคร
          </p>

          {/* House Registration */}
          <div>
            <label htmlFor="candidate_house_registration" className="block mb-2 text-sm font-medium text-gray-900">
              สำเนาทะเบียนบ้าน
            </label>
            <input
              type="file"
              name="candidate_house_registration"
              id="candidate_house_registration"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              required
            />
          </div>

          {/* ID Card */}
          <div className="mt-5">
            <label htmlFor="candidate_id_card" className="block mb-2 text-sm font-medium text-gray-900">
              สำเนาบัตรประชาชน
            </label>
            <input
              type="file"
              name="candidate_id_card"
              id="candidate_id_card"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              required
            />
          </div>

          {/* Rename Doc */}
          <div className="mt-5">
            <label htmlFor="candidate_rename_doc" className="block mb-2 text-sm font-medium text-gray-900">
              ใบเปลี่ยนชื่อ
            </label>
            <input
              type="file"
              name="candidate_rename_doc"
              id="candidate_rename_doc"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            />
          </div>

          {/* Medical Certification */}
          <div className="mt-5">
            <label htmlFor="candidate_med_certification" className="block mb-2 text-sm font-medium text-gray-900">
              ใบรับรองแพทย์
            </label>
            <input
              type="file"
              name="candidate_med_certification"
              id="candidate_med_certification"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// =============== STEP 2: Heir Page ===============
function RegisterPage2({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;




    // เช็คว่าที่อยู่เดียวกันมั้ย ถ้าที่อยู่เกี่ยวกันเวลากดมันจะเอาข้อมูลที่อยู่ฝั่ง candidate มาให้เลย + disable input ให้กรอกไม่ได้
    if (type === "checkbox" && name === "sameAddress") {
      if (checked) {
        setFormData((prev) => ({
          ...prev,
          sameAddress: true,
          heir_house_number: prev.candidate_house_number,
          heir_moo: prev.candidate_moo,
          heir_soi: prev.candidate_soi,
          heir_street: prev.candidate_street,
          heir_subdistrict: prev.candidate_subdistrict,
          heir_district: prev.candidate_district,
          heir_province: prev.candidate_province,
          heir_postal_code: prev.candidate_postal_code,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          sameAddress: false,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: files ? files[0] : value,
      }));


    }
  };

  const isSameAddress = !!formData.sameAddress;

  return (
    <div>
      {/* ข้อมูลส่วนตัวของทายาท */}
      <div className="bg-gray-50 overflow-hidden rounded-xl shadow-xl">
        <div className="p-8">
          <p className="block mt-1 mb-7 text-xl font-bold text-grey-600">
            3. ข้อมูลส่วนตัวของทายาท
          </p>

          {/* Heir Title, First Name, Last Name */}
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            <div>
              <label htmlFor="heir_title" className="block mb-2 text-sm font-medium text-gray-900">
                คำนำหน้า
              </label>
              <select
                id="heir_title"
                name="heir_title"
                value={formData.heir_title || ""}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2"
                required
              >
                <option value="">เลือกคำนำหน้า</option>
                <option value="mr">นาย</option>
                <option value="miss">นางสาว</option>
                <option value="mrs">นาง</option>
              </select>
            </div>

            <div>
              <label htmlFor="heir_first_name" className="block mb-2 text-sm font-medium text-gray-900">
                ชื่อจริง
              </label>
              <input
                type="text"
                id="heir_first_name"
                name="heir_first_name"
                value={formData.heir_first_name || ""}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder="กรอกชื่อของทายาท"
                required
              />
            </div>

            <div>
              <label htmlFor="heir_last_name" className="block mb-2 text-sm font-medium text-gray-900">
                นามสกุล
              </label>
              <input
                type="text"
                id="heir_last_name"
                name="heir_last_name"
                value={formData.heir_last_name || ""}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                required
              />
            </div>

            {/* Heir National ID, DOB, Gender */}
            <div>
              <label htmlFor="heir_national_id" className="block mb-2 text-sm font-medium text-gray-900">
                เลขบัตรประชาชน
              </label>
              <input
                type="text"
                id="heir_national_id"
                name="heir_national_id"
                value={formData.heir_national_id || ""}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                required
              />
            </div>
            <div>
              <label htmlFor="heir_dob" className="block mb-2 text-sm font-medium text-gray-900">
                วัน/เดือน/ปี เกิด
              </label>
              <input
                id="heir_dob"
                name="heir_dob"
                type="date"
                value={formData.heir_dob || ""}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                required
              />
            </div>
            <div>
              <label htmlFor="heir_gender" className="block mb-2 text-sm font-medium text-gray-900">
                เพศ
              </label>
              <select
                id="heir_gender"
                name="heir_gender"
                value={formData.heir_gender || ""}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2"
                required
              >
                <option value="">เลือกเพศ</option>
                <option value="M">ชาย</option>
                <option value="F">หญิง</option>
              </select>
            </div>
          </div>

          {/* Heir Occupation, Relationship, Phone, Email */}
          <div className="grid gap-6 mb-3 md:grid-cols-2">
            <div>
              <label htmlFor="heir_occupation" className="block mb-2 text-sm font-medium text-gray-900">
                อาชีพ
              </label>
              <select
                id="heir_occupation"
                name="heir_occupation"
                value={formData.heir_occupation || ""}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2"
                required
              >
                <option value="">เลือกอาชีพ</option>
                <option value="1">อาชีพ 1</option>
                <option value="2">อาชีพ 2</option>
              </select>
            </div>

            <div>
              <label htmlFor="heir_relationship" className="block mb-2 text-sm font-medium text-gray-900">
                ความเกี่ยวข้อง
              </label>
              <select
                id="heir_relationship"
                name="heir_relationship"
                value={formData.heir_relationship || ""}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2"
                required
              >
                <option value="">เลือกความเกี่ยวข้อง</option>
                <option value="1">สามี/ภรรยา</option>
                <option value="2">ลูก</option>
                <option value="3">อื่นๆ</option>
              </select>
            </div>

            <div>
              <label htmlFor="heir_phone" className="block mb-2 text-sm font-medium text-gray-900">
                หมายเลขโทรศัพท์
              </label>
              <input
                type="text"
                id="heir_phone"
                name="heir_phone"
                value={formData.heir_phone || ""}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                required
              />
            </div>

            <div>
              <label htmlFor="heir_email" className="block mb-2 text-sm font-medium text-gray-900">
                อีเมล
              </label>
              <input
                type="email"
                id="heir_email"
                name="heir_email"
                value={formData.heir_email || ""}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                required
              />
            </div>
          </div>

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />


          {/* ที่อยู่ของทายาท */}
          <p className="block mb-5 text-base font-bold text-grey-600">ที่อยู่ปัจจุบัน</p>
          {/* Checkbox - same address */}
          <div className="mb-5">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="sameAddress"
                checked={isSameAddress}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-sm font-bold text-gray-900">
                ที่อยู่ปัจจุบันเหมือนกับผู้สมัคร
              </span>
            </label>
          </div>
          <div className="grid gap-6 mb-5 md:grid-cols-3">
            <div>
              <label htmlFor="heir_house_number" className="block mb-2 text-sm font-medium text-gray-900">
                บ้านเลขที่
              </label>
              <input
                type="text"
                id="heir_house_number"
                name="heir_house_number"
                value={formData.heir_house_number || ""}
                onChange={handleChange}
                disabled={isSameAddress}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              />
            </div>
            <div>
              <label htmlFor="heir_moo" className="block mb-2 text-sm font-medium text-gray-900">
                หมู่ที่
              </label>
              <input
                type="text"
                id="heir_moo"
                name="heir_moo"
                value={formData.heir_moo || ""}
                onChange={handleChange}
                disabled={isSameAddress}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              />
            </div>
            <div>
              <label htmlFor="heir_soi" className="block mb-2 text-sm font-medium text-gray-900">
                ซอย
              </label>
              <input
                type="text"
                id="heir_soi"
                name="heir_soi"
                value={formData.heir_soi || ""}
                onChange={handleChange}
                disabled={isSameAddress}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              />
            </div>
          </div>

          <div className="grid gap-6 mb-4 md:grid-cols-2">
            <div>
              <label htmlFor="heir_street" className="block mb-2 text-sm font-medium text-gray-900">
                ถนน
              </label>
              <input
                type="text"
                id="heir_street"
                name="heir_street"
                value={formData.heir_street || ""}
                onChange={handleChange}
                disabled={isSameAddress}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              />
            </div>
            <div>
              <label htmlFor="heir_subdistrict" className="block mb-2 text-sm font-medium text-gray-900">
                ตำบล/แขวง
              </label>
              <input
                type="text"
                id="heir_subdistrict"
                name="heir_subdistrict"
                value={formData.heir_subdistrict || ""}
                onChange={handleChange}
                disabled={isSameAddress}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                required
              />
            </div>
            <div>
              <label htmlFor="heir_district" className="block mb-2 text-sm font-medium text-gray-900">
                อำเภอ/เขต
              </label>
              <input
                type="text"
                id="heir_district"
                name="heir_district"
                value={formData.heir_district || ""}
                onChange={handleChange}
                disabled={isSameAddress}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                required
              />
            </div>
            <div>
              <label htmlFor="heir_province" className="block mb-2 text-sm font-medium text-gray-900">
                จังหวัด
              </label>
              <select
                id="heir_province"
                name="heir_province"
                value={formData.heir_province || ""}
                onChange={handleChange}
                disabled={isSameAddress}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2"
                required
              >
                <option value="">เลือกจังหวัด</option>
                <option value="กรุงเทพฯ">กรุงเทพมหานคร</option>
                <option value="เชียงใหม่">เชียงใหม่</option>
         
              </select>
            </div>
          </div>

          <div className="grid gap-6 mb-3 md:grid-cols-2">
            <div>
              <label htmlFor="heir_postal_code" className="block mb-2 text-sm font-medium text-gray-900">
                รหัสไปรษณีย์
              </label>
              <input
                type="text"
                id="heir_postal_code"
                name="heir_postal_code"
                value={formData.heir_postal_code || ""}
                onChange={handleChange}
                disabled={isSameAddress}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* เอกสารของทายาท */}
      <div className="bg-gray-50 overflow-hidden rounded-xl shadow-xl mt-14">
        <div className="p-8">
          <p className="block mt-1 mb-7 text-xl font-bold text-grey-600">
            4. เอกสารของทายาท
          </p>

          <div>
            <label htmlFor="heir_house_registration" className="block mb-2 text-sm font-medium text-gray-900">
              สำเนาทะเบียนบ้าน
            </label>
            <input
              type="file"
              id="heir_house_registration"
              name="heir_house_registration"

              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"

              required
            />
          </div>

          <div className="mt-5">
            <label htmlFor="heir_id_card" className="block mb-2 text-sm font-medium text-gray-900">
              สำเนาบัตรประชาชน
            </label>
            <input
              type="file"
              id="heir_id_card"
              name="heir_id_card"

              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              required
            />
          </div>

          <div className="mt-5">
            <label htmlFor="heir_rename_doc" className="block mb-2 text-sm font-medium text-gray-900">
              ใบเปลี่ยนชื่อ
            </label>
            <input
              type="file"
              id="heir_rename_doc"
              name="heir_rename_doc"

              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// =============== STEP 3: Confirm Page ===============
function Confirm() {
  return (
    <div className="p-8">
      <div className="max-w-screen-lg mx-auto md:max-w-3xl place-items-center">
        <div className="p-10 bg-white border border-lime-200 rounded-lg shadow dark:bg-lime-600 dark:border-lime-500 overflow-hidden">
          <div className="grid gap-6 md:grid-cols-1 place-items-center">
            <FaCircleCheck className="mt-1 w-10 h-10 text-white" aria-hidden="true" />
            <p className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              คุณลงทะเบียนชมรมผู้สูงอายุสำเร็จเรียบร้อยแล้ว
            </p>
            <p className="mb-2 font-normal text-white">
              ผลการลงทะเบียนชมรมผู้สูงอายุของคุณ ทางชมรมจะแจ้งไปยังอีเมลที่คุณได้กรอกลงไป
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-1 place-items-center">
            <button
              type="button"
              className="text-gray-900 bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center me-2 mb-2 mt-5"
            >
              <Link to="/login">กลับไปยังหน้าเข้าสู่ระบบ</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// =============== MAIN REGISTER COMPONENT ===============
function Register() {
  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});

  // ---- Final Submit ----
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Build candidateData & heirData from the formData
      const candidateData = {
        title: formData.candidate_title,
        first_name: formData.candidate_first_name,
        last_name: formData.candidate_last_name,
        national_id: formData.candidate_national_id,
        dob: formData.candidate_dob,
        phone: formData.candidate_phone,
        gender: formData.candidate_gender,
        occupation: formData.candidate_occupation,
        address: {
          house_number: formData.candidate_house_number,
          moo: formData.candidate_moo,
          soi: formData.candidate_soi,
          street: formData.candidate_street,
          subdistrict: formData.candidate_subdistrict,
          district: formData.candidate_district,
          province: formData.candidate_province,
          postal_code: formData.candidate_postal_code,
        },
        document: {
          house_registration: formData.candidate_house_registration,
          id_card: formData.candidate_id_card,
          rename_doc: formData.candidate_rename_doc,
          med_certification: formData.candidate_med_certification,
        },
        account: {
          email: formData.candidate_email,
          password: formData.candidate_password,
        },
      };

      const heirData = {
        title: formData.heir_title,
        first_name: formData.heir_first_name,
        last_name: formData.heir_last_name,
        national_id: formData.heir_national_id,
        dob: formData.heir_dob,
        phone: formData.heir_phone,
        gender: formData.heir_gender,
        occupation: formData.heir_occupation,
        relationship: formData.heir_relationship,
        address: {
          house_number: formData.heir_house_number,
          moo: formData.heir_moo,
          soi: formData.heir_soi,
          street: formData.heir_street,
          subdistrict: formData.heir_subdistrict,
          district: formData.heir_district,
          province: formData.heir_province,
          postal_code: formData.heir_postal_code,
        },
        document: {
          house_registration: formData.heir_house_registration,
          id_card: formData.heir_id_card,
          rename_doc: formData.heir_rename_doc,
        },
        account: {
          email: formData.heir_email,
          password: "1235"
        }
      };
    

      const response = await createCandidate(candidateData, heirData);
      console.log("User Created:", response);
    } catch (error) {
      console.error("Fail:", error);
      alert("Error while registering");
    }
  };

  // Steps
  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handleBack = () => setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : 1));

  // Modal toggles
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // When user clicks "Confirm" in the Modal
  const ConfirmModal = async () => {
    // 1) Submit data
    await handleSubmit();
    // 2) Move step forward to show Confirm page
    setStep((prevStep) => prevStep + 1);
    // 3) Close modal
    setIsModalOpen(false);
  };

  return (
    <div>
      <nav className="bg-white">
        <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src="logo.png" className="h-16" alt="Logo" />
        </div>
      </nav>

      {step !== 3 ? (
        <form className="p-8" onSubmit={handleSubmit}>
          <div className="max-w-screen-lg mx-auto md:max-w-3xl place-items-center">
            <div className="2xl:flex">
              <div className="ibm-plex-sans-thai-medium">
                <div className="text-center text-3xl text-black mb-8 font-bold">
                  ลงทะเบียนชมรมผู้สูงอายุ
                </div>

                {step === 1 && (
                  <RegisterPage1 formData={formData} setFormData={setFormData} />
                )}
                {step === 2 && (
                  <RegisterPage2 formData={formData} setFormData={setFormData} />
                )}

                <div className="mt-14">
                  <div className="w-full max-w-md mx-auto bg-gray-100 border-2 border-gray-200 rounded-md">
                    <div className="flex items-center justify-between gap-3 p-3 bg-white rounded">
                      {/* Back button (hide if step 1) */}
                      {step !== 1 ? (
                        <button
                          type="button"
                          onClick={handleBack}
                          className="flex items-center gap-1.5 text-base font-medium py-2.5 text-gray-700 hover:text-gray-600"
                        >
                          <svg
                            className="rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="23"
                            viewBox="0 0 22 23"
                            fill="none"
                          >
                            <path
                              d="M8.25324 6.37646L13.7535 11.8767L8.25 17.3802"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          ย้อนกลับ
                        </button>
                      ) : (
                        <div style={{ width: "95px" }}></div>
                      )}

                      {/* Step indicators */}
                      <ul className="flex gap-1 items-center">
                        <li
                          className={`w-2 h-2 rounded-full ${step === 1 ? "bg-gray-600" : "bg-gray-300"
                            }`}
                        ></li>
                        <li
                          className={`w-2 h-2 rounded-full ${step === 2 ? "bg-gray-600" : "bg-gray-300"
                            }`}
                        ></li>
                      </ul>

                      {/* Next or Finish button */}
                      {step < 2 ? (
                        <button
                          onClick={handleNext}
                          type="button"
                          className="flex items-center gap-1.5 text-base font-medium py-2.5 text-gray-700 hover:text-gray-600"
                        >
                          หน้าถัดไป
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="23"
                            viewBox="0 0 22 23"
                            fill="none"
                          >
                            <path
                              d="M8.25324 6.37646L13.7535 11.8767L8.25 17.3802"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      ) : (
                        <div>
                          <button
                            onClick={toggleModal}
                            type="button"
                            className="flex items-center gap-1.5 text-base font-medium py-2.5 text-gray-700 hover:text-gray-600"
                          >
                            เสร็จสิ้น
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="23"
                              viewBox="0 0 22 23"
                              fill="none"
                            >
                              <path
                                d="M8.25324 6.37646L13.7535 11.8767L8.25 17.3802"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>

                          {/* Modal */}
                          {isModalOpen && (
                            <div
                              id="popup-modal"
                              className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
                            >
                              <div className="relative p-4 w-full max-w-md max-h-full">
                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-100">
                                  <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="absolute top-3 end-2.5 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8"
                                  >
                                    <svg
                                      className="w-3 h-3"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 14 14"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                      />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                  </button>
                                  <div className="p-4 md:p-5 text-center">
                                    <svg
                                      className="mx-auto mb-4 text-gray-800 w-12 h-12"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                      />
                                    </svg>
                                    <p className="mb-1 text-lg font-bold text-gray-800">
                                      ยืนยันการลงทะเบียน
                                    </p>
                                    <p className="mb-5 text-base font-normal text-gray-800">
                                      โปรดตรวจสอบข้อมูลให้ถูกต้องก่อนกดยืนยัน
                                    </p>
                                    <button
                                      type="submit"
                                      // onClick={ConfirmModal}
                                      className="text-gray-900 bg-white border border-lime-200 hover:bg-lime-100 font-medium rounded-lg text-sm px-5 py-2.5"
                                    >
                                      ยืนยัน
                                    </button>
                                    <button
                                    type="button"
                                      onClick={toggleModal}
                                      className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 bg-white border border-red-200 hover:bg-red-100 rounded-lg"
                                    >
                                      ยกเลิก
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <Confirm />
      )}
    </div>
  );
}

export default Register;
