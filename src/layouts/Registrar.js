import React, { useContext , useState, useEffect} from "react";
import AuthContext from '../context/authentication/authContext';
import AlertaContext from '../context/alerta/alertaContext';

const Registrar=(props) => {  
  const authContext = useContext(AuthContext);
  const { mensaje, registroexitoso , registrarUsuario }  = authContext;

  const alertaContext = useContext(AlertaContext);
  const {alerta, mostrarAlerta}  = alertaContext;
  //en caso de que el usuario se haya autenticado
  useEffect(() => {    
    if(registroexitoso){
      props.history.push('/registroexitoso');
      //console.log("redirigir");
    }
    if(mensaje){
      console.log( mensaje);
      mostrarAlerta(mensaje.msg,mensaje.categoria);      
    }
  //}, [mensaje, autenticado, props.history])
}, [mensaje])
    const [usuario, guardarUsuario]  = useState({        
          nombre:"",
          apellidop:"",
          apellidom:"",
          genero:"",
          email:"",          
          password:"",
          confirmar: ""        
    })

    const [error, guardarError]  = useState({        
      errorb:false,
      errorMsg:""
              
})

const {nombre, apellidop, apellidom,email, genero, password, confirmar} = usuario;

    const {errorb, errorMsg} = error;

    const manejadorSubmit = e =>{
        e.preventDefault();
    }

    const manejadorChange =  e => {
         guardarUsuario({           
                ...usuario,
                [e.target.name]: e.target.value
            
        })
        // console.log(this.state.form)
    }

    const manejadorBoton = async ()=>{
      //let url = process.env.REACT_APP_BACKEND_URL+'registrarUsuario' ;
      
      
      if(nombre.trim()==="" && apellidop.trim()==="" && usuario.genero==="" 
      && email.trim()==="" && password.trim()==="" && confirmar.trim()===""){
        //console.log("ostrarAlerta");
        //mostrarAlerta("Favor de llenar los campos obligatorios 2","alert");
        guardarError({
          ...error,
          "errorb": true,
          "errorMsg": "Favor de llenar los campos obligatorios"
        })
        
        return;
      }

      if(password.length<8){
        guardarError({
          ...error,
          "errorb": true,
          "errorMsg": "La contraseña debe de ser de al menos 8 caracteres"
        })
        return;
      }

        if(password!== confirmar){
          guardarError({
            ...error,
            "errorb": true,
            "errorMsg": "Las contraseñas no son iguales"
          })
          return;
        }
        guardarError({
          ...error,
          "errorb": false,
          "errorMsg": ""
        })

        registrarUsuario({
          nombre, apellidop, apellidom, email, genero, password, confirmar
        });         
        
        guardarUsuario({        
          nombre:"",
          apellidop:"",
          apellidom:"",
          genero:"",
          email:"",          
          password:"",
          confirmar: ""        
        })

    }

    
    return(        
        <div className="page-holder w-100 d-flex flex-wrap">
        <div className="container-fluid px-xl-5">
          <section className="py-5">
            <div className="row">
                <p></p>
			      </div>
            
            <div className="row">
              <div className="col-lg-12 mb-5">
                <div className="card">
                  <div className="card-header">
                    <h3 className="h6 text-uppercase mb-0">Formulario de Registro</h3>
                  </div>
                  <div className="card-body">
                    <p>Favor de capturar la inforación que se solicita.</p>
                  <div className="card2">
                  <div className="card-body">
                    <form className="form-horizontal" onSubmit={manejadorSubmit}>
                    <div className="form-group row">
                        <label className="col-md-3 form-control-label">Nombre</label>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="nombre" onChange={manejadorChange} value={nombre}/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3 form-control-label">Apellido Paterno</label>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="apellidop" onChange={manejadorChange} value={apellidop}/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3 form-control-label">Apellido Materno</label>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="apellidom" onChange={manejadorChange} value={apellidom}/>
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-md-3 form-control-label">Género<br/></label>
                        <div className="col-md-9">
                          
                          <div className="custom-control custom-radio custom-control-inline"  onChange={manejadorChange}>
                            <input id="customRadioInline1" type="radio" name="genero" className="custom-control-input" value="masculino" />
                            <label htmlFor="customRadioInline1" className="custom-control-label">Masculino</label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline"  onChange={manejadorChange}>
                            <input id="customRadioInline2" type="radio" name="genero" className="custom-control-input" value="femenino" />
                            <label htmlFor="customRadioInline2" className="custom-control-label">Femenino</label>
                          </div>
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-md-3 form-control-label">correo</label>
                        <div className="col-md-9">
                          <input id="inputHorizontalSuccess" type="email" name="email" placeholder="Email Address" className="form-control form-control-success" onChange={manejadorChange} value={email}/>
                        </div>
                      </div>
                      <div className="form-group row d-none">
                        <label className="col-md-3 form-control-label">Usuario</label>
                        <div className="col-md-9">
                          <input id="inlineFormInputGroup" type="text" name="usuario"placeholder="usuario" className="form-control form-control-success" onChange={manejadorChange} value={usuario}/><small className="form-text text-muted ml-3"></small>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 form-control-label">Contraseña</label>
                        <div className="col-md-9">
                          <input id="inputHorizontalWarning" type="password" name="password" placeholder="password" className="form-control form-control-warning" onChange={manejadorChange} value={password}/><small className="form-text text-muted ml-3"></small>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 form-control-label">Repetir Contraseña</label>
                        <div className="col-md-9">
                          <input id="inputHorizontalWarningc" type="password" name="confirmar" placeholder="password" className="form-control form-control-warning" onChange={manejadorChange} value={confirmar}/><small className="form-text text-muted ml-3"></small>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-9 ml-auto">
                          <input type="submit" value="Registrarse" className="btn btn-primary" onClick={manejadorBoton}/>                          
                        </div>
                      </div>
                    </form>
                    {errorb === true &&
                 <div className="alert alert-danger" role="alert">
                   {errorMsg}
                 </div>
               }
               {alerta ? (<div className="alert alert-warning" role="alert">
                   {alerta.msg}
                 </div>) : null
               }
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