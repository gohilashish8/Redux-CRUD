export const AddStudent = (data) => {
    return {
        type : "ADD_STUDENT",
        payload : data
    }
}
export const updateStudent = (studentData) => {
    console.log(studentData);
    return {
        type : "UPDATE_STUDENT",
        payload : studentData
    }
}
export const deleteStudent = (studentid) => {
    console.log(studentid);
    return {
        type : "DELETE_STIDENT",
        payload : studentid
    }
}
export const getData = () => {
    return {
        type : "GET_DATA",
        payload: JSON.parse(localStorage.getItem("data"))
    }
}


