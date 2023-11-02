"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDevice = exports.getDeviceSearch = exports.getAllDevice = void 0;
const uuid = __importStar(require("uuid"));
const db_1 = require("./db");
const getAllDevice = async (req, res) => {
    const col = await (0, db_1.getCollection)();
    const result = await (col === null || col === void 0 ? void 0 : col.find().toArray());
    res.json(result);
};
exports.getAllDevice = getAllDevice;
const getDeviceSearch = async (req, res) => {
    const col = await (0, db_1.getCollection)();
    let searchObj = {};
    const reqBody = req.body;
    Object.keys(reqBody).forEach((key) => {
        if (key === 'name') {
            searchObj = { ...searchObj, name: new RegExp(reqBody['name']) };
        }
        if (key === 'model') {
            searchObj = { ...searchObj, model: new RegExp(reqBody['model']) };
        }
    });
    const result = await (col === null || col === void 0 ? void 0 : col.find(searchObj).toArray());
    await (0, db_1.closeDB)();
    res.json(result);
};
exports.getDeviceSearch = getDeviceSearch;
const createDevice = async (req, res) => {
    const reqBody = req.body;
    const col = await (0, db_1.getCollection)();
    const result = await (col === null || col === void 0 ? void 0 : col.insertOne({
        _id: uuid.v4(),
        name: reqBody.name,
        model: reqBody.model,
    }));
    await (0, db_1.closeDB)();
    res.json(result);
};
exports.createDevice = createDevice;
