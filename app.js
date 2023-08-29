// DOM elements
const loginContainer = document.getElementById("login-container");
const chatContainer = document.getElementById("chat-container");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const userUsername = document.getElementById("user-username");
const chatMessages = document.getElementById("chat-messages");
const messageInput = document.getElementById("message");
const sendBtn = document.getElementById("send-btn");
const logoutBtn = document.getElementById("logout-btn");

// Simulated user data (replace with your authentication logic)
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
];

let currentUser = null;

// Login button click event
loginBtn.addEventListener("click", () => {
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Check if the entered credentials are valid (replace with your authentication logic)
    const user = users.find(u => u.username === enteredUsername && u.password === enteredPassword);

    if (user) {
        // Successful login
        currentUser = user;
        loginContainer.classList.add("hidden");
        chatContainer.classList.remove("hidden");
        userUsername.textContent = currentUser.username;
    } else {
        // Failed login
        alert("Invalid username or password.");
    }
});

// Send button click event (simulated chat functionality)
sendBtn.addEventListener("click", () => {
    const message = messageInput.value;
    if (message.trim() !== "") {
        // Append the message to the chat
        chatMessages.innerHTML += `<p>${currentUser.username}: ${message}</p>`;
        // Clear the message input
        messageInput.value = "";
    }
});

// Logout button click event
logoutBtn.addEventListener("click", () => {
    currentUser = null;
    loginContainer.classList.remove("hidden");
    chatContainer.classList.add("hidden");
    usernameInput.value = "";
    passwordInput.value = "";
    chatMessages.innerHTML = "";
});
