# Smart Calculator Documentation

## 1. Introduction
The **Smart Calculator** is a web-based calculator built using **HTML, CSS, and JavaScript**.  
It performs basic and advanced mathematical operations such as addition, subtraction, multiplication, division, percentage, and square root.  

The application also includes a **Dark/Light theme toggle**, a **loading screen animation**, and is fully **responsive** for mobile and desktop users.

---

## 2. Purpose
The purpose of this project is to demonstrate fundamental and intermediate web development skills using front-end technologies.  
It combines **HTML structure**, **CSS styling with responsive grid design**, and **JavaScript logic** for interactivity.

---

## 3. Tools and Technologies
| Tool / Language | Description |
|------------------|-------------|
| HTML5 | For structuring the calculator interface |
| CSS3 | For styling, layout, and responsiveness |
| JavaScript (ES6) | For functionality and event handling |
| LocalStorage | To store and maintain theme preference |
| VS Code | Code editor used for development |

---

## 4. Features
- 🧮 Perform arithmetic operations: `+`, `-`, `×`, `÷`, `%`
- 🔢 Advanced operations: Square root `√`, Negation `±`, and Answer recall `ans`
- 🌗 Light/Dark theme toggle (saved in local storage)
- 🕓 Loading animation screen before app launch
- 📱 Fully responsive design (mobile & desktop)
- ⚡ Smooth button animations and input feedback

---

## 5. System Requirements
- Modern web browser (Chrome, Edge, Firefox, Safari)
- No installation required — runs locally in a browser

---

## 6. How It Works
1. When the app is loaded, a **loading screen** appears for 2 seconds.
2. The **calculator interface** fades in smoothly.
3. Users can perform calculations by clicking on buttons.
4. The **display text auto-resizes** to fit long expressions.
5. The **“Dark Mode”** button toggles between themes and remembers your last choice using `localStorage`.

---

## 7. JavaScript Logic Overview
- **Event Listeners** handle all button clicks.
- **if-else statements** control each operation (`clear`, `delete`, `ENTER`, etc.).
- The app uses **`eval()`** for expression evaluation after replacing operators (`x` → `*`, `÷` → `/`).
- **Math.sqrt()** handles square root calculations.
- **LocalStorage** stores theme preferences persistently.

---

## 8. Testing and Validation
- Verified all calculator operations for correct outputs.
- Tested responsiveness across multiple screen sizes.
- Dark/Light mode functionality tested on page reload.

---

## 9. Challenges
- Adjusting the display font dynamically.
- Keeping the layout consistent on small screens.
- Managing user inputs and ensuring valid expressions.

---

## 10. Conclusion
The Smart Calculator successfully demonstrates the integration of front-end web development concepts including DOM manipulation, CSS Grid layout, responsive design, and local data storage.

Future improvements may include:
- Keyboard input support.
- Scientific functions (sin, cos, tan, etc.).
- Calculation history.

---

## 11. Author
**Mashele Louis**  
*Vaal University of Technology — Web Development 3.1 Project (2025)*
