"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
require('dotenv').config();
exports.Config = {
    port: process.env.PORT || 1338,
    mongourl: process.env.DB_CONNECTION,
    origin: process.env.ORIGIN || 3001
};
