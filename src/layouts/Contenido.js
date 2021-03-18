import React from "react";
 
function Contenido() {
    return(
        <div className="page-holder w-100 d-flex flex-wrap">
        <div className="container-fluid px-xl-5">
          <section className="py-5">
            <div className="row">
              <div className="col-xl-3 col-lg-6 mb-4 mb-xl-0">
                <div className="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
                  <div className="flex-grow-1 d-flex align-items-center">
                    <div className="dot mr-3 bg-violet"></div>
                    <div className="text">
                      <h6 className="mb-0">Data consumed</h6><span className="text-gray">145,14 GB</span>
                    </div>
                  </div>
                  <div className="icon text-white bg-violet"><i className="fas fa-server"></i></div>
                </div>
              </div>
            
           
            
            </div>
          </section>
          </div>
          </div>
    )
}


export default Contenido