import './App.css';
import Home from "../src/pages/Home"
import Authentication from "../src/pages/Authentication"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
        <Route path='/home'  element={<Home />}></Route>
        <Route path='/' element={< Authentication   register={'registeration'} />}></Route>
        <Route path='/login' element={< Authentication />}></Route>
     </Routes>

    </>
  );
}

export default App;
