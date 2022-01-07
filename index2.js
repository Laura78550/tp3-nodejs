const apiUrl = "https://swapi.py4e.com/api/";
const axios = require("axios");

const fecthData = url => {
    return new Promise( (resolve, reject) => {
      axios.get(apiUrl + url)
      .then( response => {
        //console.log(response);
          return response.status == 200
          ? response
          : reject('Fetch error first then', response);
      })
      .then( data => {
          return resolve(JSON.stringify(data.data));
      })
      .catch( fetchError => {
          return reject(fetchError);
      });
    });
};


async function main(){
try {
await fecthData("starships/10/")
    .then( data => console.log("starships " + data + "\n"))
    .catch( err => console.log("starships "+ err+ "\n"))

await fecthData("planets/")
    .then( data => console.log("planets " +data+ "\n"))
    .catch( err => console.log("planets " +err+ "\n"))

await fecthData("people/?search=Darth Vader")
    .then( data => console.log("people " +data+ "\n"))
    .catch( err => console.log("people " +err+ "\n"))

await fecthData("people/?format=wookiee")
    .then( data => console.log("people_wookiee " +data+ "\n"))
    .catch( err => console.log("people_wookiee " +err+ "\n"))

await fecthData("people/?search=R2-D2")
    .then( data => console.log("people_R2-D2 " +data+ "\n"))
    .catch( err => console.log("people_R2-D2 " +err+ "\n"))
}catch(e){
  console.log(e);
}
}

main();
