import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


class Registrar extends React.Component{  
    constructor(props){
        super(props)
    }

    state  ={
        form: {
          nombre:"",
          apellidop:"",
          apellidom:"",
          genero:"",
          email:"",          
          password:""
        },
        error: false,
        errorMsg: ""
    }
    manejadorSubmit = e =>{
        e.preventDefault();
    }

    manejadorChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        // console.log(this.state.form)
    }

    manejadorBoton = async ()=>{
      let url = 'http://localhost:81/rest/api/registrarUsuario' ;
      console.log(this.state.form);
      
      if(this.state.form.nombre.trim()!=="" && this.state.form.apellidop.trim()!=="" && this.state.form.genero.trim()!=="" && this.state.form.email.trim()!==""){
        this.setState({
          error: false          
        })

        if(this.state.form.password.trim()!==""){


          await  axios.post(url, this.state.form)
          .then(response =>{
            console.log("response" + response);
            console.log(response.data);
            if(response.data.status==="ok"){ 
              if(response.data.estado==="ok"){              
              this.props.history.push("/login")
            }else{
              this.setState({
                error: true,
                errorMsg: `error: ${response.data.message}`
            })
            }
          }
          }).catch(error =>{
            console.log(error);
            if (error.response) {
              // client received an error response (5xx, 4xx)
              console.log("response" + error.response);
              this.setState({
                  error: true,
                  errorMsg: `error al conectar al api ${error.response.data.message}`
              })
            } else if (error.request) {
              // client never received a response, or request never left
              console.log("request"+error.request);
              this.setState({
                  error: true,
                  errorMsg: `error al conectar al api`
              })
            } else {
              // anything else
              console.log(error);
              this.setState({
                  error: true,
                  errorMsg: `error al conectar al api`
              })
            }
          })

        }else{
          this.setState({
            error: true,
            errorMsg: "Campo contraseña vacio"
          })
        }

      }else{
        this.setState({
          error: true,
          errorMsg: " Favor de llenar los campos obligatorios"
        })
      }
    }

    render(){
    return(        
        <div className="page-holder w-100 d-flex flex-wrap">
        <div className="container-fluid px-xl-5">
          <section className="py-5">
            <div className="row">
                <p></p>
			      </div>
            <div className="row">
                <h3></h3>
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
                    <form className="form-horizontal" onSubmit={this.manejadorSubmit}>
                    <div className="form-group row">
                        <label className="col-md-3 form-control-label">Nombre</label>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="nombre" onChange={this.manejadorChange}/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3 form-control-label">Apellido Paterno</label>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="apellidop" onChange={this.manejadorChange}/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3 form-control-label">Apellido Materno</label>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="apellidom" onChange={this.manejadorChange}/>
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-md-3 form-control-label">Género<br/></label>
                        <div className="col-md-9">
                          
                          <div className="custom-control custom-radio custom-control-inline"  onChange={this.manejadorChange}>
                            <input id="customRadioInline1" type="radio" name="genero" className="custom-control-input" value="masculino" />
                            <label htmlFor="customRadioInline1" className="custom-control-label">Masculino</label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline"  onChange={this.manejadorChange}>
                            <input id="customRadioInline2" type="radio" name="genero" className="custom-control-input" value="femenino" />
                            <label htmlFor="customRadioInline2" className="custom-control-label">Femenino</label>
                          </div>
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-md-3 form-control-label">correo</label>
                        <div className="col-md-9">
                          <input id="inputHorizontalSuccess" type="email" name="email" placeholder="Email Address" className="form-control form-control-success" onChange={this.manejadorChange}/>
                        </div>
                      </div>
                      <div className="form-group row d-none">
                        <label className="col-md-3 form-control-label">Usuario</label>
                        <div className="col-md-9">
                          <input id="inlineFormInputGroup" type="text" name="usuario"placeholder="usuario" className="form-control form-control-success" onChange={this.manejadorChange}/><small className="form-text text-muted ml-3"></small>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 form-control-label">Contraseña</label>
                        <div className="col-md-9">
                          <input id="inputHorizontalWarning" type="password" name="password" placeholder="password" className="form-control form-control-warning" onChange={this.manejadorChange}/><small className="form-text text-muted ml-3"></small>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-9 ml-auto">
                          <input type="submit" value="Registrarse" className="btn btn-primary" onClick={this.manejadorBoton}/>                          
                        </div>
                      </div>
                    </form>
                    {this.state.error === true &&
                 <div className="alert alert-danger" role="alert">
                   {this.state.errorMsg}
                 </div>
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
}
export default Registrar;