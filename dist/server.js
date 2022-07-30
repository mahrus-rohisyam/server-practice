"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const middlewares_1 = require("./middlewares");
const app = (0, express_1.default)();
mongoose_1.default
    .connect(String(config_1.Config.mongourl))
    .then(() => {
    console.info('Mongo connected successfully.');
    startServer();
})
    .catch((e) => {
    console.error(e);
});
const startServer = () => {
    /** Log the request */
    app.use(middlewares_1.Logging);
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, cors_1.default)({ credentials: true, origin: String(config_1.Config.origin) }));
    app.use(express_1.default.json());
    // app.use(RulesApi);
    /** Routes */
    app.use('/user', routes_1.userRouter);
    /** Healthcheck */
    app.get('/api/ping', (req, res, next) => res.status(200).json({ hello: 'world' }));
    app.use(middlewares_1.ErrorRoute);
    app.listen(config_1.Config.port, () => console.info(`Server is running on port ${config_1.Config.port}`));
};
// startServer()
