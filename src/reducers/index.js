import { combineReducers } from "redux";
import adicionalReducer from "./adicionalReducer";
import CursoReproductor from "./cursoReproductorReducer";
import Instructor from "./instructorReducer";
export default combineReducers({
    cursoReproductor: CursoReproductor,
    instructor: Instructor,
    adicional: adicionalReducer
})