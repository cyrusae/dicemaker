import { Button, ToggleButtonGroup } from 'react'

function Roll() {
 return (
  <>
   <Button variant='dark'>Run DiceMaker</Button>{' '}
  </>
 )
}

export function Add() {
 return (
  <>
   <Button variant='outline-secondary'>Add another die?</Button>{' '}
  </>
 )
}

export function Operator() {
 return (
  <>
   <ToggleButtonGroup type="radio" name="plusminus" defaultValue={1}>
    <ToggleButton id="addition" value={1}>+</ToggleButton>
    <ToggleButton id="subtraction" value={2}>-</ToggleButton>
   </ToggleButtonGroup>
  </>
 )
}