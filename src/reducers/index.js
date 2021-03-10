import { combineReducers } from "redux";
import CursoReproductor from "./cursoReproductorReducer";
import Instructor from "./instructorReducer";
export default combineReducers({
    cursoReproductor: CursoReproductor,
    instructor: Instructor
})