import './App.css'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'
import Reading from './components//pages/Reading';
import Writing from './components//pages/Writing';
import Grammar from './components/pages/Grammar';

export default function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/auth" element={<Login/>}/>
        <Route path="/main" element={<MainPage/>} >
            <Route path="/main/reading" element={<Reading/>}/>
            <Route path="/main/writing" element={<Writing/>}/>
            <Route path="/main/grammar" element={<Grammar/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}