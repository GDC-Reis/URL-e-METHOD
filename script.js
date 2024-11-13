// URL e METHOD
// Uma requisição HTTP é feita através de uma URL.
// O método padrão é o GET, mas existem outros como POST, UPDATE, DELETE, HEADER.

const url = 'https://jsonplaceholder.typicode.com/posts/';
const options = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body: '{"titulo": "JavaScript"}'
}

fetch(url, options)
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
    });
;


// GET
// GET irá puxar as informações da URL. 
// Não é necessário informar que o método é GET , pois este é o padrão.

fetch(url, {
    method: 'GET'
})
    .then((response) => response.json())
    .then((r) => console.log(r));
;


// POST
// POST irá criar uma nova postagem, 
// utilizando o tipo de conteúdo especifico no headers e utilizando o conteúdo do body.

fetch(url, options)
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
    });
;


// PUT
// PUT irá atualizar o conteúdo do URL com o que for informado no conteúdo do body.

const putUrl = 'https://jsonplaceholder.typicode.com/posts/1/';

fetch(putUrl, {
    method: 'PUT',
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body: '{"titulo": "JavaScript"}'
})
    .then((r) => r.json())
    .then((r) => console.log(r));
;


// HEAD
// HEAD puxa apenas os headers.
// É uma requisição mais leve pois não puxa o body.

const url2 = 'https://jsonplaceholder.typicode.com/posts/1/';

fetch(url, {
    method: 'HEAD',
})
    .then((response) => {
        response.headers.forEach(console.log);
        console.log(response.headers.get('Content-Type'));
    })