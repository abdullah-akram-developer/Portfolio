const anch = document.getElementById("ho");
const para = document.getElementById("after-drops");

// Add a click event listener to the anchor
anch.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default anchor behavior
  paragraph.textContent = "HOME";
});

const ancho = document.getElementById("port");
const parag = document.getElementById("after-drops");

// Add a click event listener to the anchor
ancho.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default anchor behavior
  paragraph.textContent = "PORTFOLIO";
});

const anchor = document.getElementById("con");
const paragraph = document.getElementById("after-drops");

// Add a click event listener to the anchor
anchor.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default anchor behavior
  paragraph.textContent = "CONTACT";
});










// Function to display a section and hide the others
function displaySection(sectionId) {
  // Hide all sections
  document.getElementById('home').classList.add('d-none');
  document.getElementById('portfolio').classList.add('d-none');
  document.getElementById('contact').classList.add('d-none');

  // Show the clicked section
  document.getElementById(sectionId).classList.remove('d-none');

  // Update the text in after-drops
  document.getElementById('after-drops').textContent = sectionId.toUpperCase();
}

// Event listeners for the buttons in the sidebar
document.getElementById('ho').addEventListener('click', function() {
  displaySection('home');
});

document.getElementById('port').addEventListener('click', function() {
  displaySection('portfolio');
});

document.getElementById('con').addEventListener('click', function() {
  displaySection('contact');
});







// Function to display a section and hide the others
function displaySection(sectionId) {
  // Hide all sections
  document.getElementById('home').classList.add('d-none');
  document.getElementById('portfolio').classList.add('d-none');
  document.getElementById('contact').classList.add('d-none');

  // Show the selected section
  document.getElementById(sectionId).classList.remove('d-none');

  // Update the text in after-drops
  document.getElementById('after-drops').textContent = sectionId.toUpperCase();
}

// Event listener for the "Explore Now" button
document.getElementById('explore-btn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  displaySection('portfolio'); // Show Contact section
});

// Event listeners for all "Order Now" buttons
document.querySelectorAll('.order-now-btn').forEach(function(button) {
  button.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior
      displaySection('contact'); // Show Contact section
  });
});














