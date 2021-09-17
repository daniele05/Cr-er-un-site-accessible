
//recuperation des donnees Json

let myInit = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  mode: 'cors',
  cache: 'default',
};      



let myRequest = new Request ("./data.json", myInit);

fetch("./data.json")
  .then(function(resp){
      return resp.json();
  })
  .then (function(data){
   console.log(data.photographers);
  });
    
