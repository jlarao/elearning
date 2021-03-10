import React, { useEffect, useContext }  from 'react';

import AuthContext  from "../context/authentication/authContext";
import CursosContext from "../context/cursos/cursosContext";
import { Link } from "react-router-dom";
function DashboardAdmin() {

  //info authentication
  const authContext  = useContext(AuthContext);
  const { usuarioAutenticado, usuarioLogin} = authContext;
  
  const cursosContext = useContext(CursosContext);
  const { cursos, obtenerCursosUsuarioInstructor } = cursosContext;

  useEffect(() => {
    usuarioAutenticado();
    console.log("dashboardAdmin");
    obtenerCursosUsuarioInstructor();
  }, []);

  var cursosLista = [];
  for(let i=0; i< cursos.length;i++){
    console.log(i);
    cursosLista.push(
      <div className="d-flex justify-content-between align-items-start align-items-sm-center mb-4 flex-column flex-sm-row " key={i}>
        <div className="left d-flex align-items-center">
          <div className="icon icon-lg shadow mr-3 text-gray"><i className="fab fa-dropbox"></i></div>
          <div className="text">
            <h6 className="mb-0 d-flex align-items-center"> <span>{cursos[i].nombreCurso}</span><span className=" ml-2 "></span></h6><small className="text-gray">{cursos[i].fechaRegistro}</small>
          </div>
        </div>
        <div className="right ml-5 ml-sm-0 pl-3 pl-sm-0 text-violet">                        
          <Link to={"/curso-editar/"+cursos[i].idCurso}><button type="button" className="ml-2 btn btn-info">Editar Curso</button></Link>
        </div>
      </div>
    )
  }
   
    const manejadorSubmit = e =>{

    }

    const manejadorChange = e =>{

    }

    const manejadorBoton = e =>{

    }

   

        
    return (  
      <div className="page-holder w-100 d-flex flex-wrap">
      <div className="container-fluid px-xl-5">
      <section className="py-5">
            <div className="row">
              <div className="col-lg-8">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-header">
                    <h2 className="h6 mb-0 text-uppercase">Cursos como instructor</h2>
                  </div>
                  <div className="card-body">
                    <p className="text-gray mb-5">Listado de Cursos</p>
                              {cursosLista}                                
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bg-white shadow roundy px-4 py-3 d-flex align-items-center justify-content-between mb-4">
                  <div className="flex-grow-1 d-flex align-items-center">
                    <div className="dot mr-3 bg-violet"></div>
                    <div className="text">
                      <Link to="/curso-alta"><button type="button" className="ml-2 btn btn-info">Crear Nuevo Curso</button></Link>
                    </div>
                  </div>
                  <div className="icon bg-violet text-white"><i className="fas fa-clipboard-check"></i></div>
                </div>
                <div className="bg-white shadow roundy px-4 py-3 d-flex align-items-center justify-content-between mb-4">
                  <div className="flex-grow-1 d-flex align-items-center">
                    <div className="dot mr-3 bg-green"></div>
                    <div className="text">
                    <Link to={"/admin-edit/"+usuarioLogin.id}><button type="button" className="ml-2 btn btn-info">Datos Personales</button></Link>
                    </div>
                  </div>
                  <div className="icon bg-green text-white"><i className="fas fa-dollar-sign"></i></div>
                </div>
                <div className="bg-white shadow roundy px-4 py-3 d-flex align-items-center justify-content-between mb-4">
                  <div className="flex-grow-1 d-flex align-items-center">
                    <div className="dot mr-3 bg-blue"></div>
                    <div className="text">
                      <h6 className="mb-0">New clients</h6><span className="text-gray">25 new clients</span>
                    </div>
                  </div>
                  <div className="icon bg-blue text-white"><i className="fas fa-user-friends"></i></div>
                </div>
                
              </div>
            
            </div>
          </section>  
          </div>                 
          </div>
     )
}

export default DashboardAdmin;


