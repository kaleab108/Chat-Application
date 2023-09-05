
const chatMessagesContainer = document.getElementById("chat-messages");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send-btn");
const logoutButton = document.getElementById("logout-btn");






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
