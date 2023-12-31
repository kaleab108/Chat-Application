const chatMessagesContainer = document.getElementById("chat-messages");
const sendButton = document.getElementById("send-btn");
const logoutButton = document.getElementById("logout-btn");


// Use the functions in your app.js as needed
const currentUser = { username: "user1" };
const otherUser = { username: "user2" };


// Timeout ID to clear the user activity indication
let typingTimeout;

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

// Function to display stored messages when the chat loads
function displayStoredMessages() {
    const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];

    storedMessages.forEach((message) => {
        const sender = { username: message.sender };
        addMessageToChat(sender, message.text);
    });
}

// Call the displayStoredMessages function when the chat loads
window.addEventListener('load', displayStoredMessages);

// Function to send a message
function sendMessage(messageText) {
    // Simulate sending the message to the server and receiving it back
    const message = {
        sender: currentUser.username,
        text: messageText,
    };
    // Add the message to the chat container with the sender's username
    addMessageToChat(currentUser, message.text);

    // Clear the input field
    messageInput.value = "";
}


// Function to handle logout
function logout() {
    // Perform any necessary logout actions here, such as clearing user data or ending a session

    // For example, you can clear user data stored in localStorage:
    localStorage.removeItem("userToken"); // Assuming you use localStorage to store user data

    // Redirect the user back to the login screen (replace 'login.html' with your actual login page URL)
    window.location.href = "login.html";

    // You can also add console logs to check if the function is called
    console.log("User has logged out."); // Log for debugging
}


// Function to indicate user activity (e.g., "user is typing...")
function indicateUserActivity() {
    // Display the user activity indication (e.g., "User is typing...")
    const activityIndicator = document.getElementById("user-activity");
    activityIndicator.textContent = "User is typing...";

    // Clear the indication after 3 seconds (adjust the delay as needed)
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
        activityIndicator.textContent = "";
    }, 3000); // Delay in milliseconds
}
// Event listener for detecting user typing
messageInput.addEventListener("input", () => {
    indicateUserActivity();
});

sendButton.addEventListener('click', () => {
    const messageInput = document.getElementById('message');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        sendMessage(messageText);
        messageInput.value = '';
    }
});


// Event listener for logging out
logoutButton.addEventListener("click", () => {
    logout();
});


// Export functions to be used in app.js or other parts of your application
export {
    addMessageToChat,
    sendMessage,
    indicateUserActivity,
};

document.addEventListener('DOMContentLoaded', function () {
    // Event listener setup code here
});


// local storage

// Function to send a message
function sendMessage(messageText) {
    const message = {
        sender: currentUser.username,
        text: messageText,
        timestamp: new Date().toLocaleString(), // You can use a more precise timestamp
    };

    // Add the message to the chat container with the sender's username
    addMessageToChat(currentUser, message.text);

    // Store the message in localStorage (you can replace this with a backend database)
    const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    storedMessages.push(message);
    localStorage.setItem('chatMessages', JSON.stringify(storedMessages));

    // Clear the input field
    messageInput.value = "";
}

// Function to retrieve and display stored messages when the chat loads
function displayStoredMessages() {
    const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];

    storedMessages.forEach((message) => {
        addMessageToChat({ username: message.sender }, message.text);
    });
}

// Call the displayStoredMessages function when the chat loads
window.addEventListener('load', displayStoredMessages);
