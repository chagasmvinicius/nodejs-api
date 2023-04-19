import mongoose from "mongoose";

mongoose.connect('mongodb+srv://nodejs-express-mongodb:senha@nodejs-express-mongodb.hm7lzhv.mongodb.net/nodejs-express-mongodb-db1'); // String trazida do do Connect do database do Atlas
let db = mongoose.connection; // Enviar e estabelecer a conexão

export default db;