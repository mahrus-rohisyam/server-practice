"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.loginUser = exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const models_1 = require("../models");
const mongoose_1 = __importDefault(require("mongoose"));
const registerUser = (req, res) => {
    const { username, password, email } = req.body;
    bcrypt_1.default.hash(password, 10, (hashError, hash) => {
        if (hashError) {
            return res.status(401).json({
                message: hashError.message,
                error: hashError
            });
        }
        res.json({
            hash
        });
        const _user = new models_1.UserModel({
            _id: mongoose_1.default.Types.ObjectId,
            email,
            username,
            password: hash
        });
        console.log(_user);
        return _user
            .save()
            .then((user) => {
            return res.status(201).json({
                user
            });
        })
            .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
    });
};
exports.registerUser = registerUser;
const loginUser = (req, res) => {
    let { username, password } = req.body;
    let dbUsername = 'russdev';
    let dbPassword = 'russtheguy';
    let validate = username == dbUsername && password == dbPassword ? 'Login success' : 'Login Failed';
    res.json({
        message: 'Login user',
        validate,
        username,
        password
    });
};
exports.loginUser = loginUser;
const getUser = (req, res) => {
    models_1.UserModel.find({});
    console.log('Getting user');
};
exports.getUser = getUser;
