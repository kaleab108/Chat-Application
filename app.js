// DOM elements
const loginContainer = document.getElementById("login-container");
const chatContainer = document.getElementById("chat-container");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const userUsername = document.getElementById("user-username");
const chatMessagesContainer = document.getElementById("chat-messages");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send-btn");
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



// Function to send a message
function sendMessage(messageText) {
    const message = {
        sender: currentUser.username,
        text: messageText,
    };

    // Emit the message to the server
    socket.emit('message', message);
}



sendButton.addEventListener('click', () => {
    const messageInput = document.getElementById('message');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        sendMessage(messageText);
        messageInput.value = '';
    }
});



// Function to handle logout
function logout() {
    // You can perform any necessary logout actions here, such as clearing user data or session
    // Redirect the user back to the login screen (you should replace 'login.html' with your actual login page)
    window.location.href = "login.html";
}

// Event listener for logging out
logoutButton.addEventListener("click", () => {
    logout();
});
// Event listener for sending a message when the 'Send' button is clicked
sendButton.addEventListener('click', () => {
    const messageInput = document.getElementById('message');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        sendMessage(messageText);
        messageInput.value = '';
    }
});

// ... (remaining code)
