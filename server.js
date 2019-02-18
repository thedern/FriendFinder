/* ==========================================================================
   Main Application File
   ========================================================================== */

   // import express
   const express = require('express');
   const bodyParser = require('body-parser');
   const path = require('path');

   const PORT = 3000;

   // create express app
   const app = express();

   // require routes
   const apiRoutes = require('./app/routing/apiRoutes');
   const htmlRoutes = require('./app/routing/htmlRoutes');
   
   // static path, provides routing access to both main.css and main.js
   app.use(express.static(path.resolve(__dirname, 'public')));


    /* 
    execute imported function contained in the apiRoutes (via apiRoutes.js)  
    passing in the express 'app' as an argument

    execute imported function contained in the htmlRoutes (via apiRoutes.js)  
    passing in the express 'app' as an argument

    express app passed to function as an argument so that we can create our routes
    */
    htmlRoutes(app);

    // post request body parser. allows access to req.body (extended: false, dont follow tree path)
    var parser = app.use(bodyParser.urlencoded({extended: true}));

    // api routes takes express and body parser as arguments (i know paser is included in expess version but wanted to use body parser)
    apiRoutes(app, parser);

    // 'start' server
    app.listen(PORT);
    console.log('server started on 3000');
