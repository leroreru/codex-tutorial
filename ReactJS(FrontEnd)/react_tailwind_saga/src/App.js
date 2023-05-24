import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Layout from './component/shared/layout';
import User from './component/pages/user/user';
import Category from './component/pages/category';
import Product from './component/pages/product/product';
import Dashboard from './component/pages/dashboard';
import AddUser from './component/pages/user/addUser';
import AddProduct from './component/pages/product/addProduct';
import UpdateProduct from './component/pages/product/updateProduct';



function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Dashboard/>}> </Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/category" element={<Category/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/user/adduser" element={<AddUser/>}></Route>
        <Route path="/product/update-product/:id" element={<UpdateProduct/>}></Route>
        {/* <Route path="/edituser" element={<AddUser/>}></Route> */}
        <Route path="/product/addproduct" element={<AddProduct/>}></Route>
      </Route>
    </Routes>
   </Router>
  );
}

export default App;
