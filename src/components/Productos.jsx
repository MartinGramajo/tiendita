import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductoCard from './ProductoCard';

export default function Productos() {
    const [productos, setProductos] = useState([])
    console.log("file: Productos.jsx ~ line 6 ~ Productos ~ productos", productos)



    useEffect(() => {
        const request = async () => {
          const response = await axios.get(
            `https://fakestoreapi.com/products?limit=12`
          );
            const ListaProductos = response.data;  
            setProductos(ListaProductos )
        };
        request()
      }, []);
    

  return (
      <div className="d-flex flex-wrap justify-content-between container my-2">
         { productos.map((producto, id) => (
              <ProductoCard producto={producto} key={id} />
          ))}
      </div>
  )
}
