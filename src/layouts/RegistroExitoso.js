import React, { useContext , useState, useEffect} from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import AuthContext from '../context/authentication/authContext';
import AlertaContext from '../context/alerta/alertaContext';

const Registrar=(props) => {       
    return(   
      <div className="page-holder w-100 d-flex flex-wrap">
        <div className="container-fluid px-xl-5">     
      <section className="py-5">
      <div className="row">
        <div className="col-lg-12">
          <div className="card mb-5 mb-lg-0">
            <div className="card-header">
              <h2 className="h6 mb-0 text-uppercase">Usuario registrado exitosamente.</h2>
            </div>

            <div className="card-body">
              <p className="text-gray mb-5"></p>

              <div className="d-flex justify-content-between align-items-start align-items-sm-center mb-4 flex-column flex-sm-row">
                <div className="left d-flex align-items-center">
                  <div className="icon icon-lg shadow mr-3 text-gray"><i className="fab o-exit-1"></i></div>
                  <div className="text">
                    <h6 className="mb-0 d-flex align-items-center"> <span>
                      <NavLink to="/login"><button type="button" className="ml-2 btn btn-info">Iniciar Sesion</button></NavLink></span></h6><small className="text-gray">Ir a pagina de login</small>
                  </div>
                </div>
                <div className="right ml-5 ml-sm-0 pl-3 pl-sm-0 text-violet">
                  <h5></h5>
                </div>
              </div>
             
           
              
            </div>
          </div>
        </div>        
      </div>
    </section>
    </div>
    </div>
    )
}

export default Registrar;