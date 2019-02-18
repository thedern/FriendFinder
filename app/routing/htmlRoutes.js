/* ==========================================================================
   Controller for the html routes
   ========================================================================== */

// import path
const path = require('path');


// takes express app as argument from calling function.  No need to require express in this file
module.exports = function(app) {

    // get routes for home and survey pages
    app.get('/', (req, res) => {
        console.log('getting home');
        res.sendFile(path.join(__dirname, '../public', '/home.html'));
    });

    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, '../public', 'survey.html'));
    });

    

}