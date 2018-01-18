import { BASE_URL } from "../Constants";
import axios from "axios";

class CommService {

    getRequest(url, getDataHandler, errorHandler) {
        const requestUrl = `${BASE_URL}/${url}`;

        axios({
            method: "GET",
            url: requestUrl,
            responseType: "json"
        })
            .then(result => getDataHandler(result))
            .catch(error => errorHandler(error));
    }

    deleteRequest(url, id, deleteHandler, errorHandler) {

        const requestUrl = `${BASE_URL}/${url}/${id}`;

        axios.delete(requestUrl)
            .then(response => deleteHandler(response))
            .catch(error => errorHandler(error));
    }


    postRequest(url, data, postDataHandler, errorHandler) {
        const requestUrl = `${BASE_URL}/${url}`;

        axios({
            method: "POST",
            url: requestUrl,
            data
        })
            .then(result => postDataHandler(result))
            .catch((error) => errorHandler(error));
    }

    // putRequest(url, data, putDataHandler, putErrorHandler) {
    //     const requestUrl = `${BASE_URL}/${url}`;


    //     axios({
    //         method: "PUT",
    //         url: requestUrl,
    //         data: data,

    //     })
    //         .then(result => {
    //             return putDataHandler(result);
    //         })
    //         .catch((error) => {
    //             putErrorHandler(error);
    //         });
    // }



}

export const commService = new CommService();