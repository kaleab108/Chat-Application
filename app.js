// DOM elements
const loginContainer = document.getElementById("login-container");
const chatContainer = document.getElementById("chat-container");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const userUsername = document.getElementById("user-username");




// Simulated user data (replace with your authentication logic)
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" },
    { username: "user4", password: "password4" },
    { username: "user5", password: "password5" }
];

let currentUser = null;
// Function to handle user login
function handleLogin(username, password) {
    // Check if a user with the provided username and password exists
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Successful login
        currentUser = user;
        alert(`Welcome, ${currentUser.username}!`);
        loginContainer.classList.add("hidden");
        chatContainer.classList.remove("hidden");
        userUsername.textContent = currentUser.username;
    } else {
        // Failed login
        alert("Invalid username or password. Please try again.");
    }
}

// Login button click event
loginBtn.addEventListener("click", () => {
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredUsername && enteredPassword) {
        handleLogin(enteredUsername, enteredPassword);
        // Clear login inputs
        usernameInput.value = "";
        passwordInput.value = "";
    } else {
        alert("Username and password are required.");
    }
});

// ... (Login in phase) ...

// Function to handle user login
function handleLogin(username, password) {
    // Check if a user with the provided username and password exists
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Successful login
        currentUser = user;
        alert(`Welcome, ${currentUser.username}!`);
        loginContainer.classList.add("hidden");
        chatContainer.classList.remove("hidden");
        userUsername.textContent = currentUser.username;

        // Redirect to chat.html after successful login
        window.location.href = "chat.html";
    } else {
        // Failed login
        alert("Invalid username or password. Please try again.");
    }
}


