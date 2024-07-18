function checkKeyPress(event) {
  if (event.keyCode === 13) { // 13 is the key code for "Enter" key
    checkAccess();
  }
}

function checkAccess() {
  var accessCode = document.getElementById('accessCode').value.toLowerCase().replace(/\s+/g, ''); // Convert to lowercase and remove spaces
  var expectedCode = 'hardcoreplanography'; // Expected password without spaces, you can change it as needed

  if (accessCode === expectedCode.toLowerCase()) { // Convert to lowercase for comparison
    // Set a flag to indicate successful access
    sessionStorage.setItem('accessGranted', 'true');
    window.location.href = 'second-page.html';
  } else {
    alert('So close, darling! Try again!');
  }
}
