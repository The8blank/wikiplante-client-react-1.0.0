import axios from "axios";


export const GET_USER = "GET_USER";

export const getUser = (uid) => {
    return (dispatch) => {
        return axios
            .get(`http://localhost:8080/api/user/${uid}`)
            .then((res) => {
                dispatch({type : GET_USER, payload : res.data})
            })
            .catch((err) => {
                console.log('bug');
                console.log(err)
            })
    }
}