// Register new user
function register() {
  const username = document.getElementById('regUser').value;
  const password = document.getElementById('regPass').value;

  if (username === '' || password === '') {
    alert('Please enter a username and password!');
    return;
  }

  // Save user in localStorage
  localStorage.setItem(username, password);
  alert('Registration successful! You can now log in.');
  document.getElementById('regUser').value = '';
  document.getElementById('regPass').value = '';
}

// Login user
function login() {
  const username = document.getElementById('loginUser').value;
  const password = document.getElementById('loginPass').value;

  const storedPassword = localStorage.getItem(username);

  if (storedPassword === password) {
    alert('Login successful!');
    localStorage.setItem('loggedInUser', username);
    window.location.href = 'secure.html';
  } else {
    document.getElementById('message').textContent = 'Invalid username or password!';
  }
}
