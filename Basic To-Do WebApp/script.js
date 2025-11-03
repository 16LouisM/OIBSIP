// Task management functionality
const taskForm = document.getElementById('taskForm');
const taskTitle = document.getElementById('taskTitle');
const taskDescription = document.getElementById('taskDescription');
const pendingTasksList = document.getElementById('pendingTasks');
const completedTasksList = document.getElementById('completedTasks');

// Load tasks from localStorage or initialize empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

// Generate unique ID for tasks
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render tasks in the appropriate lists
function renderTasks() {
    // Clear the lists
    pendingTasksList.innerHTML = '';
    completedTasksList.innerHTML = '';
    
    // Filter tasks
    const pendingTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);
    
    // Show empty state if no tasks
    if (pendingTasks.length === 0) {
        pendingTasksList.innerHTML = `
            <li class="empty-state">
                <div>📝</div>
                <p>No pending tasks. Add a new task to get started!</p>
            </li>
        `;
    }
    
    if (completedTasks.length === 0) {
        completedTasksList.innerHTML = `
            <li class="empty-state">
                <div>✅</div>
                <p>No completed tasks yet. Complete a task to see it here!</p>
            </li>
        `;
    }
    
    // Render pending tasks
    pendingTasks.forEach(task => {
        const taskElement = createTaskElement(task);
        pendingTasksList.appendChild(taskElement);
    });
    
    // Render completed tasks
    completedTasks.forEach(task => {
        const taskElement = createTaskElement(task);
        completedTasksList.appendChild(taskElement);
    });
}

// Create a task element
function createTaskElement(task) {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;
    li.dataset.id = task.id;
    
    const completedDate = task.completed ? 
        `<div class="task-meta">Completed: ${formatDate(task.completedDate)}</div>` : '';
    
    li.innerHTML = `
        <div class="task-header">
            <div>
                <div class="task-title">${task.title}</div>
                <div class="task-description">${task.description}</div>
            </div>
        </div>
        <div class="task-meta">Added: ${formatDate(task.addedDate)}</div>
        ${completedDate}
        <div class="task-actions">
            ${!task.completed ? 
                `<button class="btn btn-success complete-btn">Complete</button>` : 
                `<button class="btn btn-outline undo-btn">Undo</button>`
            }
            <button class="btn btn-outline edit-btn">Edit</button>
            <button class="btn btn-danger delete-btn">Delete</button>
        </div>
    `;
    
    return li;
}

// Add a new task
function addTask(title, description) {
    const newTask = {
        id: generateId(),
        title: title,
        description: description,
        addedDate: new Date().toISOString(),
        completed: false,
        completedDate: null
    };
    
    tasks.push(newTask);
    saveTasks();
    renderTasks();
}

// Mark task as complete
function completeTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = true;
        task.completedDate = new Date().toISOString();
        saveTasks();
        renderTasks();
    }
}

// Mark task as incomplete
function undoTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = false;
        task.completedDate = null;
        saveTasks();
        renderTasks();
    }
}

// Edit a task
function editTask(id, newTitle, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.title = newTitle;
        task.description = newDescription;
        saveTasks();
        renderTasks();
    }
}

// Delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

// Event listeners
taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = taskTitle.value.trim();
    const description = taskDescription.value.trim();
    
    if (title) {
        addTask(title, description);
        taskTitle.value = '';
        taskDescription.value = '';
        taskTitle.focus();
    }
});

// Event delegation for task actions
document.addEventListener('click', function(e) {
    const taskItem = e.target.closest('.task-item');
    if (!taskItem) return;
    
    const taskId = taskItem.dataset.id;
    
    if (e.target.classList.contains('complete-btn')) {
        completeTask(taskId);
    } else if (e.target.classList.contains('undo-btn')) {
        undoTask(taskId);
    } else if (e.target.classList.contains('delete-btn')) {
        if (confirm('Are you sure you want to delete this task?')) {
            deleteTask(taskId);
        }
    } else if (e.target.classList.contains('edit-btn')) {
        const task = tasks.find(task => task.id === taskId);
        if (task) {
            const newTitle = prompt('Edit task title:', task.title);
            if (newTitle !== null) {
                const newDescription = prompt('Edit task description:', task.description);
                editTask(taskId, newTitle, newDescription);
            }
        }
    }
});

// Initial render
renderTasks();