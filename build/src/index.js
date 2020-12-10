"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const authors_routes_1 = require("./routes/authors.routes");
const books_routes_1 = require("./routes/books.routes");
// Instanciar express
const app = express_1.default();
// Puerto
app.set("port", process.env.PORT);
// Middlewares
app.use(express_1.default.json());
// Rutas
app.use("/authors", authors_routes_1.authorsRoutes.router);
app.use("/books", books_routes_1.booksRoutes.router);
mongoose_1.default.connect(`mongodb+srv://belenmlt:${process.env.MATLASPASS}@cluster0.xq5kj.mongodb.net/library?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    // Inicializar server
    app.listen(app.get("port"), () => {
        console.log(`Server working on port ${app.get("port")}`);
    });
})
    .catch(e => console.log('Ha ocurrido un error:', e));
