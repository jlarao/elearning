import React from "react";
//import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Contenido from "./Contenido";

function Admin() {
    return(
    <React.Fragment>        
        <div className="d-flex align-items-stretch">
            <Sidebar />
            <Contenido />
        </div>
    </React.Fragment>
    )
}

export default Admin;