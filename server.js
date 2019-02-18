/* ==========================================================================
   Main Application File
   ========================================================================== */

    // import express
    const express = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');

    // set listening port
    const PORT = 3000;

    // create express app
    const app = express();

    // require routes
    const apiRoutes = require('./app/routing/apiRoutes');
    const htmlRoutes = require('./app/routing/htmlRoutes');

    // set views engine
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');

    // htmlRoutes takes express app as argument
    htmlRoutes(app);

    // post request body parser. allows access to req.body (extended: false, dont follow tree path)
    var parser = app.use(bodyParser.urlencoded({extended: true}));

    // api routes takes express and body parser as arguments (i know paser is included in expess version but wanted to use body parser for cleaner code)
    apiRoutes(app, parser);

    // page not found
    app.use( (req, resp) => {
        resp.status(404);
        resp.render('404');
    });


    // 'start' server
    app.listen(PORT);
    console.log('server started on 3000');
