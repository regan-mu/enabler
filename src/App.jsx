import './App.css'
import {Login, Signup} from "./components"
import {Routes, Route} from "react-router-dom"
import {Landing} from "./pages"

function App() {
  return (
    <div className="game">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
    </div>
  )
}

export default App
