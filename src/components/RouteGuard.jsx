import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Search from './Search'

const RouteGuard = () => {
    const location = useLocation()
 if(location?.state === null){
   return <Navigate to={"/"}/>
 }else {
    return <Search/>
 }
}

export default RouteGuard