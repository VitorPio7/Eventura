# Eventura - Full-Stack Event Platform 📅

Eventura is a full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js). It provides a seamless and intuitive platform for users to discover, create, and book events happening around them.

<br>

![pt1](https://github.com/user-attachments/assets/df0f96d8-a798-45c4-975a-266ec27f0577)
![pt7](https://github.com/user-attachments/assets/a42a0022-0a4c-4b0e-b98b-c33483d5f300)
![pt6](https://github.com/user-attachments/assets/149ba912-5ed1-40e1-a764-1dd84eb27941)
![pt4](https://github.com/user-attachments/assets/bd007898-a98a-4fb0-a44d-35070947111c)
![pt3](https://github.com/user-attachments/assets/9f710b9d-fe87-40c7-b556-98e7b6ddce3b)
![pt2](https://github.com/user-attachments/assets/d77a127c-6968-4176-8eb6-8c12fc87076b)


## ✨ Key Features

Eventura is packed with features designed for both event organizers and attendees:

-   **User Authentication:** Secure user registration and login system using JSON Web Tokens (JWT).
-   **Event Discovery:** Browse and search for events on the homepage.
-   **Create & Manage Events:** Authenticated users can create their own events, complete with titles, descriptions, dates, locations, and image uploads.
-   **Image Uploads:** Seamless image handling for event posters using Multer.
-   **Detailed Event Pages:** Each event has a dynamic page with all its information.
-   **One-Click Booking:** Users can easily book a spot at any event.
-   **User Dashboard:** A personal dashboard for users to view all the events they have booked.
-   **Responsive Design:** A clean and modern UI built with Tailwind CSS that works beautifully on all devices.

---

## 🛠️ Tech Stack & Architecture

This project follows a client-server architecture, with a React front-end communicating with a Node.js/Express back-end via a RESTful API.

**Client-Side (Frontend):**
-   **[React.js](https://reactjs.org/):** A powerful JavaScript library for building user interfaces.
-   **[React Router](https://reactrouter.com/):** For client-side routing and navigation.
-   **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapid UI development.
-   **[Axios](https://axios-http.com/):** For making HTTP requests to the back-end API.
-   **[Vite](https://vitejs.dev/):** As the frontend build tool and development server.

**Server-Side (Backend):**
-   **[Node.js](https://nodejs.org/):** A JavaScript runtime for the server.
-   **[Express.js](https://expressjs.com/):** A minimal and flexible Node.js web application framework.
-   **[MongoDB](https://www.mongodb.com/):** A NoSQL database for storing application data.
-   **[Mongoose](https://mongoosejs.com/):** An ODM library for MongoDB and Node.js to model application data.
-   **[JSON Web Token (JWT)](https://jwt.io/):** For securing user authentication.
-   **[BcryptJS](https://www.npmjs.com/package/bcryptjs):** For hashing user passwords.
-   **[Multer](https://github.com/expressjs/multer):** A middleware for handling `multipart/form-data`, used for file uploads.

---

## 🚀 Getting Started & Local Development

To get a local copy up and running, follow these steps.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v14 or higher)
-   [npm](https://www.npmjs.com/)
-   [MongoDB](https://www.mongodb.com/try/download/community) installed and running on your local machine, or a connection string from MongoDB Atlas.

### 1. Backend Setup

```bash
# Clone the repository
git clone [https://github.com/VitorPio7/Eventura.git](https://github.com/VitorPio7/Eventura.git)

# Navigate to the server directory
cd Eventura/server

# Install dependencies
npm install
```
Create a `.env` file in the `server` directory and add the following variables.

**.env.example**
```
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
```

Now, you can start the back-end server:
```bash
npm start
```
The server will be running on `http://localhost:4000`.

### 2. Frontend Setup

Open a new terminal window.

```bash
# Navigate to the client directory from the root folder
cd Eventura/client

# Install dependencies
npm install
```

Create a `.env.local` file in the `client` directory and add the following variable to connect the frontend with the backend.

**.env.local**
```
VITE_API_URL=http://localhost:4000
```
Now, you can start the front-end development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173` (or the next available port).

---

## 🔐 API Endpoints

The back-end provides the following RESTful API endpoints:

| Method | Endpoint          | Description                                |
| :----- | :---------------- | :----------------------------------------- |
| `POST` | `/api/auth/register`  | Register a new user.                       |
| `POST` | `/api/auth/login`     | Log in a user and get a JWT token.         |
| `GET`  | `/api/events`     | Get a list of all events.                  |
| `GET`  | `/api/events/:id` | Get details for a single event.            |
| `POST` | `/api/events`     | Create a new event (auth required).        |
| `POST` | `/api/bookings`   | Book an event for a user (auth required).  |
| `GET`  | `/api/bookings`   | Get all bookings for the logged-in user.   |

---

## 📄 License

Distributed under the MIT License. See the `LICENSE` file for more information.

---

## Contact

Vitor Pio - [GitHub Profile](https://github.com/VitorPio7)
