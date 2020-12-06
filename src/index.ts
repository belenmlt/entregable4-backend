import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { authorsRoutes } from "./routes/authors.routes";
import { booksRoutes } from "./routes/books.routes";

// Instanciar express
const app = express();

// Puerto
app.set("port", process.env.PORT);

// Inicializar server
app.listen(app.get("port"), () => {
    console.log(`Server working on port ${app.get("port")}`);
    
});

// Middlewares
app.use(express.json());

// Rutas
app.use("/authors", authorsRoutes.router);
app.use("/books", booksRoutes.router);