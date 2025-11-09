# ✅ TaskMaster - To-Do List App

**TaskMaster** is a clean, responsive, and fully functional to-do list web app built with **HTML**, **CSS**, and **JavaScript**.  
It helps users organize their daily tasks efficiently by allowing them to **add**, **edit**, **complete**, **undo**, and **delete** tasks — with all data stored locally using **localStorage**.

---

## 🌟 Features

### 📝 Add Tasks
- Add a new task with a title and optional description.
- Each task automatically records the date and time it was added.

### ✅ Complete & Undo Tasks
- Mark tasks as completed and move them to the *Completed Tasks* section.
- Undo completed tasks to move them back to *Pending Tasks*.

### ✏️ Edit Tasks
- Edit task titles and descriptions at any time.

### 🗑️ Delete Tasks
- Remove tasks permanently with confirmation prompts to prevent accidental deletion.

### 💾 Persistent Storage
- Tasks are stored in **localStorage**, so they remain saved even after refreshing or closing the browser.

### 📱 Responsive Layout
- Works seamlessly on desktop, tablet, and mobile devices.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Structure of the application |
| **CSS3** | Styling, layout, and responsive design |
| **JavaScript (ES6)** | Functionality and interactivity |
| **localStorage API** | Persistent task storage |

---

## 🧩 File Structure

TaskMaster/

- ├── index.html # Main webpage structure
- ├── styles.css # Styling and UI design
- └── script.js # App logic and task management


---

## ⚙️ How It Works

1. **Add a Task**
   - Fill in the title and (optional) description, then click “Add Task.”
2. **Manage Tasks**
   - Use action buttons to mark tasks as complete, undo, edit, or delete.
3. **Data Persistence**
   - Tasks automatically save to your browser’s `localStorage`.
4. **Automatic Rendering**
   - Task lists update instantly after every action.

---

## 🧠 JavaScript Functionality Breakdown

### 🔹 Core Functions
- `addTask(title, description)` → Adds a new task.
- `completeTask(id)` → Marks a task as completed.
- `undoTask(id)` → Moves a completed task back to pending.
- `editTask(id, newTitle, newDescription)` → Updates task info.
- `deleteTask(id)` → Deletes a task permanently.
- `renderTasks()` → Refreshes the pending and completed task lists.
- `saveTasks()` → Stores task data in localStorage.

### 🔹 Data Structure Example
Each task is saved as an object like this:
```js
{
  id: "kls82j3lk",
  title: "Buy groceries",
  description: "Milk, eggs, and bread",
  addedDate: "2025-11-09T12:00:00.000Z",
  completed: false,
  completedDate: null
}
```
---

❤️ Author

Mashele Technologies
Built with passion to help users stay organized and productive.
