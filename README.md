# BookShelf

## Overview

Welcome to BookShelf, a project that aims to provide a seamless book management experience by leveraging a full-stack application. This README will guide you through the technologies used and the key features implemented in both the backend and frontend.

## Technologies

### Backend

- **Express**
  - Routing
  - Controller
  - 404-Seite (Page Not Found)
- **MongoDB**
  - *Mongoose*
    - Schema/Modelle
    - Verwendung einer .env-Datei für sensible Informationen wie Passwörter, etc.
  - CRUD-Operationen (mindestens: create & read, gerne auch: update & delete)
  - Validierung
    - Verwendung von express-validator
- Login-System
  - Implementierung mittels JWT (JSON Web Token)

### Frontend

- **React**
  - Verwendung von States, useEffect, Props, Hooks, usw.
  - Erstellung von Formularen für Sign Up und Login
  - Dynamische Anpassung der Benutzeroberfläche basierend auf dem Anmeldestatus
  - Optional: Verwendung einer Bibliothek für das Styling (z.B. Material-UI)
  - Optional: Validierung von Benutzereingaben auf der Client-Seite

## Getting Started

To get started with BookShelf, follow these steps:

1. Clone the repository.
2. Set up the backend by navigating to the `backend` directory and installing dependencies using `npm install`.
3. Create a `.env` file in the `backend` directory and add sensitive information such as passwords.
4. Run the backend server using `npm start`.
5. Move to the `frontend` directory and install frontend dependencies using `npm install`.
6. Launch the frontend with `npm start`.

Feel free to explore and enhance BookShelf based on your requirements. Happy coding!

## Dependencies for Backend
This project relies on the following dependencies:

`axios: ^1.6.7`
`bcrypt: ^5.1.1`
`cookie-parser: ^1.4.6`
`dotenv: ^16.4.1`
`express: ^4.18.2`
`jsonwebtoken: ^9.0.2`
`mongoose: ^8.1.1`

Make sure to have these dependencies installed in your project to ensure proper functionality.

`npm install axios@^1.6.7 bcrypt@^5.1.1 cookie-parser@^1.4.6 dotenv@^16.4.1 express@^4.18.2 jsonwebtoken@^9.0.2 mongoose@^8.1.1`

# BookShelf
