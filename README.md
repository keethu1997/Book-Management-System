# Book-Management-System
Book management system using MERN Stack
Project Overview
This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for managing books. Users can add, view, update, and delete book records. It also includes authentication, search, sorting, filtering, pagination, and a rating system.
Features
•	CRUD Operations: Add, read, update, and delete books.
•	Search: Search for books by title or author.
•	Sorting & Filtering: Sort books by date and filter by author.
•	Pagination: Handle large datasets efficiently.
•	Authentication: Secure actions like adding, updating, and deleting books.
•	Rating System: Users can rate and review books.
•	Responsive Design: Works across different screen sizes.
Installation and Setup
Prerequisites
•	Node.js installed
•	MongoDB installed (or use MongoDB Atlas)
Backend Setup
1.	Navigate to the backend folder: 
2.	cd backend
3.	Install dependencies: 
4.	npm install
5.	Create a .env file in the backend folder and add: 
6.	MONGO_URI=mongodb_connection_string

7.	Start the backend server: 
8.	npm start
Frontend Setup
1.	Navigate to the frontend folder: 
2.	cd frontend
3.	Install dependencies: 
4.	npm install
5.	Start the frontend server: 
6.	npm start
Usage
•	Open the application in your browser at http://localhost:3000
•	Register and log in to add, edit, and delete books.
•	Use the search bar and filters to find books easily.
Deployment
(Optional) You can deploy the application using platforms like:
•	Frontend: Vercel, Netlify
•	Backend: Render, Heroku
•	Database: MongoDB Atlas
Technologies Used
•	Frontend: React.js, Material UI
•	Backend: Node.js, Express.js
•	Database: MongoDB
•	State Management: Redux
•	Authentication: JSON Web Tokens (JWT)
Contributing
Feel free to fork the repo and submit pull requests for improvements.
License
This project is open-source and available under the MIT License.

