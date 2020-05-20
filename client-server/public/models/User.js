class User {

    constructor(name, gender, birth, country, email, password, photo, admin) {

        this._id;
        this._name = name;
        this._gender= gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date();

    }

    get id() {

        return this._id;

    }

    get register() {

        return this._register;

    }

    get name() {

        return this._name;

    }

    get gender() {

        return this._gender;

    }

    get birth() {

        return this._birth;

    }

    get country() {

        return this._country;

    }

    get email() {

        return this._email;

    }

    get password() {

        return this._password;

    }

    get photo() {

        return this._photo;

    }

    get admin() {

        return this._admin;

    }

    set photo(value) {

        this._photo = value;

    }

    loadFromJSON(json) { //método para carregar os valores de um JSON para dentro do objeto user

        for (let name in json) {

            switch(name) {

                case '_register':
                    this[name] = new Date(json[name]);
                    break;
                default:
                    if (name.substring(0, 1) === '_') { //se o primeiro caractere do valor do campo for "_" passa pro objeto
                        
                        this[name] = json[name];

                    }
    
            }

        }

    } //fechando o loadFromJSON()

    static getUsersStorage() { //método q retorna todos os usuários ja cadastrados na sessão

        return Fetch.get('/users');

    } //fechando o getUsersStorage()

    toJSON() { //método para converter o objeto para JSON

        let json = {};
        Object.keys(this).forEach(key => { //para passar cada atributo do objeto para o JSON criado

            if (this[key] !== undefined) {
                
                json[key] = this[key];

            }

        });
        return json;

    } //fechando método toJSON()

    save() {

        return new Promise((resolve, reject) => { //promessa para inserir os dados no db

            let promise;
            if (this.id) {
    
                promise = Fetch.put(`/users/${this.id}`, this.toJSON()); //chama o httrequest para put
    
            } else {
    
                promise = Fetch.post(`/users`, this.toJSON()); //chama o httrequest para post e armazena na promessa
    
            }
            promise.then(data => { //para tratar os dados retornados da promessa e gravar no objeto
    
                this.loadFromJSON(data);
                resolve(this);
    
            }).catch(e => { //caso tenha um erro

                reject(e);

            });

        });
    
    } //fechando o save()

    remove() {

        return Fetch.delete(`/users/${this.id}`);

    } //fechando o remove

}