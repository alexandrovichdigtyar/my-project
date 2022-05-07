import logo from './logo.svg';
import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import HomePage from './components/HomePage/HomePage'
import Popular from './components/Popular/Popular'
import Battle from './components/Battle/Battle'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Popular" element={<Popular />}></Route>
        <Route path="/Battle" element={<Battle />}></Route>
        <Route path='*' element={<Navigate to="/" />}/>
      </Routes>
    </>
  )
}

export default App;
