class HttpRequest {

    static get(url, params = {}) {

        return HttpRequest.request('GET', url, params);

    } //fechando get

    static post(url, params = {}) {

        return HttpRequest.request('POST', url, params);

    } //fechando post

    static put(url, params = {}) {

        return HttpRequest.request('PUT', url, params);

    } //fechando put

    static delete(url, params = {}) {

        return HttpRequest.request('DELETE', url, params);

    } //fechando delete

    static request(method, url, params = {}) { //método para passar as requisições ajax para o servidor com o db

        return new Promise((resolve, reject) => {

            let ajax = new XMLHttpRequest(); //criando nova requisição XML
            ajax.open(method.toUpperCase(), url); //chamando o método GET  no endereço /users
            ajax.onerror = event => {

                reject(e);

            }
            ajax.onload = event => { //evento a ser realizado quando o ajax carregar
    
                let obj = {};
                try {
    
                    obj = JSON.parse(ajax.responseText);
    
                } catch (e) {
    
                    reject(e);
                    console.error(e);
    
                }
                resolve(obj);
    
            };
            ajax.setRequestHeader('Content-Type', 'application/json'); //para especificar que estamos enviando um json
            ajax.send(JSON.stringify(params)); //para enviar os parâmetros da solicitação para o db

        });

    }

} //fechando request