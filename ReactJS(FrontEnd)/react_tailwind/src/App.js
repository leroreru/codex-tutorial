import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Layout from './component/shared/layout';
import User from './component/pages/user';
import Category from './component/pages/category';
import Product from './component/pages/product';
import Dashboard from './component/pages/dashboard';


function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Dashboard/>}> </Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/category" element={<Category/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
      </Route>
    </Routes>
   </Router>
  );
}

export default App;
