import {Route, NavLink, HashRouter} from 'react-router-dom';
//import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Navbar from "./layouts/navbar";
import AdminLayout from "./layouts/Admin";
import Home from "./layouts/Home";
import Login from "./layouts/Login";
import Sidebar from "./layouts/sidebar";
import Registrar from "./layouts/Registrar";
import CursoAlta from "./layouts/CursoAlta";
import RegistroExitoso from "./layouts/RegistroExitoso";
import Dashboard from './components/dashboard';
import DashboardAlumno from './components/dashboardAlumno'
import RutaPrivada from "./components/rutas/RutaPrivada";
import CursoDetalles from "./components/cursoDetalles";
import Reproducir from "./components/reproductor/reproducir";

import AuthState from "./context/authentication/authState";
import AlertasState from "./context/alerta/alertaState";
import CursosState from "./context/cursos/cursosState";
import  tokenAuth  from "./config/token";
//redux
import {Provider} from "react-redux";
import store from "./store";

// revisar token
const token = localStorage.getItem('token');
if(token){
  tokenAuth(token);
}

function App() {
  //const [token, setToken] = useState(); 
  console.log(process.env.REACT_APP_BACKEND_URL);
  return (    
    <AuthState> 
      <AlertasState> 
    <HashRouter>  
      <Provider store={store}>
    <Navbar />  
    <div className="d-flex align-items-stretch">
        <Sidebar />    
                         
        <Route exact path="/" component={Home}/>
        <Route path="/admin" component={AdminLayout}/>             
        <Route path="/login" component={Login} />
        <Route path="/registrar" component={Registrar}/>
        <Route path="/registroexitoso" component={RegistroExitoso}/>
        <CursosState>
          <RutaPrivada exact path="/dashboardP" component={Dashboard}/>        
          <RutaPrivada exact path="/dashboardA" component={DashboardAlumno}/>        
          <Route path="/curso-alta" component={CursoAlta}/>
          <RutaPrivada exact path="/curso-detalles/:courseid" component={CursoDetalles}/>
          <RutaPrivada exact path="/curso-tomar/:courseid" component={Reproducir}/>
        </CursosState>
    </div>
    </Provider>
</HashRouter> 
</AlertasState>
</AuthState>

  );
}

export default App;
