/**
 *   Confirmação de exclusao de um contato
 *   @author Walmir Fernandes
 *   @param idcon
 */
 
 function confirmar(idcon){
	let resposta = confirm("Verifique se é este contato que você deseja excluir!")
	if (resposta === true){		
		window.location.href = "delete?idcon=" + idcon
	}
}