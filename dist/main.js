"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./router/index"));
const createData_1 = require("./common/createData");
dotenv_1.default.config();
const port = process.env.PORT || 8000;
console.log(port);
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', index_1.default);
app.listen(port, () => {
    console.log(`start http://localhost:${port}`);
});
(0, createData_1.createDeviceData)();
