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

export function getAllCats() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/category`, requestOptions)
        .then((response) => response.json())
        .then((responseJson) => responseJson);
}

export function updateCat(body) {
    const requestOptions = {
        method: 'POST',
        headers: authHeaderJSon(),
        body: JSON.stringify(body),
    };

    return fetch(`${config.apiUrl}/api/category/update`, requestOptions)
        .then((response) => response.json())
        .then((responseJson) => responseJson);
}

export function deleteCat(body) {
    const requestOptions = {
        method: 'POST',
        headers: authHeaderJSon(),
        body: JSON.stringify(body),
    };

    return fetch(`${config.apiUrl}/api/category/delete`, requestOptions)
        .then((response) => response.json())
        .then((responseJson) => responseJson);
}

export function updateCatImage(body) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: body,
    };

    return fetch(`${config.apiUrl}/api/category/update-image`, requestOptions)
        .then((response) => response.json())
        .then((responseJson) => responseJson);
}

export function createCat(body) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: body,
    };

    return fetch(`${config.apiUrl}/api/category`, requestOptions)
        .then((response) => response.json())
        .then((responseJson) => responseJson);
}

export function getTemsHelper(body) {
    const requestOptions = {
        method: 'POST',
        headers: authHeaderJSon(),
        body: JSON.stringify(body),
    };

    return fetch(`${config.apiUrl}/api/get-terms`, requestOptions)
        .then((response) => response.json())
        .then((responseJson) => responseJson);
}

export function updateHelper(body) {
    const requestOptions = {
        method: 'POST',
        headers: authHeaderJSon(),
        body: JSON.stringify(body),
    };

    return fetch(`${config.apiUrl}/api/update-terms`, requestOptions)
        .then((response) => response.json())
        .then((responseJson) => responseJson);
}

export function insertHelper(body) {
    const requestOptions = {
        method: 'POST',
        headers: authHeaderJSon(),
        body: JSON.stringify(body),
    };

    return fetch(`${config.apiUrl}/api/insert-terms`, requestOptions)
        .then((response) => response.json())
        .then((responseJson) => responseJson);
}
