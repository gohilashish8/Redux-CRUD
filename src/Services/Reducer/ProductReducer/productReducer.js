const initialState = {
    products: [] ,

  };

  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_PRODUCT":
        const addLocalStoreg = [
          ...state.products,
            action.payload
       ]
        localStorage.setItem( "products" , JSON.stringify(addLocalStoreg) )

        return {
          ...state,
          products: [...state.products, action.payload],

        };
      case "DELETE_PRODUCT":
        const deleteproducts =  state.products.filter((val) => val.id  !== action.payload.id );
        localStorage.setItem( "data" , JSON.stringify(deleteproducts) )
        console.log(deleteproducts , "this is a product reducer page console")
        return {
          ...state,
          products: deleteproducts,
        };

        case "GET_DATA":
          console.log(action.payload , "dffdffddfddd" );
        return {
          ...state,
          products:action.payload
        }
      default:
        return state;
    }
  };

  export default productReducer;