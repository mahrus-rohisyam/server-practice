"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorRoute = void 0;
const ErrorRoute = (req, res) => {
    const error = new Error('Not found');
    console.error(error);
    res.status(404).json({
        method: req.method,
        status: 404,
        message: `${error.message} It seems like you are got error somewhere`
    });
};
exports.ErrorRoute = ErrorRoute;
