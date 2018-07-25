import * as config from '../utils';

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

export function checklogin() {

    return fetch(`/api/get-info`)
        .then((response) => response.json())
        .then((responseJson) => responseJson);

}
