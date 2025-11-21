-- PostgreSQL schema for KTA PMII backend
CREATE TABLE IF NOT EXISTS anggota (
  id SERIAL PRIMARY KEY,
  nama TEXT NOT NULL,
  tanggal_kaderisasi DATE,
  jenis_kaderisasi VARCHAR(20),
  tanggal_lahir DATE,
  alamat_domisili TEXT,
  jenis_kelamin VARCHAR(20),
  id_keanggotaan VARCHAR(12) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  password_hash TEXT,
  role VARCHAR(20) DEFAULT 'anggota',
  anggota_id INT REFERENCES anggota(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
