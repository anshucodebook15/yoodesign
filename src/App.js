import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom"
import { Yoo } from './Pages';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Yoo />} />
      <Route path='/' element={<Yoo />} />
    </Routes>
  )
}


function App() {
  return (
    <AppRoutes />
  );
}

export default App;
