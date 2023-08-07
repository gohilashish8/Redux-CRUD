
import {combineReducers} from "redux"
import StudentReducer from "./studentReducer/StudentReducer";
  import productReducer from './ProductReducer/productReducer';
const rootReducer = combineReducers({
    StudentReducer ,
    productReducer
  });

  export default rootReducer
