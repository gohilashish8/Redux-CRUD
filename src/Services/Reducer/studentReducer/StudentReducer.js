const initialState = {
    students: []
  };

  const studentReducer = (state = initialState, action) => {
    console.log();
    switch (action.type) {
      case "ADD_STUDENT":

       const addLocalStoreg = [
          ...state.students,
            action.payload
       ]
        localStorage.setItem( "data" , JSON.stringify(addLocalStoreg) )
        return {
          ...state,
          students: [...state.students, action.payload],
        };
      case "UPDATE_STUDENT":
         const extra =  state.students.map((val) => val.id === action.payload.id ? action.payload : val )
         localStorage.setItem( "data" , JSON.stringify(extra) )

        return {
          ...state,
          students:extra
        }
      case "DELETE_STIDENT":

         const deletedStudent =  state.students.filter((val) => val.id  !== action.payload )
         localStorage.setItem( "data" , JSON.stringify(deletedStudent) )

        return {
          ...state,
          students:deletedStudent
        }
      case "GET_DATA":


        return {
          ...state,
          students:action.payload
        }

      default:
        return state;
    }
  };

  export default studentReducer;