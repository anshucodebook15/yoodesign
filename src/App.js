import "./Theme/Sass/index.scss";

import { Routes, Route } from "react-router-dom"
import { Yoo, Goodluck, Errpage } from './Pages';
import Test from "./Test/Test";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Yoo />} />
      <Route path='/goodluck' element={<Goodluck />} />
      <Route path='/test' element={<Test />} />
      <Route path='*' element={<Errpage />} />
    </Routes>
  )
}

function App() {
  return (
    <AppRoutes />
  );
}

export default App;
