

//Get the movie Names from this Array of Objects
//method and only get the movie name which has rating higher than or equal to 8
// use Filter and map  chaining to achaive the objective


var newReleases = [
    {
           "id": 1,
           "title": "Die Hard",
            "rating":9
           
    },
    {
           "id": 2,
           "title": "Bad Boys",
            "rating":7
           
    },
    {
           "id": 3,
           "title": "The Chamber",
           "rating": 10
           
    },
    
];




let moviesGreterThan8 = newReleases.filter(function(newRelease){
    return newRelease.rating >= 8
}).map(function(newRelease){
    return newRelease.title
}).length

console.log(moviesGreterThan8)

//  node .\mapFilterQuest.js 