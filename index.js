// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// cats.push("Ralph");

function destructivelyAppendCat(name) {
   cats.push(name); 
   //console.log("Matt",name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
} 

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
} 

 function appendCat(name) {
//     const copyOfCats = [...cats];
//   copyOfCats.push(name);
//   return copyOfCats;
return [...cats, name];
}

function prependCat(name) {
    return [ name, ...cats];
}

function removeLastCat() {
    return cats.slice(0,cats.length -1);
}

function removeFirstCat() {
    return cats.slice(1, cats.length);
}