function getFormvalue(event) {
  event.preventDefault(); // Prevents the form from submitting and refreshing the page
  
  // Get values from the form
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  
  // Display the values using alert
  alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
}

// Add event listener to the form on submit
document.getElementById('myForm').addEventListener('submit', getFormvalue);
