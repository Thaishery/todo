import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './view/HomeView';
import Todo from './view/TodoView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/todo' element={<Todo />}/>
      </Routes>
    </Router>
  );
}

export default App;
