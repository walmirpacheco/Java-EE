/**
 * Validar campos obrigatorios
 * @author Walmir Fernandes
 */
 function validar(){
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	if (nome === "") {
		alert('[Erro!] Preencha o campo Nome!')
		frmContato.nome.focus()
		return false
	} else if (fone === "") {
		alert('[Erro!] Preencha o campo Fone!')
		frmContato.fone.focus()
		return false		
	} else {
		document.forms["frmContato"].submit()
	}
}