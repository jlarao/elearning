import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/style.default.css";
import PreLoader from "../components/cursos/curso/preloader";
import AuthContext  from "../context/authentication/authContext";
import CursosContext  from "../context/cursos/cursosContext";
import Preloader from '../components/cursos/curso/preloader';

function Sidebar() {
  const authContext  = useContext(AuthContext);
  const { usuarioLogin, cerrarSesion } = authContext;

  const cursosContext = useContext(CursosContext);
  const { limpiarState } = cursosContext;
   
  if(usuarioLogin.idRol) return <PreLoader />;
  console.log(usuarioLogin);

  const cerrarSesionBtn = () =>{
    cerrarSesion();
    limpiarState();
  }

    return(<div id="sidebar" className="sidebar py-3">
    <div className="text-gray-400 text-uppercase px-3 px-lg-4 py-4 font-weight-bold small headings-font-family">MAIN</div>
    <ul className="sidebar-menu list-unstyled">
          <li className="sidebar-list-item"><NavLink to="/" className="sidebar-link text-muted active"><i className="o-home-1 mr-3 text-gray"></i><span>Inicio</span></NavLink></li>
          
          {usuarioLogin.idRol==="1" && (
            <li className="sidebar-list-item"><NavLink to="/dashboardAdmin" className="sidebar-link text-muted"><i className="o-sales-up-1 mr-3 text-gray"></i><span>Dashboard</span></NavLink></li>)
            }
            {usuarioLogin.idRol==="2" && (
            <li className="sidebar-list-item"><NavLink to="/dashboardP" className="sidebar-link text-muted"><i className="o-sales-up-1 mr-3 text-gray"></i><span>Dashboard</span></NavLink></li>)
            }
            {usuarioLogin.idRol==="3" && (
            <li className="sidebar-list-item"><NavLink to="/dashboardA" className="sidebar-link text-muted"><i className="o-sales-up-1 mr-3 text-gray"></i><span>Dashboard</span></NavLink></li>)
            }
          <li className="sidebar-list-item"><a href="tables.html" className="sidebar-link text-muted"><i className="o-table-content-1 mr-3 text-gray"></i><span>Dashboard</span></a></li>
          <li className="sidebar-list-item"><a href="forms.html" className="sidebar-link text-muted"><i className="o-survey-1 mr-3 text-gray"></i><span>Forms</span></a></li>
      
          <li className="sidebar-list-item"><a href="login.html" className="sidebar-link text-muted"><i className="o-exit-1 mr-3 text-gray"></i><span>Login</span></a></li>
    </ul>
    
  </div>)
}


export default Sidebar