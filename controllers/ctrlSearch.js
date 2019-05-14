'use strict'
const fs = require('fs');
const modelSearch = require('../models/modelSearch.js');
const path = require('path');
let route =path.join ('views', 'views1.html');

const htmlRender = (html, data) => {
    let parsedHtml = html.toString('utf8');
    console.log (data);
    for(let key in data){
        let exp = "{{"+key+"}}";
        let reg = new RegExp(exp, 'g');
        parsedHtml = parsedHtml.replace(reg, data[key]);
    }
    return parsedHtml;
};

const search = (req) => {
   var result = modelSearch();
   var termino = "Carla";
   result = result.filter((alumno) => {
        if (alumno.nombre === termino){
            return alumno;
        }
    });
    const view = fs.readFileSync('./views/views1.html').toString('utf8');
    console.log (view);
    const parsedHtml = htmlRender(view, result[0]); 
    return (parsedHtml); 
};
   
module.exports = search;
