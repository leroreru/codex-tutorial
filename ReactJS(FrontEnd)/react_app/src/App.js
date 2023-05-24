import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Layout from './komponen/layout/layout';
import Latihan from './komponen/pages/latihan';
import Bunga from './komponen/pages/parent';
import Calculator from './komponen/pages/calculator';
import UseEffect1 from './komponen/pages/useEffect';
import Home from './komponen/pages/home';


function App() {
  return (
    <div>
      {/* <header className="App-header"> */}
        {/* <h1>Belajar React JS 😘</h1> */}
        <Router>
          <Routes>
            <Route path="/" element={<Layout/>}>

            <Route path="/home" element={<Home/>}></Route>
            <Route path="/latihan" element={<Latihan/>}></Route>
            <Route path="/parent" element={<Bunga/>}></Route>
            <Route path="/calculator" element={<Calculator/>}></Route>
            <Route path="/useEffect1" element={<UseEffect1/>}></Route>

            </Route>
          </Routes>
        </Router>
      {/* </header> */}
    </div>
  );
}


export default App;
