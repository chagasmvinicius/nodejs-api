import autores from "../models/Autor.js";

class AutorController {
    static listarAutores = async (req, res) => { // GET All
        try {
            const autoresResultado = await autores.find();
            res.status(200).json(autoresResultado);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static buscarAutorPeloId = async (req, res) => { // GET :id
        try {
            const autoresResultado = await autores.findById(req.params.id).exec();
            res.status(200).json(autoresResultado);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static criarNovoAutor = async (req, res) => { // POST
        try {
            const result = await autores.create(req.body);
            res.status(201).json({
                message: 'Um novo autor foi criado no banco.',
                result
            });
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static deletarAutorPeloId = async (req, res) => { // DELETE
        try {
            const result = await autores.deleteOne({ _id: req.params.id });
            res.status(202).json({
                message: `O autor com o id "${req.params.id}" foi deletado.`,
                result
            });
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static alterarAutorPeloId = async (req, res) => { // PUT
        try {
            await autores.findByIdAndUpdate({ _id: req.params.id }, req.body);
            res.status(202).json({
                message: `O autor com o id "${req.params.id}" foi alterado.`,
                request_body: req.body
            });
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

export default AutorController;