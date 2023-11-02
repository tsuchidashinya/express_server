"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeDB = exports.getCollection = exports.client = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongodb_1 = require("mongodb");
dotenv_1.default.config();
exports.client = new mongodb_1.MongoClient(process.env.MONGO_URI, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
const getCollection = async () => {
    try {
        await exports.client.connect();
        const db = await exports.client.db(process.env.DB_NAME);
        return db.collection(process.env.COLLECTION_NAME);
    }
    catch (e) {
        console.log(e);
        await exports.client.close();
    }
};
exports.getCollection = getCollection;
const closeDB = async () => {
    await exports.client.close();
};
exports.closeDB = closeDB;
