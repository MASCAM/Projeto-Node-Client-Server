class Fetch {

    static get(url, params = {}) {

        return Fetch.request('GET', url, params);

    } //fechando get

    static post(url, params = {}) {

        return Fetch.request('POST', url, params);

    } //fechando post

    static put(url, params = {}) {

        return Fetch.request('PUT', url, params);

    } //fechando put

    static delete(url, params = {}) {

        return Fetch.request('DELETE', url, params);

    } //fechando delete

    static request(method, url, params = {}) { //método para passar as requisições ajax para o servidor com o db

        return new Promise((resolve, reject) => {

            let request;
            switch (method.toLowerCase()) {

                case 'get':
                    request = url;
                    break;
                default:
                    request = new Request(url, {

                        method,
                        body: JSON.stringify(params),
                        headers: new Headers({
        
                            'Content-Type':'application/json',
        
                        }),
        
                    });

            }
            fetch(request).then(response => {

                response.json().then(json => {

                    resolve(json);

                }).catch(e => {

                    reject(e);

                });

            }).catch(e => {

                reject(e);

            });

        });

    }

} //fechando request