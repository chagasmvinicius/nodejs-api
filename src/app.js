import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on('error', console.log.bind(console, 'Erro de conexão.')); // Link entre o nosso terminal e o console do DB
db.once('open', () => {
    console.log('Conexão com o banco feita com sucesso.');
}); // Estabelecendo uma tentativa de conexão (Abertura da conexão)

const app = express();

app.use(express.json()); // Comando responsável por fazer o parse e stringify automático do payload 

routes(app);

export default app; // Disponibilizar a importação do código do arquivo app.js em outro arquivo