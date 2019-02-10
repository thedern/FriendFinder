/* ==========================================================================
   Main Application File
   ========================================================================== */

   // import express
   const express = require('express');

   const PORT = 3000;

   // create express app
   const app = express();

   // require routes
   const apiRoutes = require('./app/routing/apiRoutes');
   const htmlRoutes = require('./app/routing/htmlRoutes');
  

    /* 
    execute imported function contained in the apiRoutes (via apiRoutes.js)  
    passing in the express 'app' as an argument

    execute imported function contained in the htmlRoutes (via apiRoutes.js)  
    passing in the express 'app' as an argument

    express app passed in so that we can create our routes
    */

    apiRoutes(app);
    htmlRoutes(app);

    // 'start' server
    app.listen(PORT);
    console.log('server started on 3000');
