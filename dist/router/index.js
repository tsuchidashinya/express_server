"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const device_1 = __importDefault(require("./device"));
const appRoute = express_1.default.Router();
appRoute.use('/device', device_1.default);
exports.default = appRoute;
