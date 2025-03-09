const person = {
    name:"mahadi",
    age:20,
    friends:["mahadi","hasan"],
    status:true
}
const newPerson = JSON.stringify(person)
// console.log( newPerson)
//shob dubble cotation e niye nibe shudu number r boolean type [true/false] chara...ata dara buja jay jkono object k amra json.stringify  e niye ashte pari [object theke string e niye ashte pari]
//console.log(person).....object
//consoe.log(newPerson)...string


//json.stringify theke abar object e rupantor korte hole....
const newPerson2 = JSON.parse(newPerson)  //json.parse use korle stringify theke object e rupantor hbe
// console.log(newPerson2)