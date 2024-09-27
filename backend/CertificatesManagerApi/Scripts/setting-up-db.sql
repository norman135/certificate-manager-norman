CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE Suppliers (
    Id SERIAL PRIMARY KEY,
    Handle UUID DEFAULT uuid_generate_v4(),
    Name VARCHAR(255) NOT NULL,
    Index INT NOT NULL,
    City VARCHAR(255) NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    RowVersion BYTEA
);

CREATE TABLE Users (
    Id SERIAL PRIMARY KEY,
    Handle UUID DEFAULT uuid_generate_v4(),
    Name VARCHAR(255) NOT NULL,
    FirstName VARCHAR(255) NOT NULL,
    Email VARCHAR(255),
    UserId VARCHAR(10) NOT NULL,
    Department VARCHAR(10) NOT NULL,
    Plant VARCHAR(3) NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    RowVersion BYTEA 
);

CREATE TABLE CertificateTypes (
    Id SERIAL PRIMARY KEY,
    Handle UUID DEFAULT uuid_generate_v4(),
    Type VARCHAR(255) NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    RowVersion BYTEA 
);

CREATE TABLE Certificates (
    Id SERIAL PRIMARY KEY,
    Handle UUID DEFAULT uuid_generate_v4(),
    SupplierId INT,
    TypeId INT,
    ValidFrom TIMESTAMP NOT NULL,
    ValidTo TIMESTAMP NOT NULL,
    CertificateDocument BYTEA,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    RowVersion BYTEA,
    FOREIGN KEY (SupplierId) REFERENCES Suppliers(Id),
    FOREIGN KEY (TypeId) REFERENCES CertificateTypes(Id)
);

CREATE TABLE Comments (
    Id SERIAL PRIMARY KEY,
    Handle UUID DEFAULT uuid_generate_v4(),
    CommentText VARCHAR(255) NOT NULL,
    UserId INT,
    CertificateId INT,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    RowVersion BYTEA,
    FOREIGN KEY (UserId) REFERENCES Users(Id),
    FOREIGN KEY (CertificateId) REFERENCES Certificates(Id)
);

CREATE TABLE CertificateUsers (
    Id SERIAL PRIMARY KEY,
    UserId INT,
    CertificateId INT,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    RowVersion BYTEA,
    FOREIGN KEY (UserId) REFERENCES Users(Id),
    FOREIGN KEY (CertificateId) REFERENCES Certificates(Id)
);
