//imports
import express from 'express'
import cors from 'cors'
import { routerFuncionario } from './routes/router';

const PORT = process.env.PORT || 3777;

//app
const app = express();
app.use(cors());
app.use(express.json());
app.use(routerFuncionario)


//teste
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});