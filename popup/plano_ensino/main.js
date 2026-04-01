
document.addEventListener("click", function (e) {
	
	if(e.target.id=="botao"){
		var lista = document.getElementById("lista").value.trim().split("\n");
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