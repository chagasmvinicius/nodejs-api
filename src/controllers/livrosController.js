import livros from "../models/Livro.js";

class LivroController {
    static listarLivros = async (req, res) => { // GET All
        try {
            const livrosResultado = await livros.find().populate('autor');
            res.status(200).json(livrosResultado);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static buscarLivroPeloId = async (req, res) => { // GET :id
        try {
            const livrosResultado = await livros.findById(req.params.id).populate('autor').exec();
            res.status(200).json(livrosResultado);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static criarNovoLivro = async (req, res) => { // POST
        try {
            const result = await livros.create(req.body);
            res.status(201).json({
                message: 'Um novo livro foi criado no banco.',
                result
            });
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static deletarLivroPeloId = async (req, res) => { // DELETE
        try {
            const result = await livros.deleteOne({ _id: req.params.id });
            res.status(202).json({
                message: `O livro com o id "${req.params.id}" foi deletado.`,
                result
            });
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static alterarLivroPeloId = async (req, res) => { // PUT
        try {
            await livros.findByIdAndUpdate({ _id: req.params.id }, req.body);
            res.status(202).json({
                message: `O livro com o id "${req.params.id}" foi alterado.`,
                request_body: req.body
            });
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static listarLivrosPorEditora = async (req, res) => {
        try {
            const result = await livros.find({ editora: req.query.editora }).exec();
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

export default LivroController;