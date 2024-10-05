function validateForm() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  // Validate name field
  if (nameInput.value === "") {
    alert("Please enter your name.");
    nameInput.focus();
    return false;
  }

  // Validate email field
  if (emailInput.value === "") {
    alert("Please enter your email.");
    emailInput.focus();
    return false;
  } else if (!isValidEmail(emailInput.value)) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    return false;
  }

  // Validate message field
  if (messageInput.value === "") {
    alert("Please enter your message.");
    messageInput.focus();
    return false;
  }

  // Form validation passed
  alert("Message sent successfully!");
  return true;
}

function isValidEmail(email) {
  // A simple email validation using regular expression
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
