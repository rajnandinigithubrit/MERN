import './App.css';
import React,{useEffect,useState} from 'react'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateComponent from './Components/PrivateComponent';
import AddProduct from './Components/AddProduct/AddProduct';
import ViewProduct from './Components/ViewProduct/ViewProduct';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';
import Pdf from './Components/PdfUpload/Pdf';
function App() {
//   const [backendData,setBackendData] = useState([{}])

//   useEffect(()=>{
// fetch('/api')
// .then((response)=>{
//   const res = response.json();
//   return res;
// })
// .then((data)=>{
//   console.log(data)
//   setBackendData(data);
// })
//   },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path='/pdf' element={<Pdf/>}></Route>
          <Route element={<PrivateComponent/>}>
          <Route path='/' element={<ViewProduct/>}></Route>
          <Route path='/add-product' element={<AddProduct/>}></Route>
          <Route path='/update/:id' element={<UpdateProduct/>}></Route>
          <Route path='/logout' element={<h1>Logout</h1>}></Route>
          <Route path='/profile' element={<h1>Profile Component</h1>}></Route>
          </Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
