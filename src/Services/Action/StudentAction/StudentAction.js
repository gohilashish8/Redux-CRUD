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
export const getStudentData = () => {
    return {
        type : "GET_STUDENT_DATA",
        payload: JSON.parse(localStorage.getItem("data"))
    }
}


