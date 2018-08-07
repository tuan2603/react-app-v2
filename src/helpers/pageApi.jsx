import * as config from '../utils';
import {authHeader} from '../helpers';

class pageApi {

    static requestHeaders() {
        return authHeader;
    }

    static getAllPages() {
        const headers = this.requestHeaders();
        const request = new Request(`${config.apiUrl}/api/get-all-pages`, {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static updatePage(body) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        const request = new Request(`${config.apiUrl}/api/update-terms`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body),
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static createPage(body) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        const request = new Request(`${config.apiUrl}/api/insert-terms`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body),
        });


        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static deletePage(body) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        const request = new Request(`${config.apiUrl}/api/delete-page`, {
            method: 'POST',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default pageApi;