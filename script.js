document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    fetch('https://script.google.com/macros/s/AKfycbxwzPeEq-eAj1hiduPA9o9kR5rwJbsuWUWO1H9YM43-XGduW1h-34zx7ldEn01upLz4/exec', { // Replace with your Google Apps Script URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'name': name,
            'email': email,
            'message': message
        }),
        mode: 'cors' // Enable CORS
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for your message!');
            document.getElementById('contactForm').reset();
        } else {
            alert('There was a problem with your submission.');
        }
    })
    .catch(error => console.error('Error:', error));
}
