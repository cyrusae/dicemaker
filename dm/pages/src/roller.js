import { types, reducer } from 'constants'
//ds is the number of dice to roll; i is the value in the dropdown


export function Roller(i, ds) {
 let die = {
  sides: types[i],
  roll: function () {
   var randomNumber = Math.floor(Math.random() * this.sides) + 1;
   return randomNumber;
  }
 }
 let rolls = [];
 let roll = [];
 for (n = 0; n < 1000; n++) { 
  //would like to know if this can be automated more efficiently...
  for (a = 0; a < ds; a++) {
   let thisDie = die;
   roll.push(thisDie);
  }
  let forn = roll.reduce(reducer);
  rolls.push(forn);
 }
 return rolls;
}