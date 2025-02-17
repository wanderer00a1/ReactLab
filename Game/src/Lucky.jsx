import Dice from "./Dice";
import { useState } from "react";
import {getRolls} from "./utils";
import Button from "./Button";
function Lucky({numDice = 2, winCheck,title}){
    const [dice,setDice] = useState(getRolls(numDice));
    const isWinner = winCheck(dice);
    const reRoll = () => setDice(getRolls(numDice));
    return(
        <main className="Lucky">
            <h1>Game: {title}</h1>
            {isWinner && <h2>YOU WIN</h2>}
            <Dice dice={dice}/>
             <Button clickFunc={reRoll} text={"Roll"}/>
        </main>
    )
}
export default Lucky;