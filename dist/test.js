"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const data = {
    username: 'russdev',
    password: {
        hash: '$2b$10$Mb4zKs0w0lQlswPpfUxoNuvKJhRKBpGdEOglZkE7gAJHGqcuNySAC',
        salt: '$2b$10$Mb4zKs0w0lQlswPpfUxoNu'
    }
};
let plainPassword = 'russthedev';
const { username, password } = data;
const salt = bcrypt_1.default.genSaltSync();
const hash = bcrypt_1.default.hashSync(plainPassword, password.salt);
const verify = bcrypt_1.default.compareSync(plainPassword, password.hash);
console.log(hash);
console.log(salt);
console.log(verify);
/**
 * Output verify === true
 */ 
