import React,{useContext} from 'react'
import quizContext from './Context'
import './App.css'
import {Questions} from './QuestionBank.js'

function End() {
    const {score,setScore,setGameState}=useContext(quizContext)

    const restart=()=>{
        setScore(0)
        setGameState('Quiz')

    }
    return (
        <div className='End'>
            <h1>End</h1>
            <p>You scored {score} out of {Questions.length}</p>
            <button onClick={restart}>Restart Quiz</button>
            {score>5 &&(
                <div>Maith An fear</div>
            )}
            {score===5 &&(
                <div>You really took the soup there</div>
            )}
            {score===0 &&(
                <div>Amadan</div>
            )}
        </div>
    )
}

export default End
