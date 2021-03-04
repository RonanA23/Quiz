import React,{useState,useContext,useEffect} from 'react'
import {Questions} from './QuestionBank.js'
import './App.css'
import quizContext from './Context'
import axios from 'axios'

function Quiz() {

    const[items,setItems]=useState([])
    
    useEffect(async()=>{
        await axios.get('http://localhost:3001/read').then
        ((response)=>{
          console.log('res.data>>>>>>>>',response.data)
          setItems(response.data)})
          console.log('items are',items[0])
      },[])
      



    const[colourA,setColourA]=useState('')
    const[colourB,setColourB]=useState('')
    const[colourC,setColourC]=useState('')
    const[colourD,setColourD]=useState('')
    const{score,setScore,setGameState}=useContext(quizContext)
    const[currQuestion,setCurrQuestion]=useState(0)
    const[answer,setAnswer]=useState('')

    const onClick=()=>{
        if(answer===Questions[currQuestion].answer)
        {   console.log('old score is',score)
            setScore(score + 1)
            console.log('score is',score)}else{console.log('wrong')}
        setCurrQuestion(currQuestion+1)
        setColourA('')
        setColourB('')
        setColourC('')
        setColourD('')
    }
    const Finish=()=>{
        setGameState('end')

    }
    
    return (
        <div className='Quiz'>
            {items[currQuestion].url !==null && (<img className='pic'src={items[currQuestion].url} alt=''/>
            )}
            <h1>{items[currQuestion].prompt}</h1>
            <button className={`${colourA}`} onClick={()=>{setAnswer('A');setColourA('gold')}}>{Questions[currQuestion].optionA}</button>
            <button className={`${colourB}`}onClick={()=>{setAnswer('B');setColourB('gold')}}>{Questions[currQuestion].optionB}</button>
            <button className={`${colourC}`}onClick={()=>{setAnswer('C');setColourC('gold')}}>{Questions[currQuestion].optionC}</button>
            <button className={`${colourD}`} onClick={()=>{setAnswer('D');setColourD('gold')}}>{Questions[currQuestion].optionD}</button>
            {currQuestion === Questions.length-1 ?(
                <button onClick={Finish}>Finish Quiz</button>
            ):(
            <button onClick={onClick} className='Next'>Next Question</button>
            )}
        </div> 
    )
}

export default Quiz
