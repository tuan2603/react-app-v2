import * as config from '../utils';
import {authHeader} from '../helpers';
import {authHeaderJSon} from "./index";

class pageApi {
    static requestHeaders() {
        return authHeader;
    }

    static getAllPages() {
        return fetch(`${config.apiUrl}/api/get-all-pages`)
            .then((response) => response.json())
            .then((responseJson) => responseJson);
    }

    static updatePage(body) {
        const requestOptions = {
            method: 'POST',
            headers: authHeaderJSon(),
            body: JSON.stringify(body),
        };

        return fetch(`${config.apiUrl}/api/update-terms`, requestOptions)
            .then((response) => response.json())
            .then((responseJson) => responseJson);
    }

    static createPage(body) {
        const requestOptions = {
            method: 'POST',
            headers: authHeaderJSon(),
            body: JSON.stringify(body),
        };

        return fetch(`${config.apiUrl}/api/insert-terms`, requestOptions)
            .then((response) => response.json())
            .then((responseJson) => responseJson);
    }

    static deletePage(body) {
        const requestOptions = {
            method: 'POST',
            headers: authHeaderJSon(),
            body: JSON.stringify(body),
        };

        return fetch(`${config.apiUrl}/api/delete-page`, requestOptions)
            .then((response) => response.json())
            .then((responseJson) => responseJson);
    }

}

export default pageApi;
