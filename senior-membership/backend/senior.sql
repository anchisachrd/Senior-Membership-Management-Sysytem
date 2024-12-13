-- Create ENUM types
CREATE TYPE user_role AS ENUM (
    'candidate',   -- Applicant
    'member',      -- Approved member
    'heir',        -- Heir of candidate/member
    'staff',       -- Manages candidate and heir information
    'committee',   -- Potentially higher-level decision makers
    'admin'        -- Manages staff and committee information
);
CREATE TYPE document_entity_type AS ENUM ('candidate', 'heir');

-- Accounts Table
CREATE TABLE Accounts (
    AccountID SERIAL PRIMARY KEY,
    Email VARCHAR(100) UNIQUE NOT NULL,
    PasswordHash VARCHAR(255) NOT NULL,
    Role user_role NOT NULL DEFAULT 'candidate',
    IsActive BOOLEAN DEFAULT FALSE,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Address Table
CREATE TABLE Address (
    AddressID SERIAL PRIMARY KEY,
    HouseNumber VARCHAR(50),
    Moo VARCHAR(50),
    Soi VARCHAR(50),
    Street VARCHAR(100),
    Province VARCHAR(50),
    District VARCHAR(50),
    Subdistrict VARCHAR(50),
    PostalCode CHAR(5)
);

-- Heirs Table
CREATE TABLE Heirs (
    HeirID SERIAL PRIMARY KEY,
    Title VARCHAR(10) NOT NULL,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    NationalID CHAR(13) UNIQUE NOT NULL,
    DOB DATE NOT NULL,
    Email VARCHAR(100),
    Phone VARCHAR(15),
    Gender CHAR(1),
    Occupation VARCHAR(100),
    AddressID INT,
    DocumentID INT,
    AccountID INT,
    FOREIGN KEY (AddressID) REFERENCES Address(AddressID) ON DELETE SET NULL,
    FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID) ON DELETE CASCADE
);

-- Candidates Table
CREATE TABLE Candidates (
    CandidateID SERIAL PRIMARY KEY,
    Title VARCHAR(10) NOT NULL,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    NationalID CHAR(13) UNIQUE NOT NULL,
    DOB DATE NOT NULL,
    Phone VARCHAR(10) NOT NULL,
    Gender CHAR(1) NOT NULL,
    Occupation VARCHAR(100) NOT NULL,
    Priority BOOLEAN DEFAULT FALSE,
    IsApproved BOOLEAN DEFAULT FALSE,
    DocVerificationStatus VARCHAR(50) DEFAULT 'กำลังตรวจสอบ',
    AddressID INT,
    DocumentID INT,
    AccountID INT,
    HeirID INT,
    FOREIGN KEY (HeirID) REFERENCES Heirs(HeirID) ON DELETE SET NULL,
    FOREIGN KEY (AddressID) REFERENCES Address(AddressID) ON DELETE SET NULL,
    FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID) ON DELETE CASCADE
);

-- Documents Table
CREATE TABLE Documents (
    DocumentID SERIAL PRIMARY KEY,
    DocPath VARCHAR(50),
    DocType VARCHAR(50),
    EntityType document_entity_type NOT NULL,
    EntityID INT NOT NULL,
    CONSTRAINT fk_candidate FOREIGN KEY (EntityID) REFERENCES Candidates(CandidateID) ON DELETE CASCADE,
    CONSTRAINT fk_heir FOREIGN KEY (EntityID) REFERENCES Heirs(HeirID) ON DELETE CASCADE
);

-- Members Table
CREATE TABLE Members (
    MemberID SERIAL PRIMARY KEY,
    CandidateID INT,
    StartDate DATE NOT NULL,
    EndDate DATE NOT NULL,
    LeavingReason VARCHAR(255),
    HeirID INT,
    FOREIGN KEY (CandidateID) REFERENCES Candidates(CandidateID) ON DELETE CASCADE
);