import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from '../context/authentication/authContext';
import AlertaContext from "../context/alerta/alertaContext";

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const { usuarioLogin, mensaje, iniciarSesion, autenticado }  = authContext;
  const alertaContext = useContext(AlertaContext);
  const {alerta, mostrarAlerta}  = alertaContext;

  const [login, guardarLogin ] = useState( {    
        usuario:"",
        password:""           
})
const {usuario, password} = login;

const [error, guardarError]  = useState({        
  errorb:false,
  errorMsg:""
          
})
const {errorb, errorMsg} = error;

useEffect(()=> {
  if(autenticado){
    //props.history.push("/dashboard");
    
    if(usuarioLogin){
      console.log(usuarioLogin.idRol);
      if(usuarioLogin.idRol==="1"){
        console.log("admin");
        props.history.push("/dashboardAdmin");
      }
      else if(usuarioLogin.idRol==="2"){
        console.log("profesor");
        props.history.push("/dashboardP");
      }else{
        console.log("alumno");
        props.history.push("/dashboardA")
      }
    }
  }
  if(mensaje){
    mostrarAlerta(mensaje.msg, mensaje.categoria);
  }
}, [usuarioLogin, autenticado , mensaje , props.history])
    const manejadorSubmit = e =>{
        e.preventDefault();
    }

    const manejadorChange = (e)  => {
         guardarLogin({            
                ...login,
                [e.target.name]: e.target.value            
        })        
    }

    const manejadorBoton = ()=>{      
      //console.log(login);

      if(usuario.trim()===""){
        guardarError({
          errorb: true,
          errorMsg: " Campo usuario vacio"
        })
        return;
      }
        if(password.trim()===""){
          guardarError({
            errorb: true,
            errorMsg: "Campo contraseña vacio"
          })
          return;
        }
        guardarError({
          errorb: false,
          errorMsg: ""
        })
        iniciarSesion(login);
        return;          
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
                    <h3 className="h6 text-uppercase mb-0">Datos de acceso</h3>
                  </div>
                  <div className="card-body">
                    <p>Favor de capturar la inforación que se solicita.</p>
                  <div className="card2">
                  <div className="card-body">
                    <form className="form-horizontal" onSubmit={manejadorSubmit}>
                      <div className="form-group row">
                        <label className="col-md-3 form-control-label">Usuario</label>
                        <div className="col-md-9">
                          <input id="inputHorizontalSuccess" type="text" name="usuario"placeholder="usuario" className="form-control form-control-success" onChange={manejadorChange}/><small className="form-text text-muted ml-3"></small>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 form-control-label">Contraseña</label>
                        <div className="col-md-9">
                          <input id="inputHorizontalWarning" type="password" name="password" placeholder="password" className="form-control form-control-warning" onChange={manejadorChange}/><small className="form-text text-muted ml-3"></small>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-9 ml-auto">
                          <input type="submit" value="Iniciar Sesion" className="btn btn-primary" onClick={manejadorBoton}/>
                          <Link to="/registrar"><button type="button" className="ml-2 btn btn-info">Registrarse</button></Link>
                        </div>
                      </div>
                    </form>
                    {errorb === true &&
                 <div className="alert alert-danger" role="alert">
                   {errorMsg}
                 </div>
               }
               {alerta ? <div className={`alert alert-${alerta.categoria}`} role ="alert">{alerta.msg}</div> : null}
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

export default Login;