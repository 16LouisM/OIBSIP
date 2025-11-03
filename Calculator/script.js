//  Loading Screen
window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  const calculator = document.querySelector(".calculator");

  setTimeout(() => {
    loading.style.display = "none"; // Hide loading
    calculator.classList.remove("hidden");
    calculator.classList.add("fade-in"); // Show calculator smoothly
  }, 2000); // 2 seconds delay
});

const display = document.getElementById("display");
let currentInput = "";
let lastAnswer = "";


// Function to adjust text size dynamically
function adjustDisplayFont() {
  const length = display.value.length;
  display.classList.remove("small-text", "medium-text");

  if (length > 14) display.classList.add("small-text");
  else if (length > 9) display.classList.add("medium-text");
}

// Calculator button logic
document.querySelectorAll(".buttons button").forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;


    if (value === "clear") {
      currentInput = "";
      display.value = "";
    }
    else if (value === "del") {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    }
    else if (value === "ENTER") {
      try {
        const expression = currentInput
          .replace(/x/g, "*")
          .replace(/÷/g, "/")
          .replace(/√/g, "Math.sqrt")
          .replace(/%/g, "/100");

        // Prevent invalid characters or double operators
        if (/[^0-9+\-*/().%√]/.test(expression) || /[+\-*/]{2,}/.test(expression)) {
          throw new Error("Invalid Input");
        }

        let result = eval(expression);
        if (isNaN(result) || !isFinite(result)) throw new Error("Invalid Calculation");

        display.value = result;
        lastAnswer = result;
        currentInput = result.toString();
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    }
    else if (value === "ans") {
      currentInput += lastAnswer;
      display.value = currentInput;
    }
    else if (value === "±") {
      currentInput = currentInput.startsWith("-")
        ? currentInput.slice(1)
        : "-" + currentInput;
      display.value = currentInput;
    }
    else {
      currentInput += value;
      display.value = currentInput;
    }

    adjustDisplayFont();
  });
});

// ===== Theme Toggle with Local Storage =====
const toggleBtn = document.getElementById("toggle-theme");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️ Light Mode";
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});

// ===== Keyboard Support =====
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || "+-*/.%()".includes(key)) {
    currentInput += key === "*" ? "x" : key === "/" ? "÷" : key;
    display.value = currentInput;
  } else if (key === "Enter" || key === "=") {
    document.getElementById("enter").click();
  } else if (key === "Backspace") {
    document.getElementById("del").click();
  } else if (key.toLowerCase() === "c") {
    document.getElementById("clear").click();
  }

  adjustDisplayFont();
});

