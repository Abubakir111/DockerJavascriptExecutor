# Node.js JavaScript Code Executor

This project provides a REST API to execute JavaScript code dynamically. It is built using Node.js and can run inside a Docker container.

## Features

- Executes JavaScript code sent via HTTP POST requests.
- Returns the result or any errors in JSON format.
- Supports cross-origin requests with pre-configured CORS.

---

## Project Structure

---

## Installation and Setup

1. **Clone the Repository**  
   Clone the project repository from GitHub to your local machine:

   ```bash
    git clone git@github.com:Abubakir111/DockerJavascriptExecutor.git
   cd DockerJavascriptExecutor
   ```

2. **Install Dependencies**  
   If you want to run the project locally without Docker, install the required dependencies:

   ```bash
   npm install
   ```

3. **Run the Application Locally (Without Docker)**  
   Start the server:
   ```bash
   node server.js
   ```
   The application will be available at `http://localhost:5000/execute`.

---

## How to Download and Run the Project with Docker

1. **Clone the Repository**  
   Clone the project repository from GitHub to your local machine:

   ```bash
   git clone git@github.com:Abubakir111/DockerJavascriptExecutor.git
   cd DockerJavascriptExecutor
   ```

2. **Build and Run the Docker Container**  
   Use Docker to build and start the container:

   ```bash
   docker build -t nodejs-executor .
   docker run -d -p 5000:5000 nodejs-executor
   ```

   - `-t nodejs-executor`: Assigns the name `nodejs-executor` to the image.
   - `-d`: Runs the container in detached mode (in the background).
   - `-p 5000:5000`: Maps port 5000 of the container to port 5000 on your local machine.

3. **Access the Application**  
   Once the container is running, the API will be accessible at:
   `http://localhost:5000/execute`

4. **Send a Request**  
   Use tools like **Postman** or **curl** to test the API:

   ```bash
   curl -X POST http://localhost:5000/execute \
   -H "Content-Type: application/json" \
   -d '{"code": "console.log(\\"Hello, world!\\");"}'
   ```

   Example response:

   ```json
   {
     "result": "Hello, world!\n"
   }
   ```

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
