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
       console.log(addLocalStoreg , "Add product on localStoreg");
        localStorage.setItem( "products" , JSON.stringify(addLocalStoreg) )

        return {
          ...state,
          products: [...state.products, action.payload],

        };
      case "DELETE_PRODUCT":
        const deleteproducts =  state.products.filter((val) => val.id  !== action.payload.id );
        localStorage.setItem( "products" , JSON.stringify(deleteproducts) )
        console.log(deleteproducts , "this is a product reducer page console")
        return {
          ...state,
          products: deleteproducts,
        };

        case "GET_PRODUCT_DATA":
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