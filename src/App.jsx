import './App.css'
import {Login, Signup} from "./components"
import {Routes, Route} from "react-router-dom"
import {Landing, Question} from "./pages"

function App() {
  return (
    <div className="game">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/quizzes/:category" element={<Question />} />
      </Routes>
    </div>
  )
}

export default App
