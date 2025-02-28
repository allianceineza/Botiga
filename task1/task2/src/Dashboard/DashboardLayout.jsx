import React from "react";
import Sidebar from'./Sidebar'
import Navbar from './DashboardNavbar'
import {Outlet} from "react-router-dom"

function DashboardLayout(){
    return(
        <div>
             <Navbar/>
            <Sidebar/>
             <Outlet/>
           
        </div>
    )
}

export default DashboardLayout