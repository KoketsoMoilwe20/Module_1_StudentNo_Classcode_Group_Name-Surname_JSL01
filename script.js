function validateSyntax() {
  let input = document.getElementById("petInput").value;
  // Validation logic goes here
  let result = ""; // Placeholder for validation result

  // TODO: Write your validation logic here
  // Check if input starts with 'pet_' and followed by alphanumeric characters

  const validSyntax = /^pet_[0-9]{4}[a-zA-Z0-9]+$/;

  if (validSyntax.test(input)) {
    result = "Valid Syntax";
  } else {
    result = "Invalid Syntax";
  }

  document.getElementById("result").innerText = result;
}

