const band  = {
 name: "The Beatles",
  genre: "Rock",
  formed: 1960,
}
/*
console.log(Object.values(band));
console.log(Object.keys(band));
*/
for(let job in band){
  console.log(band[job]);
}