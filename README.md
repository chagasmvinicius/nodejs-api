PRIMEIRA CERTIFICAÇÃO: https://cursos.alura.com.br/certificate/995eafd0-631c-44c9-8246-2afdd2a6fe42

ANOTAÇÕES:
MongoDB Atlas: https://cloud.mongodb.com/v2#/org/6436fb4e07986f2f42c12e8b/projects
1 - npm init
2 - npm install nodemon // Live Reload ("npm run dev" para executar o script "dev" no package.json)
3 - Criação da propriedade "dev" dentro de "scripts" no package.json para executar automaticamente o nodemon (npm run dev)
4 - npm install express (https://expressjs.com/pt-br/starter/installing.html)
5 - Inclusão do "type": "module" no package-json para mostrar ao nodemon que estamos trabalhando com import e export de módulos (app.js <> server.js)
6 - npm install mongoose (https://mongoosejs.com/)
7 - npm install mongodb
8 - Add connection string (nodejs-express-mongodb:senha)

Liberar acesso a qualquer IP:
Para liberar o acesso a qualquer IP via Mongo Atlas. Após fazer o login no Mongo Atlas, acesse o seu cluster na dashboard do Atlas e siga os passos:

Network Access > IP Access List > Add an IP Address > allow access from everywhere> Confirm;

9 - Padrão Model-View-Controller (MVC): https://cursos.alura.com.br/extra/alura-mais/padrao-model-view-controller-c94
10 - "autor: { type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true }" criar relacionamento entre Schemas somado em ".find().populate('autor')" em livrosController.js no método GET.
