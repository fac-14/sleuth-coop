BEGIN;

DROP TABLE IF EXISTS users, companies, questions, answers CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL
)

CREATE TABLE companies (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  company_name VARCHAR(100) UNIQUE NOT NULL,
  website VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  contact_name VARCHAR(100) NOT NULL,
  contact_title VARCHAR(100) NOT NULL,
  contact_email VARCHAR(100) NOT NULL
)

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  question TEXT UNIQUE NOT NULL,
  input_type VARCHAR(100) NOT NULL,
  helper_text TEXT NOT NULL,
  category VARCHAR(100) NOT NULL
)

INSERT INTO questions (question, input_type, helper_text, category) VALUES
("Why is this product useful to Local Authorities?", "short text", "Its important to use plain english and avoid any technical jargon!", "product")
;

CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  company_id INTEGER REFERENCES companies(id),
  question_id INTEGER REFERENCES question(id),
  answer TEXT NOT NULL
)

COMMIT;