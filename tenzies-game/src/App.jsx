import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
    const [dice, setDice] = React.useState(allNewDice());
    const [tenzies, setTenzies] = React.useState(false);
    const [moveCount, setMoveCount] = React.useState(0);
    const [time, setTime] = React.useState(0);
    const [timerId, setTimerId] = React.useState(null);
    const [bestScore, setBestScore]=React.useState(()=>{
        const storedBestScore= localStorage.getItem("bestScore")
        return storedBestScore? Number(storedBestScore):null
    })
    
    const[bestTime,setBestTime]=React.useState(()=>{
        const storedBestTime= localStorage.getItem("bestTime")
        return storedBestTime? Number(storedBestTime):null
    })

    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld);
        const firstValue = dice[0].value;
        const allSameValue = dice.every(die => die.value === firstValue);
        if (allHeld && allSameValue) {
            setTenzies(true);
            clearInterval(timerId);
            if(bestScore===null || moveCount<bestScore){
                localStorage.setItem("bestScore",moveCount)
                setBestScore(moveCount);
            }
            if(bestTime===null || time<bestTime){
                localStorage.setItem("bestTime",time)
                setBestTime(time)
            }
        }
    }, [dice,timerId,bestScore]);
    

    React.useEffect(() => {
        if (!tenzies) {
            const id = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
            setTimerId(id);
        } else {
            clearInterval(timerId);
        }
        return () => clearInterval(timerId);
    }, [tenzies]);

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        };
    }

    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie());
        }
        return newDice;
    }

    function rollDice() {
        if (!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? die : generateNewDie();
            }));
            setMoveCount(prevCount => prevCount + 1);
        } else {
            setTenzies(false);
            setDice(allNewDice());
            setMoveCount(0);
            setTime(0); // Reset the time
        }
    }

    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
        }));
    }

    const diceElements = dice.map(die => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
        />
    ));

    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="extra">
                {bestScore!== null && <p className="bestScore">Best {bestScore} Rolls</p>}
                {bestTime!==null && <p>{bestTime}Sec</p>}
            </div>
            <div className="dice-container">
                {diceElements}
            </div>
            <div className="extra">
                <p className="move-count">Rolls: {moveCount}</p>
                <p className="time-count">Time: {time} sec</p>
            </div>
         
            <button
                className="roll-dice"
                onClick={rollDice}
            >
                {tenzies ? "New Game" : "Roll"}
            </button>
        </main>
    );
}
