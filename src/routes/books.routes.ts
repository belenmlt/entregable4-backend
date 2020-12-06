import { Router } from "express";
import { booksController } from "../controllers/books.controller";

class BooksRoutes {
    public router: Router = Router();

    constructor() {
        this.router.get("/", booksController.getBooks);
        this.router.post("/", booksController.postBooks);
        this.router.delete("/:id", booksController.deleteBooks);
        this.router.put("/:id", booksController.updateBooks);
    }
}

export const booksRoutes = new BooksRoutes(); 