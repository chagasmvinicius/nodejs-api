import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get('/livros', LivroController.listarLivros)
    .get('/livros/query', LivroController.listarLivrosPorEditora)
    .get('/livros/:id', LivroController.buscarLivroPeloId)
    .post('/livros', LivroController.criarNovoLivro)
    .delete('/livros/:id', LivroController.deletarLivroPeloId)
    .put('/livros/:id', LivroController.alterarLivroPeloId);

export default router;