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
  category VARCHAR(100) NOT NULL,
  options TEXT [] DEFAULT NULL
);

INSERT INTO questions (question, input_type, helper_text, category, options) VALUES
('Why is this product useful to Local Authorities?', 'short_text', 'Imagine this is being read by a member of the public. Avoid any technical language and clearly explain how your product solves a problem.', 'Product', ARRAY['250 words']),
('Product Explanation', 'video', 'Please add a link to a youtube video explaining the features and benefits of your product. Avoid any technical language and clearly explain how your product solves a problem. Imagine it is being watched by a member of the public.', 'Product', NULL),
('Free proof of concept or trial available', 'checkbox', 'Do you offer a free proof of concept or a free trial for your product?', 'Product', ARRAY['yes', 'no']),
('Implementation time', 'short_text', 'What is the typical implementation time for this product? If it varies depending on size of organisation give a range / examples.', 'Product', ARRAY['250 words']),
('Service(s) this product could be relevant to', 'dropdown', 'What service(s) could the product be relevant to? For example: parking, council tax, vulnerable adults.', 'Product', ARRAY[ 'Further Education', 'Looked after Children', 'Adults Social care', 'Housing Needs', 'Welfare benefits', 'Building Control', 'Business Services', 'Carers Services', 'Council wide', 'Family Support', 'Signposting', 'Adults Social Care', 'Council Tax', 'Planning', 'Disabled Adults', 'Housing Benefits', 'Early Years', 'Special Educational Needs', 'Welfare Benefits', 'Council Housing Management', 'Farming', 'Council Wide', 'Looked After Children', 'Leisure', 'Parking', 'School Admissions', 'Housing Advice', 'Recycling', 'Regulatory Services', 'Archaeology', 'Arts', 'Libraries', 'Waste collection', 'Transport', 'Cemeteries', 'Education Welfare', 'Environmental Services', 'Registrars', 'Highways', 'Education Provision', 'Adult Education', 'Health and Safety', 'Public Health', 'Land Registry', 'Council Wide', 'Children''s Social Care', 'Council Housing management', 'Waste Collection', 'Sundry Debtors', 'Electoral Services', 'Leaseholder Services', 'Coastal Protection']),
('Currently running with a local government or authority', 'checkbox', 'Is the product currently running live with any local government or authority?', 'Local Authorities', ARRAY['yes', 'no']),
('Council(s) currently using this product', 'short_text', 'Which council(s) is it running with?', 'Local Authorities', NULL),
('Type of council(s) running this product', 'dropdown', 'What type of council(s) is it running with?', 'Local Authorities', ARRAY['Unitary Authorities', 'London Boroughs', 'Metropolitan Districts', 'County Councils', 'District Councils', 'City of London', 'Town And Parish Councils', 'Other']),
('Areas of local authority services the product could be relevant to', 'dropdown', 'What other types of local authority services would your product be relevant to?', 'Local Authorities', ARRAY['Eligibility, Grants, Benefits and Fraud', 	'Corporate Parent', 	'Care, Support and Counselling', 	'Fair allocation of limited resources', 	'Control, compliance and regulation', 	'Information, Advice and Advocacy', 	'Landlord', 	'Administration, Co-ordination, Consultation, Events', 	'Registers and Public Record Keeping', 	'Claims and Compliants', 	'Health and Safety', 	'Emergency Support', 	'Environmental Cleanliness, Blights and Hazards', 	'Crime prevention', 	'Wellbeing', 	'Planning, Strategy, Research, Consultancy, Sustainability and Infrastructure', 	'Transport', 	'Personal Development and Jobs', 	'Revenue', 	'Corporate', 	'N/A', 	'Purchasing', 	'Purchasing', 	'Accomodation', 	'Local Tax']),
('An example of an implementation with a council', 'long_text', 'Give an example of an implementation with a council. What were the outcomes? Please be as specific as possible, including figures for time or financial savings.', 'Local Authorities', NULL),
('Individuals in Local Councils who are open to discussing their use of the product', 'short_text', 'Can you name any individuals in Local Councils who would be able to discuss their use of the product with other councils? Please check for their consent before adding their name/contact details.', 'Local Authorities', NULL),
('Testimonial Video', 'video', 'Please post a link to a youtube video', 'Local Authorities', NULL),
('Impact evaluation', 'file_upload', 'This is a report councils may produce after adopting a new service. ', 'Impact', NULL),
('ROI spreadsheet', 'file_upload', 'Upload a return on investment spreadsheet.', 'Impact', NULL),
('Standard pricing available', 'checkbox', 'Does the product have standard pricing?', 'Pricing & Legal', ARRAY['yes', 'no']),
('Cost & licensing arrangements', 'short_text', 'For example a 5 year up front cost model, an annual per user license software as a service model, etc.', 'Pricing & Legal', NULL),
('Product requires personal data to be collected', 'checkbox', 'Does the product require the collection of personal data?', 'Pricing & Legal', ARRAY['yes', 'no']),
('Data Protection Impact Assessments & Information Sharing Protocols', 'file_upload', 'Do you have standard Data Protection Impact Assessments or Information Sharing Protocols for use with your product? Please upload the relevant documents here.', 'Pricing & Legal', NULL),
('Product screenshots', 'image', 'Please upload images of your product', 'Images & Demos', NULL),
('Product Demonstration', 'video', 'Please post a link to a youtube video demonstrating how to use your product.', 'Images & Demos', NULL),
('Related Links', 'url_inputs', 'Add any useful links, for example: your profile on any digital marketplaces / procurement frameworks.', 'Links', NULL);

CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  company_id INTEGER REFERENCES companies(id),
  question_id INTEGER REFERENCES questions(id),
  answer TEXT [] NOT NULL
);

INSERT INTO answers (company_id, question_id, answer) VALUES 
(1, 1, ARRAY['We are useful because... Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.']),
(1, 2, ARRAY['https://www.youtube.com/embed/sGdVEbHTI1A']),
(1, 3, ARRAY['yes']),
(1, 4, ARRAY['Typical implementation time... BOOM! Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.']),
(1, 5, ARRAY['Further Education', 'Looked after Children', 'Adults Social care']),
(1, 6, ARRAY['yes']),
(1, 7, ARRAY['The Council of Silly Walks']),
(1, 8, ARRAY['London Boroughs', 'Metropolitan Districts']),
(1, 9, ARRAY['Eligibility, Grants, Benefits and Fraud', 'Corporate Parent', 'Care, Support and Counselling']),
(1, 10, ARRAY['Example of an Implementation :- Doggo ipsum stop it fren long woofer shoob such treat pupper very taste wow, pupperino boof shoob. Dat tungg tho heckin good boys and girls such treat puggorino corgo maximum borkdrive fluffer, stop it fren adorable doggo long doggo waggy wags corgo. Vvv extremely cuuuuuute wrinkler big ol floofs length boy long water shoob, lotsa pats smol shoob you are doing me a frighten woofer. Fat boi length boy borkdrive puggorino, yapper.

Extremely cuuuuuute waggy wags blep bork woofer, very taste wow waggy wags. very taste wow bork blep. shoober pupper smol borking doggo with a long snoot for pats. Doing me a frighten very jealous pupper pats he made many woofs, shoob corgo shooberino heckin good boys, woofer wow very biscit. Long bois he made many woofs long woofer, pupper. Porgo corgo he made many woofs noodle horse the neighborhood pupper, heckin good boys and girls the neighborhood pupper boof. Wow very biscit blop you are doin me a concern many pats such treat shoob what a nice floof, shoober long bois vvv blop pupper. Long doggo extremely cuuuuuute pupper shooberino, extremely cuuuuuute. H*ck pupper doggorino fat boi long doggo, heckin good boys lotsa pats doge.']),
(1, 11, ARRAY['Jessie Beech from the Council of Fun and Good Vibes is happy to discuss her experience implementing our product. Contact her at jessie-beech@fun_and_good_vibes.com']),
(1, 12, ARRAY['https://www.youtube.com/embed/YeemJlrNx2Q']),
(1, 13, ARRAY['test.xlsx']),
(1, 14, ARRAY['test.xlsx']),
(1, 15, ARRAY['no']),
(1, 19, ARRAY['https://confluence.atlassian.com/jirasoftware/files/949226697/950287800/4/1527857985277/jira_issue_navigator.png']),
(1, 21, ARRAY['Linkedin Company Page-https://www.linkedin.com/company/atlassian']);

COMMIT;