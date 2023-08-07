export const addProduct = (product) => {
    console.log(product , "This is a add product action");

    return {
        type : "ADD_PRODUCT",
        payload : product
    }
}

export const deleteproduct = (product) => {
    console.log(product ,  "this is a product action page console");
    return {
        type : "DELETE_PRODUCT",
        payload : product
    }
}


export const getData = () => {
    return {
        type : "GET_DATA",
        payload: JSON.parse(localStorage.getItem("products"))
    }
}