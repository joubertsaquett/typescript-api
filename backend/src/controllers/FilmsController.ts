import { Request, Response } from "express";
import SendFilms from "../services/SendFilms";

const films = [
    { name: 'Filme 1', studio: 'Universal Pictures' },
    { name: 'Filme 3', studio: 'Paramount Pictures' }
]

export default {

    async index(req: Request, res: Response){
        return res.json(films);
    },

    async create(req: Request, res: Response){
        
        const send = new SendFilms();

        send.sendFilm({
            filme: { name: 'Guerra Civil'},
            studio: { name: 'Marvel'},
            atores: [
                'Ator1', 'Ator2',
            ]
        });

        res.send();
    }
};