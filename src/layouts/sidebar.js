import React, { useContext } from "react";
import { NavLink, useHistory  } from "react-router-dom";
import "../assets/css/style.default.css";
//import PreLoader from "../components/cursos/curso/preloader";
import AuthContext  from "../context/authentication/authContext";
import CursosContext  from "../context/cursos/cursosContext";


function Sidebar(props) {
  const authContext  = useContext(AuthContext);
  const { usuarioLogin, cerrarSesion } = authContext;

  const cursosContext = useContext(CursosContext);
  const { limpiarState } = cursosContext;
  const history = useHistory();
  //if(!!(usuarioLogin.idRol)) return <PreLoader />;
  //console.log(usuarioLogin);

  const cerrarSesionBtn = () =>{
    cerrarSesion();
    limpiarState();
    //props.history.push("/")
    history.push("/");
  }

    return(<div id="sidebar" className="sidebar py-3">
    <div className="text-gray-400 text-uppercase px-3 px-lg-4 py-4 font-weight-bold small headings-font-family">MAIN</div>
    <ul className="nav nav-pills flex-column">
          <li className="nav-item"><NavLink to="/" className="nav-link "><i className="o-home-1 mr-3 text-gray"></i><span>Inicio</span></NavLink></li>
          {usuarioLogin ? <React.Fragment>
          {usuarioLogin.idRol==="1" && (
            <li className="sidebar-list-item"><NavLink to="/dashboardAdmin" className="sidebar-link text-muted"><i className="o-sales-up-1 mr-3 text-gray"></i><span>Dashboard</span></NavLink></li>)
            }
            {usuarioLogin.idRol==="2" && (
            <li className="sidebar-list-item"><NavLink to="/dashboardP" className="sidebar-link text-muted"><i className="o-sales-up-1 mr-3 text-gray"></i><span>Dashboard</span></NavLink></li>)
            }
            {usuarioLogin.idRol==="3" && (
            <li className="sidebar-list-item"><NavLink to="/dashboardA" className="sidebar-link text-muted"><i className="o-sales-up-1 mr-3 text-gray"></i><span>Dashboard</span></NavLink></li>)
            } </React.Fragment> 
            : null
          }
          
          
        {usuarioLogin ? 
          <li className="sidebar-list-item"><button  className="sidebar-link text-muted btn-link"  onClick={ cerrarSesionBtn }><i className="o-exit-1 mr-3 text-gray"></i><span>Cerrar Sesión</span></button></li>
          :<React.Fragment>
          <li className="nav-item"><NavLink to="/registrar" className="nav-link "><i className="o-survey-1 mr-3 text-gray"></i><span>Registrar</span></NavLink></li>
          <li className="nav-item"><NavLink to="/login"     className="nav-link "><i className="o-exit-1 mr-3 text-gray">  </i><span>Login    </span></NavLink></li>
         </React.Fragment>
        } 
    </ul>
    
  </div>)
}


export default Sidebar