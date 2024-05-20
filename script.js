document.getElementById('contactForm').addEventListener('submit', function(event) {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var comments = document.getElementById('comments').value;
  
    if (!firstName || !lastName || !email || !comments) {
      alert('All fields are required!');
      event.preventDefault();
    }
  });