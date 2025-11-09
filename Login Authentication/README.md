# 🔐 Login Authentication System

This project is a simple and secure **Login Authentication System** built using **HTML**, **CSS**, and **JavaScript**.  
It allows users to **register**, **log in**, and access a **protected page** (secure.html) — all managed through the browser’s **localStorage**.

---

## 🌟 Features

### 🧍‍♂️ User Registration
- Create an account by entering a **username** and **password**.
- User credentials are saved securely in the browser’s `localStorage`.

### 🔑 Login Authentication
- Log in using registered credentials.
- If the username and password match stored values, the user gains access to the secure page.

### 🔐 Secure Page Access
- Users can only view the **secure.html** page after successful login.
- Unauthorized visitors are redirected to the login page.

### 🚪 Logout Functionality
- Logs the user out and removes their session data.
- Automatically redirects to the login page after logging out.

### 💾 Local Storage
- No server or database required.
- All data (user credentials and session info) are stored using **localStorage**.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Structure of the web pages |
| **CSS3** | Styling and layout design |
| **JavaScript (ES6)** | Core functionality and logic |
| **localStorage API** | Client-side data persistence |

---

## 🧩 File Structure

**📂Login-Authentication/**

- ├── index.html # Main page with registration and login forms
- ├── secure.html # Protected page (only accessible after login)
- ├── style.css # Styles for both pages
- └── script.js # Registration and login functionality


---

## ⚙️ How It Works

1. **Register a User**
   - Enter a username and password in the registration form.
   - Click “Register” to save your credentials in `localStorage`.

2. **Login**
   - Enter your credentials in the login form.
   - Click “Login” to verify your details.
   - If correct → Redirects to `secure.html`.

3. **Access the Secure Page**
   - Displays a welcome message with your username.
   - If someone tries to access it directly without logging in, they’ll be redirected to `index.html`.

4. **Logout**
   - Click the **Logout** button to clear your login session and return to the login page.

---

## 💡 Example User Flow

1. Register → Username: **admin**, Password: **1234**  
2. Login → Enter **admin** / **1234**  
3. Redirects to secure page → Message: “Hello, admin!”  
4. Logout → Back to login page.

---

## 🎨 Design Overview

- **Background:** Blue gradient (`#00c6ff → #0072ff`)
- **Container:** Semi-transparent dark box with rounded corners
- **Buttons:** Bright blue with hover transition
- **Typography:** Clean and modern sans-serif font

---

## 🧾 Future Improvements

- Add password encryption (e.g., using SHA-256 or bcrypt)
- Implement a backend with database authentication
- Add “Forgot Password” functionality
- Add dark/light theme toggle
- Improve input validation and UI animations

---

## 👨‍💻 Author

**Mashele Technologies**
- Built as a beginner-friendly authentication demo using pure HTML, CSS, and JavaScript.

© 2025 Mashele Technologies. All rights reserved.
