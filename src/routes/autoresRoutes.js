import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
    .get('/autores', AutorController.listarAutores)
    .get('/autores/:id', AutorController.buscarAutorPeloId)
    .post('/autores', AutorController.criarNovoAutor)
    .delete('/autores/:id', AutorController.deletarAutorPeloId)
    .put('/autores/:id', AutorController.alterarAutorPeloId);

export default router;