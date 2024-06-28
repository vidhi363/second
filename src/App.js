import { Route, Routes } from 'react-router-dom';
import './App.css';
import Api from './componet/Api';
import Detail from './componet/Detail';
import Viewcart from './componet/viewcart';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Api />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/cart' element={<Viewcart/>} />       
      </Routes>

    </>
  );
}

export default App;
