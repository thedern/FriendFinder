/* ==========================================================================
   Controller for the html routes
   ========================================================================== */

// import path
const path = require('path');
const express = require('express');


// takes express app as argument from calling function.  No need to require express in this file
module.exports = function(app) {


    // set views engine
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');

    // static path, provides routing access to both main.css and main.js
    app.use(express.static(path.join(__dirname, '../public')));

    // get routes for home and survey pages
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.get('/survey', (req, res) => {
        //res.render('survey');
        res.send('survey.html');
    });

    

}