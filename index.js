import express from "express";
import cors from 'cors';
import routes from './routes.js';

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.use(routes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
