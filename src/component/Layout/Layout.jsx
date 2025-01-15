import React from 'react'
import Navbare from '../Navbare/Navbare'

import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Navbare/>
    <div className=" xl:container lg:container   md:container sm:container py-16">
    <Outlet></Outlet>
    </div>
  
  
    </>
  )
}
