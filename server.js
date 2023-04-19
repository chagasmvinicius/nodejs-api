import app from './src/app.js';

const port = process.env.PORT || 3000; // Porta do ambiente variável (cloud) OU a porta fixa local 3000

app.listen(port, () => { // Listener
    console.log(`Servidor escutando em http://localhost:${port}.`);
});