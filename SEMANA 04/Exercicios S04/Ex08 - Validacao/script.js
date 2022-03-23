

function cpfmask(i){
    var v = i.value;

    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }

    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
    
} 

function fonemask(i){
    var v = i.value;


    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
        i.value = v.substring(0, v.length-1);
        return;
    }

    i.setAttribute("maxlength", "13");

    if(v.length == 2){
        i.value += " ";
    }else if(v.length == 8){
        i.value += "-";
    }
}

function limparCadastro(){
    nome.value = ""
    cpf.value = ""
    endereco.value = ""
    celular.value = ""
    nomeshow.innerText = ``
    cpfshow.innerText = ``
    enderecoshow.innerText = ``
    celularshow.innerText = ``
}


  var nome = document.getElementById("nome")
  var cpf = document.getElementById("cpf")
  var endereco = document.getElementById("endereco")
  var celular = document.getElementById("celular")

  var nomeshow = document.getElementById("nomeshow")
  var cpfshow = document.getElementById("cpfshow")
  var enderecoshow = document.getElementById("enderecoshow")
  var celularshow = document.getElementById("celularshow")

  var btn = document.getElementById("btn")
  

  btn.addEventListener("click", () => {
    var cliente = new Cliente(nome.value, cpf.value, endereco.value, celular.value)

    if(cliente.validaCPF(cpf.value)){
        nomeshow.innerText = `Nome: ${cliente.getNome()}`
        cpfshow.innerText = `CPF ${cliente.getCPF()} Validado.`
        enderecoshow.innerText = `Endereço: ${cliente.getEndereco()}`
        celularshow.innerText = `Nº Celular: ${cliente.getNumeroCelular()}`
    }else{
        alert(`CPF ${cpf.value} Inválido`)
        limparCadastro()

    }
  })