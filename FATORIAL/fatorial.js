valor = prompt('Entre com um valor')
var fator = fatorial()

 function fatorial ()
{
	
	var i=1
	var resultado = 1
	
	for(i=1; i<=valor; i++){
		
		 resultado = resultado  * i
	}	
	
	alert(resultado)

}