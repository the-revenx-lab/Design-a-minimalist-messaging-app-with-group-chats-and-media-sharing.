# Real-Time Chat Application

This is a simple real-time chat application built using WebSockets, Express, and HTML/CSS/JavaScript. It allows users to send and receive messages in real time, with the messages being broadcasted to all connected clients.

## Features

- Real-time message exchange using WebSockets.
- Responsive and modern UI.
- Ability to send and receive messages across multiple clients simultaneously.
- Typing indicator.

## Technologies Used

- **Backend**: 
  - Node.js
  - Express.js
  - WebSocket (ws library)
  
- **Frontend**:
  - HTML
  - CSS (for styling)
  - JavaScript (for handling the WebSocket connection)

## Installation

### Prerequisites
- Node.js installed on your machine.
- A web browser to view the frontend.

### 1. Clone the repository
Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/real-time-chat-app.git
cd real-time-chat-app

2. Install Dependencies

npm install

3. Start the Server

node server.js
The server will run on http://localhost:8080.

4. Open the Chat Application

http://localhost:8080


5. Testing
To test the chat functionality:

Open the URL in multiple tabs or browsers to simulate different users.

Type a message in one tab and you should see it appear in real-time in all other tabs.