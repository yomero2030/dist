"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const environment_1 = require("./global/environment");
const router_1 = __importDefault(require("./routes/router"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const server = server_1.default.instance;
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//Rutas de Servicio
server.app.use('/', router_1.default);
//Configuración de los cors
server.app.use(cors_1.default({ origin: true, credentials: true }));
server.start(() => {
    console.log(`Servidor Corriendo en el puerto ${environment_1.SERVER_PORT}`);
});
