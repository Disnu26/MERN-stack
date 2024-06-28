import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/bookRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send('Welcome to');
});

app.use('/books',booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('APP connected to Database');
        app.listen(PORT, () => {
            console.log(`App is listening on PORT: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

