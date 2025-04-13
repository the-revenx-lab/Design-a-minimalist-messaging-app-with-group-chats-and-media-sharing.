/* index.js */
const socket = new WebSocket('ws://localhost:8080');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messageList = document.getElementById('message-list');
const typingIndicator = document.getElementById('typing-indicator');
let typingTimeout;

socket.addEventListener('open', () => {
    console.log('Connected to WebSocket server');
    sendButton.disabled = false;
});

socket.addEventListener('message', (event) => {
    addMessage(event.data, 'received-message');
});

socket.addEventListener('error', (error) => {
    console.error('WebSocket Error:', error);
});

socket.addEventListener('close', () => {
    console.log('Disconnected from WebSocket server');
    sendButton.disabled = true;
});

function sendMessage() {
    const message = messageInput.value.trim();
    if (message && socket.readyState === WebSocket.OPEN) {
        socket.send(message);
        addMessage(`You: ${message}`, 'sent-message');
        messageInput.value = '';
    }
}

function addMessage(text, type) {
    const messageItem = document.createElement('li');
    messageItem.textContent = text;
    messageItem.classList.add('message', type);
    messageList.appendChild(messageItem);
    messageList.scrollTop = messageList.scrollHeight;
}

function showTypingIndicator() {
    typingIndicator.textContent = "Typing...";
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
        typingIndicator.textContent = "";
    }, 1000);
}

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
    showTypingIndicator();
});