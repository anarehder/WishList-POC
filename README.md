# WishList-POC

### Esta API foi criada para uso pessoal, onde é possível criar uma lista de filmes que você deseja assistir, colocando se realmente já foi visto e caso tenha sido você pode adicionar estrelas e um comentário para se lembrar detalhes como se você gostou, se deseja assistir novamente, etc.

### Para isso ao utiliza-la você deve utilizar as configurações para criar um banco local nas configurações abaixo no seu arquivo .env na raiz do projeto:
<br>
    DB_USER= seu usuario no banco <br>
    DB_PASSWORD= sua senha do banco <br>
    DB_HOST= endereco do banco <br>
    DB_PORT= porta do banco <br>
    DB_NAME= nome do banco <br>
<br>
    DATABASE_URL=postgresql://POSTGRES_USERNAME:POSTGRES_PASSWORD@POSTGRES_HOST:POSTGRES_PORT/POSTGRES_DATABASE?schema=public
<br>

### Por se tratar de um item para uso pessoal não há distinção de usuários, só há como ter 1 review por filme feito e também apenas um nome por filme, não há como colocar filmes de mesmo nome.

## FILMES:

**GET -> /movies** - lista todas os filmes inseridos no banco no formato abaixo.

Movie = { <br>
  - id: number;<br>
  - name: string; <br>
  - streaming: string; <br>
  - genre: string; <br>
  - status: boolean;<br>
  
};

<br>

**GET -> /moviesFull** - lista todos os filmes junto com seus reviews inseridos no banco no formato abaixo.

FullMovie = { <br>
  - id: number;<br>
  - name: string; <br>
  - streaming: string; <br>
  - genre: string; <br>
  - status: boolean;<br>
  - stars: number;<br>
  - comments: string;
  
};

<br>

**GET -> /movies/number** - retorna o total de filmes já adicionados ao banco.

**PUT -> /movies/watched/:id** - troca o status do filme com o id desejado para true (assistido).

**POST -> /movies** - insere no banco o filme que você deseja assistir, para isso o body deve ter formato:

body = { <br>
  - name: string; <br>
  - streaming: string; <br>
  - genre: string; <br>
 
};


O status é criado automaticamente como falso.

<br>

**PUT -> /movies/:id** - edita as informações do filme com o id desejado, deve receber um body contendo todos os dados como ao criar um novo filme.

**DELETE -> /movies/:id** - deleta do banco o filme com o id desejado.

## REVIEWS:

**GET -> /moviesReview** - lista todos os reviews inseridos no banco no formato abaixo.

MovieReview = { <br>
  - id: number; <br>
  - movie_id: number; <br>
  - stars: number; <br>
  - comments: string; <br>
 
};

<br>


**GET -> /moviesReview/get/:id** - lista todos o review inserido no banco para o id do filme desejado.

**POST -> /moviesReview/create/:id** - insere no banco o reviwe do filme que você já tenha assistido, caso você nao tenha adicionado como assistido ainda o proprio endpoint já altera o status para true nesse momento. O body enviado deve ter formato abaixo e as estrelas devem ser numeros inteiros entre 1 e 5.


CreateMovieReview = { <br>
  - stars: number; <br>
  - comments: string; <br>
 
};

<br>


**PUT -> /moviesReview/edit/:id** - edita as informações da review com o id desejado, deve receber um body contendo todos os dados como ao criar uma nova review.



### SUCESSOS!

- Para as requisicoes GET de filmes e reviews será retornado status OK - 200 no caso de existirem dados a ser retornados.

- Para as requisições PUT de filmes e reviews será retornado o status ACCEPTED - 202 quando os itens forem alterados com sucesso.

- Para as requisições POST de filmes e reviews será retornado o status CREATED - 201 quando os itens forem adicionados ao banco com sucesso.



### ERROS!

- Para todas as requisições em caso de não existir nada cadastrado no banco ainda é retornada a mensagem: There are no items yet!

- Quando o valor for inválido, id inexistente no banco por exemplo, e não for possivel encontra-lo no banco será retornada a mensagem: No result for this search!

- Se não for possivel editar ou adicionar um filme ou review será retornada a mensagem: The movie was not inserted/edited! / The movie review was not inserted/edited! / It was not possible to mark as watched!

- Caso você tente criar um filme com um nome já existente no banco será retornada a mensagem: This item already exists!

- Para dados inválidos ou outras validações existentes serão retornados os erros contendo os detalhes.

