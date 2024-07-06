# Node.js Application with Dockerized MongoDB and Clean Architecture

This repository contains a Node.js application that uses Docker Compose to manage MongoDB and mongo-express dependencies, following Clean Architecture principles. Follow the steps below to clone, install dependencies, and run the application.

## Prerequisites

- Docker installed on your machine
- Node.js version >= 18.12.1 installed
- npm or yarn package manager

## Installation

**1. Clone the repository:**

```bash
   git clone https://@github.com/lcnghia95/le-cong-nghia.git
   cd le-cong-nghia/src/problem5
```
   
**2. Install dependencies:**
```bash
   yarn install
   //or
   npm install
```


## Running the Application

**1. Configure environment variables:**


```env
    NODE_ENV=development
    PORT=3001
    BACKEND_DOMAIN=http://localhost:3001
    DATABASE_URL=mongodb://localhost:27017
    DATABASE_USERNAME=admin
    DATABASE_PASSWORD=admin
    DATABASE_NAME=challenge
    DATABASE_PORT=27017
```


**2. Start MongoDB and mongo-express using Docker Compose:**

```bash
   docker-compose up -d 
   //or
   docker compose up -d
```


**3. Start the Nodejs application:**

```bash
    yarn start
    //or
    npm start
```


## Conclusion

This README provides clear instructions for setting up and running the Node.js application with Dockerized MongoDB, following Clean Architecture principles. If you encounter any issues or have questions, feel free to contact me at [lcnghia95@gmail.com](mailto:lcnghia95@gmail.com) or through the repository's issue tracker.

Thank you for reviewing this documentation. I look forward to discussing how we can enhance and expand this project further.

Best regards,
Nghia Le Cong