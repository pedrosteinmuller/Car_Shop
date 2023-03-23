<h1 align="center">Projeto Car Shop API</h1>

O projeto Car Shop é uma API TypeScript que gerencia uma concessionária de veículos, utilizando a arquitetura MSC e os princípios de POO. A aplicação utiliza o ODM Mongoose para se conectar com um banco de dados MongoDB e possui operações CRUD para gerenciar veículos e concessionárias.

Durante o desenvolvimento do projeto, o objetivo é exercitar o conhecimento dos pilares da Programação Orientada a Objetos, tais como Herança, Abstração, Encapsulamento e Polimorfismo, além de aplicar os conceitos de Composição e Interfaces. O projeto também envolve a implementação de Classes, Instâncias, Atributos, Métodos e Objetos em TypeScript.

A API permite a criação, leitura, atualização e exclusão de veículos e concessionárias, bem como a busca por veículos de acordo com seus atributos, como marca, modelo e ano. Para a realização dessas operações, o projeto utiliza as funções do banco de dados MongoDB, garantindo a escalabilidade e a manutenção da aplicação.

<h2>Stack utilizada</h2>

Back-end: `Node.Js`, `TypeScript`, `MongoDB`, `Mongoose`, `Docker`

<h2>🐋 Rodando no Docker</h2>

1. Clone o repositório em sua máquina local.

2. Certifique-se de ter o docker-compose instalado.

3. Crie um aquivo `.env` e cole esse código `MONGO_DB_URL=mongodb://localhost:27017/CarShop`.

4. Execute o comando `docker-compose up -d`.

5. Acesse o endereço http://localhost:3001/ para acessar a API.

⚠️ **Atenção** ⚠️ Caso opte por utilizar o Docker, TODOS os comandos disponíveis no package.json (npm start, npm test, npm run dev, ...) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando docker exec citado acima.

⚠️ **Atenção** ⚠️ O git dentro do container não vem configurado com suas credenciais. Faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

⚠️ **Atenção** ⚠️ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

⚠️ **Atenção** ⚠️ Caso você esteja usando macOS e ao executar o docker-compose up -d se depare com o seguinte erro:

```typescript
The Compose file './docker-compose.yml' is invalid because:
Unsupported config option for services.db: 'platform'
Unsupported config option for services.node: 'platform'
```

<details>
  <summary><strong>🤷🏽‍♀️ Foram encontradas 2 possíveis soluções para este problema:</strong></summary><br />

- Você pode adicionar manualmente a option platform: linux/amd64 no service do banco de dados no arquivo docker-compose.yml do projeto, mas essa é uma solução local e você deverá reproduzir isso para os outros projetos.

- Você pode adicionar manualmente nos arquivos .bashrc, .zshenv ou .zshrc do seu computador a linha export DOCKER_DEFAULT_PLATFORM=linux/amd64, essa é uma solução global. As soluções foram com base nesta fonte.
</details>

<h1 align="center">Documentação da API</h1>

### Registrar um carro.

```http
  POST /cars
```

- O corpo da requisição poderá seguir o formato abaixo:

```json
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.99,
  "doorsQty": 4,
  "seatsQty": 5
}
```

| Parâmetro  | Tipo       | Descrição                                                                       |
| :--------- | :--------- | :------------------------------------------------------------------------------ |
| `model`    | `string`   | **Obrigatório no body**. Modelo do veículo para cadastrado no banco de dados   |
| `year`     | `number`   | **Obrigatório no body**. Ano do veiculo para cadastrado no banco de dados       |
| `status`   | `booleano` | Status do veiculo para a venda para cadastro no banco de dados                |
| `buyValue` | `number`   | **Obrigatório no body**. Valor da venda para cadastro no banco de dados       |
| `doorsQty` | `number`   | **Obrigatório no body**. Quantidade de portas para cadastro no banco de dados |
| `seatsQty` | `number`   | **Obrigatório no body**. Quantidade de acentos para cadastro no banco de dados |

### Buscar todos os carros.

```http
  GET /cars
```

### Procurar um carro pelo id.

```http
  GET /cars/:id
```

### Registrar uma moto.

```http
  POST /motorcycles
```

- O corpo da requisição poderá seguir o formato abaixo:

```json
{
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true,
  "buyValue": 30.0,
  "category": "Street",
  "engineCapacity": 600
}
```

| Parâmetro        | Tipo       | Descrição                                                                      |
| :--------------- | :--------- | :----------------------------------------------------------------------------- |
| `model`          | `string`   | **Obrigatório no body**. Modelo do veiculo para cadastro no banco de dados   |
| `year`           | `number`   | **Obrigatório no body**. Ano do veiculo para cadastro no banco de dados      |
| `status`         | `booleano` | Status do veiculo para a venda para cadastro no banco de dados               |
| `buyValue`       | `number`   | **Obrigatório no body**. Valor da venda para cadastro no banco de dados      |
| `category`       | `string`   | **Obrigatório no body**. Categoria da moto para cadastro no banco de dados   |
| `engineCapacity` | `number`   | **Obrigatório no body**. Capacidade do motor para cadastro no banco de dados |

- Tipos de categorias: `Street`, `Custom`, `Trail`.

### Buscar todos as motos.

```http
  GET /motorcycles
```

### Procurar uma moto pelo id.

```http
  GET /motorcycles/:id
```

Dúvidas, sugestões, críticas? Entre em contato comigo:

E-mail: pedrosteinmuller100@gmail.com e/ou pedrosteinmuller10105@hotmail.com

LinkedIn: https://www.linkedin.com/in/pedrosteinmuller/
