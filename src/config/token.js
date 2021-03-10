import clienteAxios from "../config/axios";

const tokenAuth = token =>{
    if(token){
        clienteAxios.defaults.headers.common['X-Auth-Token'] = token;
    }else{
        delete clienteAxios.defaults.headers.common['X-Auth-Token'];
    }
}

export default tokenAuth