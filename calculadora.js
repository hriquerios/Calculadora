function insert(num)
// Essa função faz com que um número ou operação seja adicionada na tela toda vez que o botão correspondente a ele seja cliclado
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    // Numero + num = Mantem o número clicado e adiciona outro na frente
}

function clean()
// Essa função faz com que os valores exibidos na tela sejam apagados através da tecla C
{
    document.getElementById('resultado').innerHTML = "";
    // Apaga os numeros digitados na tela
}

function back()
// Essa função faz com que apenas o último valor digitado possa ser apagado da tela através da tecla Del
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    // Ele pega todos os carcateres que estão em tela e diminui o último inserido
}

function calcular()
// Quando clica no botão de igual ele chama a função calcular //
{
    var resultado = document.getElementById('resultado').innerHTML;
  
    if (resultado.includes('/0')) { // verifica se o usuário está tentando dividir por zero
        alert("Não é possível dividir por zero!");
        return;
    } else if (resultado === '') { // verifica se a tela está vazia
        document.getElementById('resultado').innerHTML = ""
    } else {
        var resultado = eval(resultado).toFixed(4); // Retorna apenas 4 casas decimais depois da vírgula
        document.getElementById('resultado').innerHTML = eval(resultado);
        // Eval = avalia a cadeia de caracteres e retorna o seu valor //
    }
}
