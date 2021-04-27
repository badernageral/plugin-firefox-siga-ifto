
document.addEventListener("click", function (e) {
	
	if(e.target.id=="botao"){
		var lista = [];
		document.getElementById("lista").value.trim().split("\n").forEach(function (item, indice, array) {
			lista.push(item.trim().split(/\s+/));
		});
		for (j = 0; j < lista.length; j++) {
			if(lista[j][1]>10){
				alert("Você não pode informar notas maiores que 10!");
				return;
			}
			if(lista[j][2]!=undefined){
				if (lista[0][2] > 10) {
					alert("Você não pode informar notas maiores que 10!");
					return;
				}
			}
		}
		let executando = browser.tabs.executeScript({
			file: "magic.js"
		});
		executando.then((resultado)=>{
			var abaAtual = browser.tabs.query({
				active: true,
				currentWindow: true
			});
			abaAtual.then((abas)=>{
				browser.tabs.sendMessage(abas[0].id, {
					mensagem: lista
				});
			});
		});
	}

});