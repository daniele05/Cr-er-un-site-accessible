
//recuperation des donnees Json

var myInit = { method: 'GET',
           headers: {
               'Content-Type': 'application/json'
           },
          mode:'cors',
          cache: 'default' };        



let myRequest = new Request ("./app.json", myInit);

fetch(myRequest)
  .then(function(resp){
      return resp.json();
  })
  .then (function(app){
   console.log(app.photographers);
  });
    
