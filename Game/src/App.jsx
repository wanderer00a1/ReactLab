import { useState } from 'react'

// import './App.css'
import { sum } from './utils';
import Lucky from './Lucky'
function lessThan4(dice){
  return sum(dice)<4;
}
function allEven(dice){
  return dice.every(v => v%2 === 0)
}
function App() {
  return(
    <>
      <Lucky title={"Less Than 4"} winCheck={lessThan4}/>
      <Lucky title={"ALL EVEN"} numDice={3} winCheck={allEven}/>
      
    </>
  )
}

export default App
