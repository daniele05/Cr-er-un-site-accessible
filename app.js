// Autorisation de toutes les sources
//Puis dans le second header, les headers htpp qui sont acceptes 

var app; 
app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Dès qu'une requête de type options est envoyé à une url de l'api
// Le serveur répond qu'il accepte les méthodes GET, PUT, POST, DELETE et OPTIONS
app.options('/api/*', function (request, response, next) {
  response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  response.send();
});


//Déclaration des var header et section dans js 

var header = document.querySelector('header'); 
var section = document.querySelector('section');

// Requete faite au serveur pour la recuperation des donnees json

var requestURL = 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json'; 
var request = new XMLHttpRequest(); 
request.open('GET' , requestURL); 
request.responsiveType = 'json'; 
request.send(); 

request.onload = function(){
    var photographersFreelance = request.response;
    populateHeader(photographersFreelance); 
    showPhotographersList(photographersFreelance);
}

// Declaration de la function et manipulation des elements du DOM 
function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['Les photographes']; 
  header.appendChild(myH1)
}

// Creation de fiches photographes

function showPhotographersList (jsonObj) {
  var photographers = jsonObj['members'];
  for(var i = 0; i < photographers.lenght; i++) {
    link.push('<a href="#">'+ i + '</a>')

  }
}