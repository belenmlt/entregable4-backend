import { Router } from "express";
import { authorsController } from "../controllers/authors.controller";

class AuthorsRoutes {
    public router: Router = Router();

    constructor() {
        this.router.get("/", authorsController.getAuthors);
        this.router.post("/", authorsController.postAuthors);
        this.router.delete("/:id", authorsController.deleteAuthors);
        this.router.put("/:id", authorsController.updateAuthors);
    }
}

export const authorsRoutes = new AuthorsRoutes();