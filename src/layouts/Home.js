import React, { useState, useEffect } from "react";
import { NavLink} from 'react-router-dom';
import '../assets/css/home.css';
function Home() {
    const [popularCourses, setPopularCourses] = useState([]);
    //const [loading, setLoading] = useState(true);

    // Cargar una frase
  useEffect( () => {
    consultarAPI()
  }, []);  

  const consultarAPI = async () => {
    const api = await fetch(process.env.REACT_APP_BACKEND_URL +'cursos?page=0');
    const frase = await api.json()
    console.log(frase);
    setPopularCourses(frase);
  }

    var courseList = [];
    for(let i=0; i < popularCourses.length; i++){
      if(popularCourses[i].poster===""){
        var poster ="";
        poster = require(`../assets/img/course-1.png`)
        poster = poster.default;
      }else if(popularCourses[i].poster.startsWith("http")){
        poster = popularCourses[i].poster;
        //console.log(poster);
      }else{
        poster = require(`../assets/img/${popularCourses[i].poster}`)
        poster = poster.default;
      }
        
        console.log(poster);
        courseList.push(
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 pl-lg-0" key={"curso"+i}>
            <div className="card mb-3">
              <div className="card-body">
                <div className="">
                  
                <div className="section section-b rel">
                    <h2 className="title s24 fontb"><span className="fontn"></span></h2>
                    <div className=" courses rel flex">
            <NavLink to={"/course/"+ popularCourses[i].idCurso} className="course rel" key = {"popular-course"+ i}>
                <div className="block rel" style={{
                    background: "#e2e2e2 no-repeat center url("+poster+")"
                }}>
                    <div className="user abs aic flex" >
                        <div className="pic">
                            <img src={popularCourses[i].avatar}  className="bl" alt="avatar user"/>
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb cfff">{popularCourses[i].nombre}</h2>
                            <h2 className="s13 uname fontn cfff">@{popularCourses[i].apellidoPaterno}</h2>
                        </div>
                    </div>

                    <div className="dura abs">
                    <h2 className="s15 name fontb cfff">{popularCourses[i].duracion}</h2>
                    </div>

                    <div className="course-title abs">
                    <h2 className="s15 name fontb cfff">{popularCourses[i].nombreCurso}</h2>
                    </div>
                </div>
            </NavLink>
            </div>
                    </div>

                    </div>
                  </div>
                </div>
              </div>
        );
    }

    return(
        <div className="page-holder w-100 d-flex flex-wrap">
        <div className="container-fluid px-xl-5">
        <section className="py-5">
            <div className="row mb-4">             
                            {courseList}             
            </div>
          </section>
          </div>
          </div>        
    )
}

export default Home;