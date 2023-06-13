// Access the element with the ID "personal"
const personalDetails = document.getElementById('personal');

// Change the color to purple
personalDetails.style.color = 'purple';

// Access the unordered list element
const technologicalStackList = document.querySelector('ul');

// Find the list item with the text "Agile and JIRA"
const agileJiraItem = technologicalStackList.querySelector(':nth-child(2)');

// Remove the list item from the unordered list
technologicalStackList.removeChild(agileJiraItem);



 // Get the element by its ID
 var technologicalStackElement = document.getElementById("technological-stack");
        
 // Change the color to red
 technologicalStackElement.style.color = "red";





// script.js

// Find the profile link element by its ID
const profileLink = document.getElementById('profile-link');

// Add a click event listener to the profile link
profileLink.addEventListener('click', function(event) {
  // Prevent the default behavior of the link
  event.preventDefault();
  
  // Open the Facebook login page in a new tab/window
  window.open('https://www.facebook.com/login.php', '_blank');
});
