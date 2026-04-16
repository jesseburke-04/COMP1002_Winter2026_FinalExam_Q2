// This si the Javascript file for the Final Exam
// Calling the form and adding an event listener for when the form is submitted
document.getElementById("Form").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
  event.preventDefault();
//create varibales for the JavaScript form
  var name = document.getElementById("name").value.trim();
  var thankyouMessage = document.getElementById("thankyouMessage");

  thankyouMessage.textContent = "Thank you, " + name + "! You have registered.";
});