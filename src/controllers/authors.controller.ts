import { Request, Response } from "express";
import mongoose from "mongoose";
// import { AuthorsModel } from "../models/authors.model"
const AuthorsModel = require("../models/authors.model");


mongoose.connect(`mongodb+srv://belenmlt:${process.env.MATLASPASS}@cluster0.xq5kj.mongodb.net/authors?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })


class AuthorsController {

    public async getAuthors(req: Request, res: Response){
        try {
            const allAuthors = await AuthorsModel.find();
            res.send(allAuthors);

        } catch (error) {
            console.log(error);
            res.sendStatus(404);            
        }

    };

    public async postAuthors(req: Request, res: Response){
        try {
            const bookAuthor = req.body.fullName;

            const newAuthor = new AuthorsModel();

            newAuthor.fullName = bookAuthor;

            await newAuthor.save();
            res.send(`¡Se ha añadido al autor/a ${bookAuthor} a la Biblioteca!`);

        } catch (error) {
            console.log(error);
            res.sendStatus(404);            
        }

    };

    public async deleteAuthors(req: Request, res: Response){
        try {
            const authorToDelete = req.params.id;
            const response = await AuthorsModel.deleteOne({_id: authorToDelete});

            res.send(`El autor/a con identificador ${authorToDelete} ha sido borrado de la Biblioteca`);

        } catch (error) {
            console.log(error);
            res.sendStatus(404);            
        }

    };

    public async updateAuthors(req: Request, res: Response){
        try {
            const authorToUpdate = req.body;
            const response = await AuthorsModel.update({_id: authorToUpdate._id}, {fullName: authorToUpdate.fullName});
                                                    // {busca por id}, {modifica campo fulName}
            res.send(`El autor/a con identificador ${authorToUpdate._id} ha sido modificado.`);

        } catch (error) {
            console.log(error);
            res.sendStatus(404);
        }

    }
}

export const authorsController = new AuthorsController();