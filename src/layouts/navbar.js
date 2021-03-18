import React, {  useContext, useEffect } from "react";
import avatar from "../assets/img/avatar-6.jpg";
import { NavLink, useHistory } from 'react-router-dom';
import AuthContext  from "../context/authentication/authContext";
import CursosContext  from "../context/cursos/cursosContext";

function Navbar(props) {
  const authContext  = useContext(AuthContext);
  const { usuarioLogin,   cerrarSesion} = authContext;

  const cursosContext = useContext(CursosContext);
  const { limpiarState } = cursosContext;
  const history = useHistory();
  const cerrarSesionBtn = () =>{
    cerrarSesion();
    limpiarState();
    //props.history.push("/")
    history.push("/")
  }
  useEffect(() => {
    //usuarioAutenticado();
    //console.log("autenticado");
  }, [])
    const stylebutton = {
        top: "-3px",
        left: "0"
      };

      const styleli ={
        maxWidth: "2.5rem"
        
      }

    return(
<header className="header">
      <nav className="navbar navbar-expand-lg px-4 py-2 bg-white shadow">
      
       
        <NavLink to="/" className="navbar-brand font-weight-bold text-uppercase text-base">INBUMA</NavLink>
        <ul className="ml-auto d-flex align-items-center list-unstyled mb-0">
          <li className="nav-item">
            <form id="searchForm" className="ml-auto d-none d-lg-block">
              <div className="form-group position-relative mb-0">
                <button type="submit" style={stylebutton} className="position-absolute bg-white border-0 p-0"><i className="o-search-magnify-1 text-gray text-lg"></i></button>
                <input type="search" placeholder="Search ..." className="form-control form-control-sm border-0 no-shadow pl-4" />
              </div>
            </form>
          </li>
          {usuarioLogin ? (<React.Fragment><li className="nav-item dropdown mr-3"><a id="notifications" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle text-gray-400 px-1"><i className="fa fa-bell"></i><span className="notification-icon"></span></a>
            <div aria-labelledby="notifications" className="dropdown-menu"><a href="#" className="dropdown-item">
                <div className="d-flex align-items-center">
                  <div className="icon icon-sm bg-violet text-white"><i className="fab fa-twitter"></i></div>
                  <div className="text ml-2">
                    <p className="mb-0">You have 2 followers</p>
                  </div>
                </div></a><a href="#" className="dropdown-item">
                <div className="d-flex align-items-center">
                  <div className="icon icon-sm bg-green text-white"><i className="fas fa-envelope"></i></div>
                  <div className="text ml-2">
                    <p className="mb-0">You have 6 new messages</p>
                  </div>
                </div></a><a href="#" className="dropdown-item">
                <div className="d-flex align-items-center">
                  <div className="icon icon-sm bg-blue text-white"><i className="fas fa-upload"></i></div>
                  <div className="text ml-2">
                    <p className="mb-0">Server rebooted</p>
                  </div>
                </div></a><a href="#" className="dropdown-item">
                <div className="d-flex align-items-center">
                  <div className="icon icon-sm bg-violet text-white"><i className="fab fa-twitter"></i></div>
                  <div className="text ml-2">
                    <p className="mb-0">You have 2 followers</p>
                  </div>
                </div></a>
              <div className="dropdown-divider"></div><a href="#" className="dropdown-item text-center"><small className="font-weight-bold headings-font-family text-uppercase">View all notifications</small></a>
            </div>
          </li>
          <li className="nav-item dropdown ml-auto"><a id="userInfo" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle"><img src={usuarioLogin.avatar ==="" ? avatar: usuarioLogin.avatar} alt="Jason Doe" style={styleli} className="img-fluid rounded-circle shadow"/></a>
            {usuarioLogin.idRol==="1" && (<div aria-labelledby="userInfo" className="dropdown-menu"><NavLink to="/dashboardAdmin" className="dropdown-item"><strong className="d-block text-uppercase headings-font-family">{ usuarioLogin.firstname }</strong><small>{ usuarioLogin.lastname }</small></NavLink>
              <div className="dropdown-divider"></div><a href="#" className="dropdown-item">Settings</a><a href="#" className="dropdown-item">Activity log       </a>
              <div className="dropdown-divider"></div><button  className="dropdown-item" onClick={ cerrarSesionBtn }><div className="dropdown-item">Cerrar Sesión</div></button>
            </div>)
            }
            {usuarioLogin.idRol==="2" && (<div aria-labelledby="userInfo" className="dropdown-menu"><NavLink to="/dashboardP" className="dropdown-item"><strong className="d-block text-uppercase headings-font-family">{ usuarioLogin.firstname }</strong><small>{ usuarioLogin.lastname }</small></NavLink>
              <div className="dropdown-divider"></div><a href="#" className="dropdown-item">Settings</a><a href="#" className="dropdown-item">Activity log       </a>
              <div className="dropdown-divider"></div><button  className="dropdown-item" onClick={ cerrarSesionBtn }><div className="dropdown-item">Cerrar Sesión</div></button>
            </div>)
            }
            {usuarioLogin.idRol==="3" &&
            <div aria-labelledby="userInfo" className="dropdown-menu"><NavLink to="/dashboardA" className="dropdown-item"><strong className="d-block text-uppercase headings-font-family">{ usuarioLogin.firstname }</strong><small>{ usuarioLogin.lastname }</small></NavLink>
              <div className="dropdown-divider"></div><a href="#" className="dropdown-item">Settings</a><a href="#" className="dropdown-item">Activity log       </a>
              <div className="dropdown-divider"></div><button  className="dropdown-item" onClick={ cerrarSesionBtn }><div className="dropdown-item">Cerrar Sesión</div></button>
            </div>
            }
          </li></React.Fragment>) : <React.Fragment> 
            <li className="nav-item  mr-3">
              <NavLink to="/login"      className="nav-link dropdown-toggle px-1 text-info"><i className="fa o-home-1 mr-1"></i><span className="">Iniciar Sesión</span></NavLink>
          </li><li className="nav-item  mr-3">
              <NavLink to="/registrar"  className="nav-link dropdown-toggle px-1"><i className="o-exit-1 mr-1"></i><span className="">Registrarse</span></NavLink>
          </li>
          </React.Fragment>}
        </ul>
      </nav>
    </header>    
    )
}

export default Navbar;