
## Setup Process

To get started with the goChatApp project, follow these steps:

### Pre-requisites

- [Go](https://golang.org/doc/install)
- [Node.js](https://nodejs.org/en/download/)
### Steps
1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/sidkhuntia/goChatApp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd goChatApp/backend
   ```

3. Install the required dependencies:

   ```bash
   go mod download
   ```

4. Build and run the application:

   ```bash
   go build
   ./gochatbackend
   ```

   It will start the server on port 8080.

5. Navigate to the frontend directory:
   ```bash
    cd ../frontend
   ```
6. Install the required dependencies:

   ```bash
   npm install
   ```

7. Run the application:
   ```bash
   npm start
   ```
8. Open the application in your browser:
   ```bash
   http://localhost:3000
   ```



## Architecture

### Backend

- The backend is written in Go, where a route is exposed to the frontend.
- This route is upgraded to a websocket connection using `gorilla/websocket`, which is used to send and receive messages in real-time.
- The pool starts a goroutine for each client that connects to the server. This goroutine listens for any new messages from the client, new user joining, user disconnecting and broadcasts it to all the other clients in the pool.
- When a user visits the application, a new connection is established with the backend. And the client is added to a pool of clients.
- Then the user goes in a infinite loop, where the client listens for any new messages from the server.

### Frontend

- The frontend is written in React.js, where a websocket connection is established with the backend using WebSocket API of the browser.
- The user can send messages to the server, which are broadcasted to all the other clients in the pool.
- When the user visits the application, a new connection is established with the backend. And the client is added to a pool of clients.
- When the user sends a message, it is sent with message body, type, and userName.

