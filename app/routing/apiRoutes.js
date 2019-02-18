/* ==========================================================================
   Controller for the API Routes
   ========================================================================== */
// require friends
const friendList = require('../data/friends');

// globals
var finalScores = [];
var matchingFriends = [];

// pass in express and parser to evaluate request body
module.exports = function(app, parser) {


    /* ==========================================================================
       Functions for Math and Determining Indexes
       ========================================================================== */
    
    // Function to do math on your and your friends compatibility scores
    function compareFriends(you, friend) {
        var total = 0;
        for (var i = 0; i <= 9; i++) {
            // get absolute value of the difference in raw scores and aggregate a total for each friend
            total += Math.abs(you[i] - friend[i]);
        }
        // push final total onto the finalValues array
        finalScores.push(total);
        
        // return to calling function
        return;
    }

    /* 
       Function to determine smallest integer value in array
       get index of smallest value in array by entending array prototype. 
    */
    function indexOfSmallest(array) {
        return array.indexOf(Math.min.apply(Math, array));
    }
    

    /* ==========================================================================
       GET
       ========================================================================== */
    
    // get route to display all friends 
    app.get('/api/friends', (req, res) => {

        // render the json from the imported friends.js on screen
        // send object key = friends: value: friendList object
        // frindList contains the 'buddies' object which will be used in view
        res.render('friendList',{friends: friendList});

    });


    /* ==========================================================================
       POST
       ========================================================================== */
    
    app.post('/api/friends', (req, res) => {
        // conver strings to integers
        req.body.scores = req.body.scores.map(x => parseInt(x));
         
        // process the firends in the friendsList from 'require /data/friends'
        for (key in friendList) {
            // get each friend object from list of friends
            var friends = (friendList[key]);

            //loop through and friends array and get score sub-array
            for (var i = 0; i < friends.length; i++) {
            
                // get the scores for each friend and map to integer
                var mapped123 = friends[i].scores.map(x => parseInt(x));

                // do math to determine compatibility score, push score to array
                compareFriends(req.body.scores, mapped123);

            }  

            // get the index of the smallest integer value from scores array, returns the first matching index
            var smallestIndex = indexOfSmallest(finalScores);
            console.log(smallestIndex);
    
            // get value of the smallest index
            var smallestVal = finalScores[smallestIndex];
            matchingFriends.push(smallestVal);

            // splice the index of the smallest integer, removing it from the array
            finalScores.splice(smallestIndex,1);

            // with the first instance of the smallest integer removed, check if any other friends match the value of the smallest index
            for (var f = 0; f < finalScores.length; f++) {
                if (finalScores[f] === smallestVal) {
                    // save off index
                    var smallestNext = finalScores.indexOf(finalScores[f])
                    matchingFriends.push(smallestNext)
                }

            }
              
        }

        // will assume a single matching friend for now
        console.log(friends[smallestIndex]);
        res.send(friends[smallestIndex]);

    
    });
}
