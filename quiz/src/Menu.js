import React,{useContext,useEffect,useState} from 'react'
import quizContext from './Context'
import './App.css'
import Axios from 'axios'

function Menu() {
    const[items,setItems]=useState([])

    useEffect(()=>{
        Axios.get('http://localhost:3001/read').then((response)=>{
        console.log('DATA IS',response.data)
        setItems(response.data)
        console.log('items>>>>,',items)
        })      
      },[])
    

    const QuizContext=useContext(quizContext)
    const {gameState,setGameState}= QuizContext
    return (
      
        <div className='Menu'>
            {items.length>0?<h1>{items}</h1>:<h1>nothing to display</h1>}
            <h1>Menu</h1>
            <button onClick={()=>setGameState('Quiz')}>Start</button>
        </div>
    )
}

export default Menu
