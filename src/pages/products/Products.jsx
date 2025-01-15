import React, { useContext, useState } from 'react'
import Loading from '../../component/Loading/loading'
import Card from '../../component/Card/Card'
import axios from 'axios'
import { useEffect } from 'react'
import Homeslider from '../../component/Homeslider/Homeslider'
import Categoryslider from '../../component/categoryslider/Categoryslider'


export default function Home() {

  const[ product, setproduct ] =useState(null)
  const [searchproduct, setsearchproduct] = useState("");

  async function getproducts() {
    const option= {
      url: "https://ecommerce.routemisr.com/api/v1/products",
      method :"GET",
    }
    let {data}= await axios.request(option);
 console.log(data)
    setproduct(data.data) 
  }
  useEffect
  (() =>{getproducts() },[])

  const filteredProducts = !searchproduct
  ? product
  : product.filter((searchitem) =>
      searchitem.category.name.toLowerCase().includes(searchproduct.toLowerCase())
    );

  return (
  <>
 
       <input
       className='form-control w-3/4 ml-28 my-24 '
        type="text"
        placeholder="Search"
        value={searchproduct}
        onChange={e => setsearchproduct(e.target.value)}
      />
    {!product ? (
        <Loading />
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-6">
          {filteredProducts.map((item) => (
            <Card ProductInfo={item} key={item.id} />
          ))}
        </div>
      )}
  </>
  )
}
