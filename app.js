// // Demande en amont au serveur
// OPTIONS /data HTTP/1.1
// Origin: https://example.com
// Access-Control-Request-Method: DELETE 

//recuperation des donnees Json

fetch("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json/request")
.then(function(res){
    if(res.ok) {
        return res.json();  
    }
})
.then(function(value) {
    console.log(value);
})
.catch(function(error) {
 // erreur survenue
});


// var xhttp = new XMLHttpRequest();
// xhttp.open("GET", 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json')
// xhttp.onreadystatechange = function(){
//     if(xhttp.readyState === 4) {
//         console.log(xhttp.responseText);
//     } 
// };


// xhttp.send();





// // // Correction du cors 
// // router.get('/' , function (req, res, next) {
// //     axios.get('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json')
// //    then(Response => {
// //        res.send(Response.data.result);
// //    }) . catch(error => {
// //        res.send(error.message);
// //    })
// //    }); 

    
