BEGIN;

DROP TABLE IF EXISTS users, companies, questions, answers CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL
);

INSERT INTO users (email, password) VALUES
('admin@senzing.com', 'canyousenzing'),
('user@test.com', 'testme'),
('user-empty@test.com', 'testmeimempty');

CREATE TABLE companies (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  company_name VARCHAR(100) UNIQUE NOT NULL,
  website VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  contact_name VARCHAR(100) NOT NULL,
  contact_title VARCHAR(100) NOT NULL,
  contact_email VARCHAR(100) NOT NULL,
  logo_url VARCHAR(100),
  deleted INTEGER
);

INSERT INTO companies (user_id, company_name, website, description, contact_name, contact_title, contact_email, deleted) VALUES
(1, 'Senzing', 'http://www.senzing.com', 'Super duper fancy technological solution that in some way is relevant for local government but we don''t know how or why', 'Jessie Beech', 'Head of Fun', 'senzing@senzing.com', 0),
(2, 'Dom ind', 'https://dominic.digital', 'great stuff', 'dominic coelho', 'master of fun', 'spam@dominic.digital', 0),
(3, 'AntiDom', 'https://dom.digital', 'bad stuff', 'dom lho', 'master of nun', 'spam@dom.digital', 0);

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  question TEXT UNIQUE NOT NULL,
  input_type VARCHAR(100) NOT NULL,
  helper_text TEXT NOT NULL,
  category VARCHAR(100) NOT NULL,
  options TEXT [] DEFAULT NULL
);

INSERT INTO questions (question, input_type, helper_text, category, options) VALUES
('Why is this product useful to Local Authorities?', 'short_text', 'Imagine this is being read by a member of the public. Avoid any technical language and clearly explain how your product solves a problem.', 'Product', ARRAY['250 words']),
('Video Product Explanation', 'video', 'Imagine this is being watched by a member of the public. Avoid any technical language and clearly explain how your product solves a problem.', 'Product', NULL),
('Do you offer a free proof of concept or free trial?', 'checkbox', '', 'Product', ARRAY['yes', 'no']),
('What is the typical implementation time?', 'short_text', 'If it varies depending on size of organisation give a range / examples', 'Product', ARRAY['250 words']),
('What service(s) could the product be relevant to?', 'dropdown', 'For example: parking, council tax, vulnerable adults.', 'Product', ARRAY[ 'Staff Team', 'Further Education', 'Looked after Children', 'Adults Social care', 'Housing Needs', 'Welfare benefits', 'Building Control', 'Business Services', 'Carers Services', 'Council wide', 'Family Support', 'Signposting', 'Adults Social Care', 'Council Tax', 'Planning', 'Disabled Adults', 'Housing Benefits', 'Early Years', 'Special Educational Needs', 'Welfare Benefits', 'Council Housing Management', 'Farming', 'Council Wide', 'Looked After Children', 'Leisure', 'Parking', 'School Admissions', 'Housing Advice', 'Recycling', 'Regulatory Services', 'Archaeology', 'Arts', 'Libraries', 'Waste collection', 'Transport', 'Cemeteries', 'Education Welfare', 'Environmental Services', 'Registrars', 'Highways', 'Education Provision', 'Adult Education', 'Health and Safety', 'Public Health', 'Land Registry', 'Council Wide', 'Children''s Social Care', 'Council Housing management', 'Waste Collection', 'Sundry Debtors', 'Electoral Services', 'Leaseholder Services', 'Coastal Protection']),
('Is it currently running live with any local government or authority?', 'checkbox', '', 'Local Authorities', ARRAY['yes', 'no']),
('Which council(s) is it running with?', 'short_text', '', 'Local Authorities', NULL),
('What type of council(s) is it running with?', 'multi_checkbox', '', 'Local Authorities', ARRAY['Unitary Authorities', 'London Boroughs', 'Metropolitan Districts', 'County Councils', 'District Councils', 'City of London', 'Town And Parish Councils', 'Other']),
('What other types of local authority services would your product be relevant to?', 'dropdown', 'For example: Eligibility, grants, benefits and fraud or Care, Support and Counselling (take of the list of cross cutting themes on the Local Government Services list)', 'Local Authorities', ARRAY['Eligibility, Grants, Benefits and Fraud', 	'Corporate Parent', 	'Care, Support and Counselling', 	'Fair allocation of limited resources', 	'Control, compliance and regulation', 	'Information, Advice and Advocacy', 	'Landlord', 	'Administration, Co-ordination, Consultation, Events', 	'Registers and Public Record Keeping', 	'Claims and Compliants', 	'Health and Safety', 	'Emergency Support', 	'Environmental Cleanliness, Blights and Hazards', 	'Crime prevention', 	'Wellbeing', 	'Planning, Strategy, Research, Consultancy, Sustainability and Infrastructure', 	'Transport', 	'Personal Development and Jobs', 	'Revenue', 	'Corporate', 	'N/A', 	'Purchasing', 	'Purchasing', 	'Accomodation', 	'Local Tax']),
('Please give an example of an implementation with a council. What were the outcomes?', 'long_text', 'Please be as specific as possible, including figures for time or financial savings', 'Local Authorities', NULL),
('Can you name any individuals in Local Councils who would be able to discuss their use of the product with other councils?', 'short_text', '', 'Local Authorities', NULL),
('Testimonial Video', 'video', 'Please post a link to a youtube video', 'Local Authorities', NULL),
('Add an impact evaluation', 'file_upload', 'This is a report councils may produce after adopting a new service. ', 'Impact', NULL),
('Add an ROI spreadsheet', 'file_upload', '', 'Impact', NULL),
('Do you have standard pricing?', 'checkbox', '', 'Pricing & Legal', ARRAY['yes', 'no']),
('What are the cost & licensing arrangements?', 'short_text', 'For example a 5 year up front cost model, an annual per user license software as a service model. ', 'Pricing & Legal', NULL),
('Does your solution require personal data to be collected? ', 'checkbox', '', 'Pricing & Legal', ARRAY['yes', 'no']),
('Do you have standard Data Protection Impact Assessments or Information sharing protocols for use with your product? ', 'file_upload', '', 'Pricing & Legal', NULL),
('Product screenshots', 'image', 'Please upload images of your product', 'Images & Demos', NULL),
('Video Product Demonstration', 'video', 'Please post a link to a youtube video', 'Images & Demos', NULL),
('Related Links', 'url_inputs', 'Add any useful links, for example: your profile on any digital marketplaces / procurement frameworks', 'Links', NULL);

CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  company_id INTEGER REFERENCES companies(id),
  question_id INTEGER REFERENCES questions(id),
  answer TEXT [] NOT NULL
);

INSERT INTO answers (company_id, question_id, answer) VALUES
(1, 1, ARRAY['Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.']),
(1, 2, ARRAY['kdjgdd785g']),
(2, 1, ARRAY['sgfdgdfgdhd']),
(2, 5, ARRAY['sfdsfsgs']),
(1, 4, ARRAY['fsgdfgdgd']),
(1, 3, ARRAY['sfdfsdgdfgd']);



COMMIT;
