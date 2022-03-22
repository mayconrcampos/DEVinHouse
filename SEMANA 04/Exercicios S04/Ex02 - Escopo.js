/**
 * Defina Var, Let e Const, Escopo e em quais escopos as variáveis se localizam e
defina quais usar para cada cenário.
 */

/**
 * var - Foi a primeira forma de declarar variáveis que existiu no javascript. Sua visibilidade é global quando declarada no escopo global, mas quando declarada dentro de função sua visibilidade abrange toda a função,

let - É a forma mais nova de se declarar variáveis em Javascript, e a sua maior diferença de var, é que sua visibilidade é de bloco. Ou seja, se for declarada no escopo global ela não é visível dentro de funções ou blocos, e vice versa. Se for declarada dentro de blocos, sua visibilidade se limita dentro do bloco.

const - assim como let, possui visibilidade de bloco, porém como sendo uma constante, ela não pode ter seu conteúdo reatribuido ou alterado no decorrer da execução do código. Ela quebra aquela característica do Javascript onde é dinamicamente tipada, ou seja, com uma const, seu tipo não pode ser reatribuido após sua declaração. Porém quando atribuimos arrays ou objetos a uma const, podemos manipular seu conteúdo normalmente no decorrer da execução do código.

VAR somente foi mantida na linguagem por questões de retrocompatibilidade com versões anteriores, porém nos dias de hoje é a menos utilizada por ter sua visibilidade global, e por isto podendo gerar problemas como reatribuições de valor fora do controle do programador, e depois de difícil inspeção para correção.

LET - é hoje a mais utilizada, seguindo a mesma visibilidade de bloco de const, porém podemos reatribuir seus tipos e valores livremente, mas sem o perigo disto ocorrer de forma indiscriminada em outro trecho do código, pois ela estará longe daquele escopo.

CONST - junstamente com let, é a mais usada quando sabemos que seu conteúdo não sofrerá mudanças no decorrer da execução do código. Uma vez atribuída seu tipo e valor, estes serão utilizados como leitura para enviarmos dados para API's, ou receber dados de API's direto para const. Geralmente usamos dentro de FETCH, ou requisições AJAX ou Axios enviando objetos atribuídos a const.

 */