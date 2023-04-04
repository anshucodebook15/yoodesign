import "./Theme/Sass/index.scss";

import { Routes, Route } from "react-router-dom"
import { Yoo, Goodluck } from './Pages';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Yoo />} />
      <Route path='/goodluck' element={<Goodluck />} />
    </Routes>
  )
}

function App() {
  return (
    <AppRoutes />
  );
}

export default App;
