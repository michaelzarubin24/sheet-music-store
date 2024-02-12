const sheetRouter = require('express').Router();

const { } = require('../controllers/sheet.controller');
const { getSheets, getSheetsBach, getSheetsMozart, getSheetsTchaikovsky, getSheetsVivaldi } = require('../controllers/sheet.controller');


sheetRouter.get("/sheets/bach", getSheetsBach);
sheetRouter.get("/sheets/mozart", getSheetsMozart);
sheetRouter.get("/sheets/vivaldi", getSheetsVivaldi);
sheetRouter.get("/sheets/tchaikovsky", getSheetsTchaikovsky);

sheetRouter.get("/sheets", getSheets);


module.exports = {
    sheetRouter
}