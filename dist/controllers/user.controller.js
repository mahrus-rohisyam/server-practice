"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const registerUser = (req, res) => {
    let { username, password } = req.body;
    let credentials = {
        username: username,
        password: password
    };
    res.json({
        message: 'User registration',
        testing: 'Yow',
        credentials
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
