import react,{useState,useContext} from 'react'
import './App.css';
import End from './End.js'
import Menu from './Menu.js'
import Quiz from './Quiz.js'
import quizContext from './Context'


function App() {
  
  const[score,setScore]=useState(0)
  const [gameState,setGameState]=useState('menu')
  const QuizContext=useContext(quizContext)
  return (
    <div className="App">
     <h1>Quizz App</h1>
      <quizContext.Provider value={{gameState,setGameState,score,setScore}}>
      {gameState==='menu' && <Menu/>}
     {gameState==='end' && <End/>}
     {gameState==='Quiz' && <Quiz/>}
      </quizContext.Provider>
    </div>
  );
}

export default App;
