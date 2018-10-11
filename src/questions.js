exports.get = (req, res) => {
  res.send(JSON.stringify(dummyQuestions));
};

const dummyQuestions = [
  {
    question: "Why is it useful to Local Authorities?",
    input_type: "short_text",
    helper_text:
      "Imagine this is being read by a member of the public. Avoid any technical language and clearly explain how your product solves a problem.",
    category: "Product"
  },
  {
    question: "Free Proof of Concept",
    input_type: "checkbox",
    helper_text: "Do you offer a free proof of concept?",
    category: "Product",
    options: ["Yes", "No"]
  },
  {
    question: "ROI Spreadsheet",
    input_type: "file_upload",
    helper_text: "Upload a spreadsheet that demonstrates return on investment for your clients",
    category: "Impact"
  }
];
