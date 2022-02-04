import { types } from 'constants'

export async function Builder(dice) {
 let die = [];
 for (i = 1; die.length < dice; i++) {
  die.push(i);
 }
 return die;
}

export function Dropdown() {
 let list=[];
 for (i = 0; list.length < types.length; i++) {
  let thatDie = types[i];
  let opt = '<option value="' + i + '">d' + thatDie + '</option>';
  list.push(opt);
 }
 let options = list.join('');
 return options;
}