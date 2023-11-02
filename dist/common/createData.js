"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDeviceData = exports.randomIndex = void 0;
const DEVICEMODELLIST = {
    CC2L: ['唯一置き型のカメラ', 'もうすぐ終売になるカメラ', 'セーフィーの大ヒット商材のカメラ'],
    safieOne: ['エッジAIのカメラ', 'デザインなど全てリクエストしたカメラ'],
    'safieGo PTZ': [
        'サカキのルータがついているカメラ',
        'M5525がついているカメラ',
        '屋外型PTZのカメラ',
        '広角ズームができるカメラ',
        '赤外線がないので真っ暗が苦手なカメラ',
        '100ボルトの電源供給のカメラ',
        '30日録画プランが基本のカメラ',
    ],
    'safieGO PTZ Plus': [
        '性能は元のやつと一緒のカメラ',
        'メーカーがセーフィーになったカメラ',
        'ルーターもカメラもアイプロになったカメラ',
        '組み立て不要で無理がないカメラ',
        'コードの曲がりがなくなったカメラ',
    ],
    'safie pocket 2': [
        '建設現場見回り用カメラ',
        '故障したカメラ',
        '紛失は補償できないカメラ',
        'SIMカードが内蔵のカメラ',
        '8時間最大もつカメラ',
        'コビアのカメラ',
    ],
    WV: [
        'アイプロ製のカメラ',
        'ガン型のカメラ',
        'セキュリティの代表的なデザインのカメラ',
        '屋外型はガン型をおすすめ',
        'PoE給電のカメラ',
        '赤外線ありのカメラ',
    ],
    vivotech9389: [
        '音声をとるカメラ',
        'ドーム型のカメラ',
        '温水プールなど過酷な屋内環境で使われるカメラ',
        '抑止力はないカメラ',
        'キッチンなど蒸気があるとこでも使われるカメラ',
    ],
    FD916: [
        '高級寿司店用カメラ',
        '民度高めのカメラ',
        'ラグジュアリー店用カメラ',
        'カメラであることをしられたくないカメラ',
        'レンズカバーもついているカメラ',
        '薄暗い空間でも写せるカメラ',
        'Vivotech製のカメラ',
        'ソフトな抑止力のカメラ',
    ],
};
const randomIndex = (min, max) => {
    return Math.floor(Math.random() * max + 1);
};
exports.randomIndex = randomIndex;
const createDeviceData = () => {
    const modelKeys = Object.keys(DEVICEMODELLIST);
    const modelIndex = (0, exports.randomIndex)(0, modelKeys.length - 1);
    const model = modelKeys[modelIndex];
    const keyData = Object.entries(DEVICEMODELLIST).find(([key, value]) => {
        return key === model;
    });
    const nameArray = keyData[1];
    const name = nameArray[(0, exports.randomIndex)(0, nameArray.length - 1)];
    return { model: model, name: name };
};
exports.createDeviceData = createDeviceData;
