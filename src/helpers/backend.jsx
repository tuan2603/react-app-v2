import * as config from '../utils';
import {authHeader, authHeaderJSon} from '../helpers';

export function login(phone, password) {
    const configheader = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({phone, password}),
    };

    return fetch(`${config.apiUrl}/api/auth/sign-in-admin`, configheader)
        .then((response) => response.json())
        .then((responseJson) => responseJson);

}


export function getInfo() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/auth/get-info`, requestOptions)
        .then((response) => response.json())
        .then((responseJson) => responseJson);
}

export function getTemsHelper() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/terms`, requestOptions)
        .then((response) => response.json())
        .then((responseJson) => responseJson);
}

export function TemsHelper(body) {
    const requestOptions = {
        method: 'POST',
        headers: authHeaderJSon(),
        body: JSON.stringify(body),
    };

    return fetch(`${config.apiUrl}/api/terms`, requestOptions)
        .then((response) => response.json())
        .then((responseJson) => responseJson);
}
