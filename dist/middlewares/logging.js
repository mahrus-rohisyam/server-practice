"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logging = void 0;
const Logging = (req, res, next) => {
    /** Log the req */
    console.info(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        /** Log the res */
        console.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
    });
    next();
};
exports.Logging = Logging;
