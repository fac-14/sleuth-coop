BEGIN;

DROP TABLE IF EXISTS users, companies, questions, answers CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL
);

INSERT INTO users (email, password) VALUES
('admin@senzing.com', 'canyousenzing');

CREATE TABLE companies (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  company_name VARCHAR(100) UNIQUE NOT NULL,
  website VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  contact_name VARCHAR(100) NOT NULL,
  contact_title VARCHAR(100) NOT NULL,
  contact_email VARCHAR(100) NOT NULL,
  logo_url VARCHAR(100)
);

INSERT INTO companies (user_id, company_name, website, description, contact_name, contact_title, contact_email) VALUES
(1, 'Senzing', 'http://www.senzing.com', 'Super duper fancy technological solution that in some way is relevant for local government but we don''t know how or why', 'Jessie Beech', 'Head of Fun', 'senzing@senzing.com');

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  question TEXT UNIQUE NOT NULL,
  input_type VARCHAR(100) NOT NULL,
  helper_text TEXT NOT NULL,
  category VARCHAR(100) NOT NULL
);

INSERT INTO questions (question, input_type, helper_text, category) VALUES
('Why is this product useful to Local Authorities?', 'short text', 'Its important to use plain english and avoid any technical jargon!', 'product');

CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  company_id INTEGER REFERENCES companies(id),
  question_id INTEGER REFERENCES questions(id),
  answer TEXT NOT NULL
);

INSERT INTO answers (company_id, question_id, answer) VALUES 
(1, 1, 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.');

COMMIT;