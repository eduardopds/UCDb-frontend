import { API_URL }      from "../constants.js";
import { handlerError } from "./HTTPService.js";
import TokenService from './TokenService.js';

const apiUrl = API_URL + "/disciplines";

export async function searchSubjects(search) {
    let response = await fetch(`${apiUrl}/search?substring=${search}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    return handlerError(response);
}

export async function getSubject(id, idUser) {
    let response = await fetch(`${API_URL}/profiles/${id}/${idUser}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TokenService.getToken()}`
        }
    });

    return handlerError(response);
}
