# 📝 MERN Stack Notes App Backend

Welcome to the **MERN Stack Notes App Backend**! This is the backend server for a full-stack notes application, built with Node.js, Express, MongoDB, and Mongoose. It provides a robust REST API for managing notes, user authentication, and more.

---

## 🚀 Features
- Create, Read, Update, and Delete notes
- MongoDB Atlas cloud database integration
- Modular code structure (Controllers, Routes, Models)
- Environment variable support with dotenv
- CORS enabled for frontend integration
- Error handling and logging

---

## 📁 Project Structure
```
Backend/
│   README.md
│   package.json
│   .env
└───src/
    │   server.js
    │   package.json
    ├───config/
    │     db.js
    ├───controllers/
    │     notesController.js
    ├───models/
    │     notesModel.js
    └───routes/
          notesRoutes.js
```

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone <repo-url>
cd "MERN STACK/Backend/src"
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the `src` directory:
```
Mongo_Url=your_mongodb_connection_string
PORT=5001
```

### 4. Start the development server
```bash
npm run dev
```

The server will run on `http://localhost:5001` by default.

---

## 📚 API Endpoints
| Method | Endpoint           | Description           |
|--------|--------------------|-----------------------|
| GET    | /api/notes         | Get all notes         |
| POST   | /api/notes         | Create a new note     |
| GET    | /api/notes/:id     | Get a note by ID      |
| PUT    | /api/notes/:id     | Update a note by ID   |
| DELETE | /api/notes/:id     | Delete a note by ID   |

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB & Mongoose
- dotenv
- CORS
- Nodemon (dev)

---

## 💡 Author
- Subash Shanmugam

---

## 🌟 Show your support
If you like this project, please ⭐ the repo and share it with others!

---

## 📬 Contact
For any questions or feedback, feel free to reach out:
- Email: subashs2573@gmail.com
- LinkedIn: [Subash Shanmugam](https://www.linkedin.com/in/subash-shanmugam)
