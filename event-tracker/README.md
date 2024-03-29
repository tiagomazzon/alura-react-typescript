# [Curso React: gerenciando estado com Recoil](https://cursos.alura.com.br/course/react-gerenciando-estado-recoil)

## Atenção

Rodar o comando no console para habilitar um emulador de API

`json-server --watch db.json -p 8080`

## Conteúdo 

Na aula 1, aprende-se como:
* Analisar e entender código que outras pessoas desenvolveram
  * O dia a dia de pessoas desenvolvedoras requer muita leitura de código, e não somente escrever coisas novas.
* Criar atoms
  * Átomos são as porções que compõem o estado compartilhado do recoil.
* Acessar atoms
  * Nós utilizamos o hook useRecoilValue para ter acesso à lista de eventos.
* Modificar atoms
  * Nós utilizamos o hook useSetRecoilState para adicionar novos itens à lista de eventos.

Na aula 2, aprende-se como:
* Remover eventos do estado
  * Existem várias formas de operar listas, e nós removemos utilizando o método filter. Se quiser se aprofundar mais nesses tipos de algoritmos, vale a pena conhecer os seguintes métodos:
    * indexOf: para obter um determinado índice de um elemento num array.
    * slice: para obter, a partir de um índice ou intervalo, uma quantidade N de elementos.
* Atualizar um evento específico
  * Vimos que a lista que recebemos é imutável, mas podemos definir uma nova lista reposicionando o evento alterado.
* Hook customizado
  * Criamos um hook reaproveitável e responsável por atualizar um evento, inclusive encapsulando o recoil.

Na aula 3, aprende-se como:
* Diminuir o acoplamento da aplicação
  * Ao extrair a comunicação com o recoil em hooks, estamos desacoplados da lib em si. Se trocarmos por qualquer outra solução, estaremos prontos. Só precisamos alterar os hooks, e não os componentes.
* Aumentar a coesão
  * Ao remover a responsabilidade de alterar o estado para os hooks, nossos componentes ficam mais coesos e não precisam se preocupar com as implementações relacionadas a manipular o estado.

Na aula 4, aprende-se como:
* Derivar estados com seletores
  * Mantendo assim a responsabilidade bem definida para cada parte do sistema.
* Adicionar funcionalidades de forma incremental
  * Primeiro, colocamos o filtro para funcionar. Na sequência, melhoramos a implementação e extraímos a lógica.

Na aula 5, aprende-se como:
* Criar seletores assíncronos
  * Integrando assim o recoil com uma API REST.
* Definir um valor inicial dinâmico para o átomo
  * Ao definir o seletor async como valor padrão para o átomo, todos os eventos iniciais passam a vir da API.
* Criar uma ferramenta de depuração
  * Agora fica mais simples de entender as mudanças no estado, uma vez que implementamos um componente que faz log cada vez que o estado é manipulado.

---
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
