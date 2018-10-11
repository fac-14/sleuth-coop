exports.get = (req, res) => {
  res.send(JSON.stringify(dummyQuestions));
};

const dummyQuestions = [
  {
    id: 0,
    question: "Why is it useful to Local Authorities?",
    input_type: "short_text",
    helper_text:
      "Imagine this is being read by a member of the public. Avoid any technical language and clearly explain how your product solves a problem.",
    category: "Product"
  },
  {
    id: 1,
    question: "Free Proof of Concept",
    input_type: "checkbox",
    helper_text: "Do you offer a free proof of concept?",
    category: "Product",
    options: ["Yes"]
  },
  {
    id: 2,
    question: "ROI Spreadsheet",
    input_type: "file_upload",
    helper_text:
      "Upload a spreadsheet that demonstrates return on investment for your clients",
    category: "Impact"
  },
  {
    id: 3,
    question:
      "What other types of local authority services would your product be relevant to?",
    input_type: "dropdown",
    helper_text:
      "For example: Eligibility, grants, benefits and fraud or Care, Support and Counselling (take of the list of cross cutting themes on the Local Government Services list)",
    category: "Local Authorities",
    options: [
      "Accomodation",
      "Administration, Co-ordination, Consultation, Events",
      "Care, Support and Counselling",
      "Claims and Compliants",
      "Control, compliance and regulation",
      "Corporate",
      "Corporate Parent",
      "Crime prevention",
      "Eligibility, Grants, Benefits and Fraud",
      "Emergency Support",
      "Environmental Cleanliness, Blights and Hazards",
      "Fair allocation of limited resources",
      "Health and Safety",
      "Information, Advice and Advocacy",
      "Landlord",
      "Local Tax",
      "Personal Development and Jobs",
      "Planning, Strategy, Research, Consultancy, Sustainability and Infrastructure",
      "Purchasing",
      "Registers and Public Record Keeping",
      "Revenue",
      "Transport",
      "Wellbeing"
    ]
  },
  {
    id: 4,
    question: "What service(s) could the product be relevant to?",
    input_type: "dropdown",
    helper_text: "For example: parking, council tax, vulnerable adults.",
    category: "Product",
    options: [
      "Adult Education",
      "Adults Social care",
      "Archaeology",
      "Arts",
      "Building Control",
      "Business Services",
      "Carers Services",
      "Cemeteries",
      "Children's Social Care",
      "Coastal Protection",
      "Council Housing Management",
      "Council Tax",
      "Council wide",
      "Disabled Adults",
      "Early Years",
      "Education Provision",
      "Education Welfare",
      "Electoral Services",
      "Environmental Services",
      "Family Support",
      "Farming",
      "Further Education",
      "Health and Safety",
      "Highways",
      "Housing Advice",
      "Housing Benefits",
      "Housing Needs",
      "Land Registry",
      "Leaseholder Services",
      "Leisure",
      "Libraries",
      "Looked after Children",
      "Parking",
      "Planning",
      "Public Health",
      "Recycling",
      "Registrars",
      "Regulatory Services",
      "School Admissions",
      "Signposting",
      "Special Educational Needs",
      "Sundry Debtors",
      "Transport",
      "Waste collection",
      "Welfare benefits"
    ]
  }
];
