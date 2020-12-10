import { Request, Response } from "express";

const BooksModel = require("../models/books.model");
class BooksController {
    public async getBooks(req: Request, res: Response){
        try {

            const allBooks = await BooksModel.find();
            res.send(allBooks);

        } catch (error) {
            console.log(error);
            res.sendStatus(404);            
        }
    };

    public async postBooks(req: Request, res: Response){
        try {
            const bookTitle = req.body.title;
            const newBook = new BooksModel();
            newBook.title = bookTitle;

            await newBook.save();
            res.send(`¡Se ha añadido ${bookTitle} a la Biblioteca!`);

        } catch (error) {
            console.log(error);
            res.sendStatus(404);            
        }
    };

    public async deleteBooks(req: Request, res: Response){
        try {

            const bookToDelete = req.params.id;
            const response = await BooksModel.deleteOne({_id: bookToDelete});

            res.send(`El libro con identificador ${bookToDelete} ha sido borrado de la Biblioteca`);

        } catch (error) {
            console.log(error);
            res.sendStatus(404);

        }
    };

    public async updateBooks(req: Request, res: Response){
        try {
            const bookToUpdate = req.body;
            const response = await BooksModel.updateOne({_id: bookToUpdate._id}, {title: bookToUpdate.title});
                                                        // {busca el libro con id...}, {modifica el title del libro que tiene id...}

            res.send(`El libro con identificador ${bookToUpdate._id} ha sido editado.`);

        } catch (error) {
            console.log(error);
            res.sendStatus(404);
        }
    };
}

export const booksController = new BooksController();