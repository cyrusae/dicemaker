import { Dropdown } from "./diebuilder"
import { Add } from "../useDM"

function Choice() {
 const chose = event => {
  event.preventDefault()
 }

 return (
  <form onSubmit={chose}>
   <label htmlFor="firstNumber">Number:</label>
   <input id="firstNumber" type="number" autoComplete="firstNumber" value="1"></input>
   <label htmlFor="firstDice">Dice:</label>
   <Dropdown />
   <Add />
  </form>
 )
}

