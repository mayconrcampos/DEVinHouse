/**
 * Defina Classes, Objetos, Atributos e Métodos.
 */

/**
 * Classes: Na POO estas servem como se fossem moldes para modelarmos as características comuns de algum objeto. Tem tudo a ver com a classe de um objeto, aquela que contém todas as características que são comuns a todos os objetos que serão instanciados a partir dela.
Uma classe pessoa contém características comuns de pessoas. Nome, idade...

Atributos: Basicamente são estas características citadas acima declaradas dentro da classe, as quais representarão os dados a serem manipulados pelos métodos.

Métodos: São as ações que cada classe poderá realizar, seja ela na manipulação de seus atributos ou na interação com outras classes. Métodos são apenas funções, mas que são declaradas dentro de uma classe. Quando uma função é declarada fora de uma classe, são chamadas apenas de funções.

Objetos: Primeiramente definimos a classe, para depois instanciarmos um objeto, que nada mais é que a personificação de uma classe. Da classe Pessoa podemos instanciar uma ou muitas pessoas.
A instanciação de um objeto consiste na declaração de uma variável onde será atribuído uma nova instância da classe definida.
A variável pessoa1 recebe uma nova instância da classe Pessoa, onde o atributo nome receberá a string "Maycon", o atributo idade receberá o valor Inteiro 39.....

Para acessarmos estes atributos podemos utilizar a notação "." ponto.

let pessoa1 = new Pessoa("Maycon", 39)
console.log(pessoa1.nome)
// "Maycon"
console.log(pessoa1.idade)
// 39

Se declararmos uma segunda variável chamada pessoa2 e colocarmos novos valores para seus atributos.... Ambos irão coexistir dentro da aplicação sem um interferir nos valores do outro. São reconhecidamente entidades distintas dentro de sua aplicação, constituindo diferentes endereços de memória.

let pessoa2 = new Pessoa("Ariana", 36)
console.log(pessoa2.nome)
// "Ariana"
console.log(pessoa2.idade)
// 36

 */