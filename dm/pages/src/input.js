import { Dropdown } from "./diebuilder"
import { Add, Operator } from "../useDM"

function Choice() {
 const chose = event => {
  event.preventDefault()
 }

 return (
  <form onSubmit={chose}>
   <label htmlFor="number">Number:</label>
   <input id="number" type="number" autoComplete="number" value="1"></input>
   <label htmlFor="dice">Dice:</label>
   <Dropdown />
   <label htmlFor="modifier">Add modifier:</label>
   <Operator />
   <input id="modifier" type="number" autoComplete="modifier" value="0"></input>
  </form>
 )
}

export function Choices() {
 return (
  <>
   <Choice />
   <Add />
  </>
 )
}

export function Another() {
 return (
  <>
   <Operator />
   <Choices />
  </>
 )
}