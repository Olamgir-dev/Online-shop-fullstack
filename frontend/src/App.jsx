import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Layout from './components/Layout';
import NoPage from './Pages/NoPage';
import ProductList from './Pages/ProductList';
import ProductAdd from './Pages/ProductAdd';
import ProductData from './Pages/ProductData';
import Categorys from './Pages/Categorys';
import Category from './Pages/Category';
import { useSelector } from 'react-redux';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
function App() {
  const selector = useSelector(state => state.glasses.isGlases);
  return (
    <div style={{ filter: selector && 'grayscale(100%)' }}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductList />} />
            <Route path="add" element={<ProductAdd />} />
            <Route path="/:id" element={<ProductData />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/categorys" element={<Categorys />} />
            <Route path="/categorys/:categoryName" element={<Category />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
