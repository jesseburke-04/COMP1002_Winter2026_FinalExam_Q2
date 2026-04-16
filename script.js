document.getElementById("Form").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value.trim();
  var confirmation = document.getElementById("thankyouMessage");

  confirmation.textContent = "Thank you, " + name + "! You have registered.";
  confirmation.style.display = "block";
});