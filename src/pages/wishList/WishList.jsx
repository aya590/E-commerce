
import React, { useContext, useEffect } from 'react'
import { wishlistcontext } from '../../context/wishlist.context'
import Loading from '../../component/loading/loading'
import { Cartcontext } from '../../context/cart.context';




export default function WishList() {

let{getwishlistproducts,removeProductFromwishlist ,wishlist}=useContext(wishlistcontext);
let {addProducttocard} =useContext(Cartcontext)



  useEffect(()=>{
    getwishlistproducts()
     },[])

  return (
   <>


   <section className='my-12 bg-gray-100  py-10 px-14'>
    <h1 className='font-bold text-3xl mb-4'>
    My wish List
    </h1>
    {wishlist==null?<Loading/>: wishlist.map(({ id, title, price, imageCover })=> <div key={id}  className='flex justify-between items-center  mb-10 border-b-2 pb-4'>
    <div className="card flex justify-center items-center gap-6">
        <img className='w-40 object-cover' src= {imageCover}alt="" />
        <div className="body space-y-2 ">
      <p className='font-bold'>{title}</p>
      <p className='font-bold  text-primary-700'>{price}EGP</p>
      <p onClick = { ()=>{removeProductFromwishlist({productId:id})}}
      className='text-sm  text-red-600  cursor-pointer '><i className="fa-regular fa-trash-can  "></i> Remove</p>
    </div>
    </div>
    
    <div>
      <button onClick={ ()=>{ addProducttocard({productId :id})}} 
      className='btn border border-primary-600 bg-transparent hover:bg-white py-2 px-2 text-'> add to cart</button>
    </div>
    </div>)}
   
   </section>

   </>
  )
}
