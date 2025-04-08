document.getElementById('survey-form').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent default form submission

  const form = event.target;
  if (!form.checkValidity()) {
    return;
  }

  // Show loading message
  document.getElementById('loading').style.display = 'block';


  const formData = new FormData(form);
  let data = new URLSearchParams();
  for (const pair of formData) {
    data.append(pair[0], pair[1]);
  }

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbzTL_9VFe0cieebWCNR4HkdIxnsrG7jDxEhmq7gmknRBzwllK7TTQAv00qdLdlEOnnQcA/exec', {
      method: 'POST',
      body: data
    });
    console.log('Success:', await response.text());
    window.location.href = "success.html"; // Redirect to success page
  } catch (error) {
    console.error('Error:', error);
    alert('Submission failed. Please try again.');
  } finally {
    document.getElementById('loading').style.display = 'none';
  }
});



// Add event listener for Enter key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent the default action
    document.getElementById('submit-btn').click(); // Trigger the submit button click
  }
});
      document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
});