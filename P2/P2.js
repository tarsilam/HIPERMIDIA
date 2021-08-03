<body>

<h2> Java new Date() </h2>

<input id="data_chegada" type="date">
<input id="data_saida" type="date" onchange="verificar();">

</body>

function verificar(){

    var data_chegada = new Date(document.getElementById ("data_chegada").value);
    var data_saida = new Date(document.getElementById("data_saida").value);
    var milesimos = Math.abs(data_chegada.getTime() - data_saida.getTime());
    var dias = milesimos / (1000 * 3600 * 24);
    alert(dias);

    dias /= 1000; // Milisegundos para Segundos
    dias /= 86400; // segundos para dias
    dias = Math.round(dias);

    if(saida.value < chegada.value){
    document.getElementById(c.id).style.borderColor = "red";
    document.getElementById(s.id).style.borderColor = "red";
    alert("Data da saída está antes da data de chegada!");
    }
    
    else if(quarto_single.value == pessoas.value){
    alert("Total a pagar: R$ " + 139 * dias + ",00");
    }
    else if(quarto_double.value == pessoas.value){
    alert("Total a pagar: R$ " + 220 * dias + ",00");
    }
    else if(quarto_triplo.value == pessoas.value){
    alert("Total a pagar: R$ " + 340 * dias + ",00");
    }
    else if(pessoas.value > quarto_single.value){
    pessoas = 30*(pessoas.value - quarto_single.value);
    total = (139 * quarto_single.value * dias) + pessoas;
    alert("Total a pagar: R$ " + total * dias + ",00");
    }
    
    else if(pessoas.value > quarto_double.value){
    pessoas = 30*(pessoas.value - quarto_double.value);
    total = (220 * quarto_double.value * dias) + pessoas;
    alert("Total a pagar: R$ " + total * dias + ",00");
    }

    else if(pessoas.value > quarto_triplo.value){
    pessoas = 30*(pessoas.value - quarto_triplo.value);
    total = (340 * quarto_triplo.value * dias) + pessoas;
    alert("Total a pagar: R$ " + total * dias + ",00");
    }
}

 function validarForm(){

  flagError = "";
  nome = env_form.nome.value;
  telefone = env_form.telefone.value;
  data_chegada = env_form.data_chegada.value;
  data_saida = env_form.data_saida.value;
    
  if( verificarFormVazio() )
    flagError = "Formulário não está completamente preenchido.\n";
  if( apenasNumeros() )
    flagError += "Preencha os campos telefone apenas com números.\n";
  if( apenasLetra() )
    flagError += "Preencha os campos Nome apenas com letras.\n";
  if( flagError != "" ) {
    window.alert(flagError);
  }
  else {
    document.env_form.submit();
  }
}

 function verificarFormVazio(){

  if(nome === ""){
    return 1;
  } 
  else if (data_chegada === ""){
          return 1;
  }
    else if (data_saida === ""){
             return 1;
    }
    return 0;
}

 function apenasLetra(){
  
  regAlfa = /[^a-zA-Z_-ç`´^~]/;
  reg = /[0-9]/;
  if(reg.test(nome)){
    return 1;
  } 
  return 0;
}