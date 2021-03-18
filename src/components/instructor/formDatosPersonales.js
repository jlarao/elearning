import React, { useState, useRef} from 'react';
import axios, {CancelToken, isCancel} from "axios";
import { useDispatch } from "react-redux";
import { editarDatosInstructor } from "../../actions/instructorActions";
const FormDatosPersonales = ({instructor}) => {
    const dispatch = useDispatch();
    const editarDatosInstructorForm = e => dispatch(  editarDatosInstructor(e) );
    const [usuario, guardarUsuario]  = useState({
        idUsuario: instructor.idUsuario,
        nombre: instructor.nombre,
        apellidoPaterno: instructor.apellidoPaterno,
        apellidoMaterno: instructor.apellidoMaterno,
        sexo:  instructor.sexo,
        correoElectronico: instructor.correoElectronico,
        avatar: instructor.avatar,
        password: "",
        confirmar: ""
        
  })
  const [porcentajeSubidoImagen, setporcentajeSubidoImagen] = useState(0);
    const cancelSubirPoster = useRef(null);  
  const [error, guardarError]  = useState({        
    errorb:false,
    errorMsg:""            
})

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



  const manejadorBoton =  (e)=>{
    e.preventDefault();
    if(nombre.trim()===""){
        guardarError({
            ...error,
            "errorb": true,
            "errorMsg": "Favor de llenar el campo nombre"
          })
          return;
    }
    if(apellidoPaterno.trim()===""){
        guardarError({
            ...error,
            "errorb": true,
            "errorMsg": "Favor de llenar el campo apellido paterno"
          })
          return;
    }

    if(apellidoPaterno.trim()===""){
        guardarError({
            ...error,
            "errorb": true,
            "errorMsg": "Favor de llenar el campo apellido paterno"
          })
          return;
    }
    if(sexo.trim()===""){
        guardarError({
            ...error,
            "errorb": true,
            "errorMsg": "Favor de llenar el campo genero"
          })
          return;
    }
    
    if(correoElectronico.trim()===""){
        guardarError({
            ...error,
            "errorb": true,
            "errorMsg": "Favor de llenar el campo correo electronico"
          })
          return;
    }    
    
    if(password.trim()>1 && password.trim()<7){
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

      /*registrarUsuario({
        nombre, apellidoPaterno, apellidoMaterno, correoElectronico, sexo, password, confirmar
      }); */
      editarDatosInstructorForm(usuario);         
      
   /*   guardarUsuario({        
          idUsuario: 0,
        nombre:"",
        apellidoPaterno:"",
        apellidoMaterno:"",
        sexo:"",
        correoElectronico:"",          
        password:"",
        confirmar: "",
        avatar : ""       
      })*/

  }
  const [urlImagen, setUrlImagen] = useState(null);
  const {nombre, avatar, apellidoPaterno, apellidoMaterno,correoElectronico, sexo, password, confirmar} = usuario; 

  const uploadPoster = ({target: { files }}) =>{
    console.log(files[0]);
    const formData = new FormData();  
    // Update the formData object
    formData.append(      "imagen",files[0]    ); 
    const options = {
      onUploadProgress:   (progressEvent) => {
        const {loaded, total} = progressEvent;
        let percent = Math.floor((loaded * 100) / total )
        console.log(`${loaded}kb of ${total}kb | percent ${percent}`)
        if(percent < 100){
          setporcentajeSubidoImagen(percent)
        }
      },
      cancelToken: new CancelToken( cancel => cancelSubirPoster.current = cancel )
    };
    axios.post(process.env.REACT_APP_BACKEND_URL+'imagen',formData, options).then(res =>{
      //console.log(res);
      setporcentajeSubidoImagen(100)
      setTimeout(setporcentajeSubidoImagen(0) ,2000)
      console.log(res.data);
      setUrlImagen(res.data.path);      
      guardarUsuario({       
              ...usuario,
              'avatar': res.data.path        
        })
             
      console.log(urlImagen);
    })
    .catch(err =>{
      console.log(err);
      if(isCancel(err)){
        guardarError({          
          error: true,
          errorMsg: err.message
        })
        console.log(err);
      }
      setporcentajeSubidoImagen(0);
    })
  }
        
  const cancelUploadPoster = ()=> {
    console.log("Cancelando subida de pdf");
    if( cancelSubirPoster.current)
      cancelSubirPoster.current(" Usuario ha cancelado la subida de la imagens");
  } 

    return ( 
      <section className="pt-2">
        <div className="row">
            <p></p>
              </div>
        
         
        <div className="row">
          <div className="col-lg-12 mb-5">
            <div className="card">
              <div className="card-header">
                <h3 className="h6 text-uppercase mb-0">Editar datos personales</h3>
              </div>
              <div className="card-body">
                <p>Favor de capturar la inforación solicitada</p>
              <div className="card2">
              <div className="card-body">
                <form className="form-horizontal" onSubmit={manejadorSubmit}>
                <div className="form-group row">
                    <label className="col-md-3 form-control-label">Nombre</label>
                    <div className="col-md-9">
                      <input type="text" className="form-control" name="nombre" onChange={manejadorChange} value = {nombre}/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label">Apellido Paterno</label>
                    <div className="col-md-9">
                      <input type="text" className="form-control" name="apellidoPaterno" onChange={manejadorChange} value = {apellidoPaterno}/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label">Apellido Materno</label>
                    <div className="col-md-9">
                      <input type="text" className="form-control" name="apellidoMaterno" onChange={manejadorChange} value = {apellidoMaterno}/>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-md-3 form-control-label">Género<br/></label>
                    <div className="col-md-9">
                      
                      <div className="custom-control custom-radio custom-control-inline"  onChange={manejadorChange}>
                        <input id="customRadioInline1" type="radio" name="sexo" className="custom-control-input" value="masculino" defaultChecked={ sexo === "masculino" ? "defaultChecked " : ""}/>
                        <label htmlFor="customRadioInline1" className="custom-control-label">Masculino</label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline"  onChange={manejadorChange}>
                        <input id="customRadioInline2" type="radio" name="sexo" className="custom-control-input" value="femenino" defaultChecked={ sexo === "femenino" ? "defaultChecked " : ""}/>
                        <label htmlFor="customRadioInline2" className="custom-control-label">Femenino</label>
                      </div>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-md-3 form-control-label">correo</label>
                    <div className="col-md-9">
                      <input id="inputHorizontalSuccess" type="email" name="correoElectronico" placeholder="Email Address" className="form-control form-control-success" onChange={manejadorChange} value = {correoElectronico}/>
                    </div>
                  </div>
                  <div className="form-group row d-none">
                    <label className="col-md-3 form-control-label">Usuario</label>
                    <div className="col-md-9">
                      <input id="inlineFormInputGroup" type="text" name="usuario"placeholder="usuario" className="form-control form-control-success" onChange={manejadorChange} /><small className="form-text text-muted ml-3"></small>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 form-control-label">Contraseña</label>
                    <div className="col-md-9">
                      <input id="inputHorizontalWarning" type="password" name="password" placeholder="password" className="form-control form-control-warning" onChange={manejadorChange} /><small className="form-text text-muted ml-3"></small>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 form-control-label">Repetir Contraseña</label>
                    <div className="col-md-9">
                      <input id="inputHorizontalWarningc" type="password" name="confirmar" placeholder="password" className="form-control form-control-warning" onChange={manejadorChange} /><small className="form-text text-muted ml-3"></small>
                    </div>
                  </div>

                

                  <div className="form-group row">
                          <label className="col-md-3 form-control-label">Avatar</label>
                          <div className="col-md-9">
                            <img src={avatar} className="img-fluid " style={{"height":"25vh"}} name="imagen" alt="avatar"/>
                          </div>
                        </div>

                  <div className="form-group row">
            <label className="col-md-3 form-control-label">Subir imagen</label>
            <div className="col-md-9">
            <input type="file" name="poster" accept="image/x-png,image/gif,image/jpeg" onChange={uploadPoster}/>
            {porcentajeSubidoImagen > 0 &&<React.Fragment> <div className="progress col-md-6"><div className="progress-bar" style={{"width":porcentajeSubidoImagen+"%"}}>{porcentajeSubidoImagen}</div>
            </div><div className="form-group row">
                          <div className="col-md-3 ml-auto">
                            <button type="button" className="btn btn-primary" onClick={cancelUploadPoster}>Cancelar</button>                         
                          </div>
                        </div></React.Fragment>}</div>                                 
        </div>


                  <div className="form-group row">
                    <div className="col-md-9 ml-auto">
                      <input type="submit" value="Guardar" className="btn btn-primary" onClick={manejadorBoton}/>                          
                    </div>
                  </div>
                </form>
                {errorb === true &&
             <div className="alert alert-danger" role="alert">
               {errorMsg}
             </div>
           }
           
              </div>
            </div>

            </div>
            </div>
          </div> 
          </div>
        
      </section>
       );
}
 
export default FormDatosPersonales;