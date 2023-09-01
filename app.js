// DOM elements
const loginContainer = document.getElementById("login-container");
const chatContainer = document.getElementById("chat-container");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const userUsername = document.getElementById("user-username");
const chatMessagesContainer = document.getElementById("chat-messages");
const messageInput = document.getElementById("message");
const \sendButton = document.getElementById("send-btn");
const logoutButton = document.getElementById("logout-btn");





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




// Function to add a new message to the chat
function addMessage(username, message) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", "new-message");
    messageDiv.innerHTML = `<p><strong>${username}:</strong> ${message}</p>`;
    chatMessages.appendChild(messageDiv);

    // Scroll to the bottom to show the new message
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Remove the "new-message" class after the animation
    setTimeout(() => {
        messageDiv.classList.remove("new-message");
    }, 500); // The same duration as the animation (0.5 seconds)
}

// ... (the rest of your code) ...



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

sendButton.addEventListener("click", () => {
    // Get the message text from the input field
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        // Create a new message element for the recipient
        const recipientMessageDiv = document.createElement("div");
        recipientMessageDiv.classList.add("message", "incoming");
        recipientMessageDiv.innerHTML = `<p><strong>${otherUser.username}:</strong> ${messageText}</p>`;

        // Create a new message element for the sender
        const senderMessageDiv = document.createElement("div");
        senderMessageDiv.classList.add("message", "outgoing");
        senderMessageDiv.innerHTML = `<p><strong>${currentUser.username}:</strong> ${messageText}</p>`;

        // Append both messages to the chat messages container
        chatMessagesContainer.appendChild(recipientMessageDiv);
        chatMessagesContainer.appendChild(senderMessageDiv);

        // Clear the input field
        messageInput.value = "";

        // Scroll to the bottom to show the new messages
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    }
});

// Function to add a message to the chat container
function addMessageToChat(sender, messageText) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender === currentUser ? "outgoing" : "incoming");
    messageDiv.innerHTML = `<p><strong>${sender.username}:</strong> ${messageText}</p>`;

    // Append the message to the chat messages container
    chatMessagesContainer.appendChild(messageDiv);

    // Scroll to the bottom to show the new message
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
}

// Event listener for sending a message
sendButton.addEventListener("click", () => {
    // Get the message text from the input field
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        // Add the message to the chat container with the sender's username
        addMessageToChat(currentUser, messageText);

        // Clear the input field
        messageInput.value = "";
    }
});