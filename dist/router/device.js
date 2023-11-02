"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const device_1 = require("../controller/device");
const router = express_1.default.Router();
router.get('/', device_1.getAllDevice);
router.get('/search', device_1.getDeviceSearch);
router.post('/', device_1.createDevice);
router.post('/auto-data', device_1.autoCreateDevice);
exports.default = router;
