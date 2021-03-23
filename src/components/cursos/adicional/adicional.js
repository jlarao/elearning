import React from 'react';
import { Link } from "react-router-dom";
const Adicional = () => {
    return ( 
        <div className="page-holder w-100 d-flex flex-wrap">
        <div className="container-fluid px-xl-5">
        <section className="py-5">
              <div className="row">
              <div className="col-xl-3 col-lg-6 mb-4 mb-xl-0">
                <div className="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
                  <div className="flex-grow-1 d-flex align-items-center">
                    <div className="dot mr-3 bg-violet"></div>
                    <div className="text">
                    <Link to="/usuarios">
                      <h6 className="mb-0">usuario</h6><span className="text-gray"></span>
                    </Link>
                    </div>
                    
                  </div>
                  <div className="icon text-white bg-violet"><i className="fas fa-user"></i></div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 mb-4 mb-xl-0">
                <div className="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
                  <div className="flex-grow-1 d-flex align-items-center">
                    <div className="dot mr-3 bg-green"></div>
                    <div className="text">
                    <Link to="/categorias">
                      <h6 className="mb-0">Categorias</h6><span className="text-gray"></span>
                      </Link>
                    </div>
                  </div>
                  <div className="icon text-white bg-green"><i className="far fa-clipboard"></i></div>
                </div>
              </div>
             
              </div>
            </section>  
            </div>                 
            </div>
    )
}
 
export default Adicional;