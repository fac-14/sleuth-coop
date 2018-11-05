const formValidation = state => {
  // take in state
  // check each of the 6 inputs, return error/boolean based on issue
  // use helper functions for "tests"
  
  if (state.position === 0) {
    // email check
    return emailCheck(state.email);
  } else if (state.position === 1) {
    return passwordCheck(state.password, state.passwordConfirm);
  } else if (state.position === 2) {
    // name check
    return textCheck(state.name);
  } else if (state.position === 3) {
    //job title
    return textCheck(state.jobtitle);
  } else if (state.position === 4) {
    //company
    return textCheck(state.company);
  } else if (state.position === 5) {
    // website
    return siteCheck(state.website);
  } else if (state.position === 6) {
    // description
    return textCheck(state.description);
  }
};

const emailCheck = email => {
  const emailRegex = RegExp(
    "^[0-9a-z]([a-z_\\d\\.-]*)@[a-z\\d]([a-z\\d-]*)\\.([a-z]{2,8})(\\.[a-z]{2,8})?$",
    "i"
  );
  if (emailRegex.test(email.trim())) {
    return true;
  }
  return "Invalid email address";
};

const textCheck = text => {
  const textRegex = RegExp("^[0-9a-z\\. \\-\\']{2,}$", "i");
  if (textRegex.test(text.trim())) {
    return true;
  }
  return "Invalid entry. Please only use letters, numbers, spaces, dashes and apostrophes.";
};

const passwordCheck = (pw, confirmation) => {
  if(pw !== confirmation){
    return "Passwords do not match."
  }
  else if(pw.length > 3){
    return true;
  }
  return "Password too short."
}

const siteCheck = url => {
  // thanks to Taha @ regextester.com/94502 for the below regex
  // adapted (by Dom) purely by including DOUBLE back slashes! Need to escape the escape characters themselves when using a regex constructor
  const siteRegex = RegExp(
    "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:\\/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$",
    "i"
  );
  if (siteRegex.test(url.trim())) {
    return true;
  }
  return "Invalid URL. Please check and try again.";
};

export default formValidation;
