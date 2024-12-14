-- Enum Types
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
CREATE TABLE accounts (
    account_id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role user_role NOT NULL DEFAULT 'candidate',
    is_active BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Address Table
CREATE TABLE address (
    address_id SERIAL PRIMARY KEY,
    house_number VARCHAR(50),
    moo VARCHAR(50),
    soi VARCHAR(50),
    street VARCHAR(100),
    province VARCHAR(50),
    district VARCHAR(50),
    subdistrict VARCHAR(50),
    postal_code CHAR(5)
);

-- Heirs Table
CREATE TABLE heirs (
    heir_id SERIAL PRIMARY KEY,
    title VARCHAR(10) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    national_id CHAR(13) UNIQUE NOT NULL,
    dob DATE NOT NULL,
    email VARCHAR(100),
    phone VARCHAR(15),
    gender CHAR(1) CHECK (gender IN ('M', 'F', 'O', 'N')),
    occupation VARCHAR(100),
	relationship VARCHAR(20),
    address_id INT,
    document_id INT,
    account_id INT,
    FOREIGN KEY (address_id) REFERENCES address(address_id) ON DELETE SET NULL,
    FOREIGN KEY (account_id) REFERENCES accounts(account_id) ON DELETE CASCADE
);

-- Candidates Table
CREATE TABLE candidates (
    candidate_id SERIAL PRIMARY KEY,
    title VARCHAR(10) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    national_id CHAR(13) UNIQUE NOT NULL,
    dob DATE NOT NULL,
    phone VARCHAR(10) NOT NULL,
    gender CHAR(1) CHECK (gender IN ('M', 'F', 'O', 'N')),
    occupation VARCHAR(100) NOT NULL,
    priority BOOLEAN DEFAULT FALSE,
    is_approved BOOLEAN DEFAULT FALSE,
    doc_verification_status VARCHAR(50) DEFAULT 'กำลังตรวจสอบ',
    address_id INT,
    document_id INT,
    account_id INT,
    heir_id INT,
	parent_id INT,
    FOREIGN KEY (heir_id) REFERENCES heirs(heir_id) ON DELETE SET NULL,
    FOREIGN KEY (address_id) REFERENCES address(address_id) ON DELETE SET NULL,
    FOREIGN KEY (account_id) REFERENCES accounts(account_id) ON DELETE CASCADE,
);

-- Documents Table
CREATE TABLE documents (
    document_id SERIAL PRIMARY KEY,
    doc_path VARCHAR(50),
    doc_type VARCHAR(50),
    entity_type document_entity_type NOT NULL,
    entity_id INT NOT NULL,
    CONSTRAINT fk_candidate FOREIGN KEY (entity_id) REFERENCES candidates(candidate_id) ON DELETE CASCADE,
    CONSTRAINT fk_heir FOREIGN KEY (entity_id) REFERENCES heirs(heir_id) ON DELETE CASCADE
);

-- Members Table
CREATE TABLE members (
    member_id SERIAL PRIMARY KEY,
    candidate_id INT,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    leaving_reason VARCHAR(255),
    FOREIGN KEY (candidate_id) REFERENCES candidates(candidate_id) ON DELETE CASCADE
);
