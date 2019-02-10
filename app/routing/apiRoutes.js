/* ==========================================================================
   Controller for the API Routes
   ========================================================================== */
// require friends
const friendList = require('../data/friends');

// takes expres app as argument
module.exports = function(app) {

    // middleware to parse body of request
    // app.use(express.urlencoded({ extended: true }));
    // app.use(express.json());
    
    // get route to display all friends 
    app.get('/api/friends', (req, res) => {

        // render the json from the imported friends.js on screen
        res.json(friendList);
    });

    // app.post

    

}
