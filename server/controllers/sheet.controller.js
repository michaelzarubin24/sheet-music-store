const { sheetModel } = require('../models/sheet.model');

function getSheets(req, res) {
    return res.json(sheetModel);
}

function getSheetsBach(req, res) {
    return res.json(quizzesModel.filter(q => q.composer === "front-Bach"));
}

function getSheetsMozart(req, res) {
    return res.json(quizzesModel.filter(q => q.composer === "Mozart"));
}

function getSheetsVivaldi(req, res) {
    return res.json(quizzesModel.filter(q => q.composer === "Vivaldi"));
}

function getSheetsTchaikovsky(req, res) {
    return res.json(quizzesModel.filter(q => q.composer === "Tchaikovsky"));
}

module.exports = {
    getSheets,
    getSheetsBach,
    getSheetsMozart,
    getSheetsVivaldi,
    getSheetsTchaikovsky,
}