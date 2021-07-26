email = prompt("entre com o e-mail")

  var resultado = email()

 function email(){
    
  if(document.forms[0].email.value ==" "){

    alert("Informe um e-mail:");
    return false;
  }
}