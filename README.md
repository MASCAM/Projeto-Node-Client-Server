Esse projeto é um treinamento simulando um banco de dados com cadastro de usuários num servidor (uma restful API) e uma interface front-end no navegador com servidor próprio. O cadastro de usuário é feito pela interface que envia o formulário com os dados para um servidor, que comunica com o servidor no qual o banco de dados está armazenado.

Para rodá-lo primeiro você precisa clonar ou baixar o repositório para o seu computador e baixar o node.js. 
Após isso abra a pasta client-server e realize um git bash ali e digite o comando:

npm install

Realize o mesmo procedimento para a pasta RESTful.

Realizando esses comandos serão instaladas todas as APIs e documentação necessária para rodar os servidores.
Você pode iniciar o servidor do db realizando um git bash na pasta RESTful e digitando o seguinte comando:

nodemon index

Abra o terminal do git na pasta client-server e abra o servidor com o comando a seguir:

npm start

Teste o funcionamento do servidor com a interface no google chrome pelo endereço:

http://localhost:3000/

Onde é possível realizar o cadastro, edição e remoção de usuários através de uma interface.
Para verificar os usuários cadastrado no banco de dados acesse o endereço:

http://localhost:4000/users


