const getMoreThan20 = string => {
  return new Promise( (resolve, reject) => {
    return string.length >= 20 ? reject(false) : resolve(true);
  })
}

const getCompare = (int1,int2) => {
  return new Promise( (resolve, reject) => {
    return int1 > int2 ? resolve(int1 - int2) : reject();
  })
}

const getIsAdult = (string) => {
  return new Promise( (resolve, reject) => {
    var today = new Date();
    var dateParts = string.split("/");
    var birthDate = new Date(+dateParts[2], dateParts[1]-1, +dateParts[0]+1);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age >= 18 ? resolve(true) : reject();
  })
}
async function main(){
try {
await getMoreThan20("bonjour")
    .then( data => console.log("getMoreThan20() " + data) )
    .catch( err => console.log("getMoreThan20() "+ err))

await getMoreThan20("bonne année et bonne santé")
    .then( data => console.log("getMoreThan20() " +data) )
    .catch( err => console.log("getMoreThan20() " +err))

await getCompare(5,1)
    .then( data => console.log("getCompare() " +data) )
    .catch( err => console.log("getCompare() " +err))

await getCompare(5,10)
    .then( data => console.log("getCompare() " +data) )
    .catch( err => console.log("getCompare() " +err))

await getIsAdult("14/03/1998")
    .then( data => console.log("getIsAdult() " +data) )
    .catch( err => console.log("getIsAdult() " +err))

await getIsAdult("14/03/2007")
    .then( data => console.log("getIsAdult() " +data) )
    .catch( err => console.log("getIsAdult() " +err))
}catch(e){
  console.log(e);
}
}

main();
