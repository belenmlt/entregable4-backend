import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import express from "express";
import { authorsRoutes } from "./routes/authors.routes";
import { booksRoutes } from "./routes/books.routes";

// Instanciar express
const app = express();

// Puerto
app.set("port", process.env.PORT);

// Middlewares
app.use(express.json());

// Rutas
app.use("/authors", authorsRoutes.router);
app.use("/books", booksRoutes.router);

mongoose.connect(`mongodb+srv://belenmlt:${process.env.MATLASPASS}@cluster0.xq5kj.mongodb.net/library?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    // Inicializar server
    app.listen(app.get("port"), () => {
        console.log(`Server working on port ${app.get("port")}`);    
    });
})
.catch(e => console.log('Ha ocurrido un error:', e));