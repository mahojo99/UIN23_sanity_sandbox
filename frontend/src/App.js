import './App.css';
import {useEffect, useState} from 'react';
import { fetchAllProducts } from './lib/sanity/productServices';
import Frontpage from './pages/Frontpage';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [prods, setProds] = useState(null)

  const getProducts = async () => {
    const data = await fetchAllProducts()
    setProds(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  console.log(prods)

  return (
    <Routes>
      <Route index element={<Frontpage products={prods} />} />
    </Routes>
  );
}

export default App;
