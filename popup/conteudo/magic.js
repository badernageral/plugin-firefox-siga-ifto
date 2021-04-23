
(function () {

	if (window.hasRun) {
		return;
	}
	window.hasRun = true;

	function mensagemRecebida(request, sender, sendResponse) {
		conteudos = request.mensagem;
		var lista = [];
		document.querySelectorAll("textarea").forEach(function (item, indice, array) {
			if (item.id.indexOf("conteudoMinistrado") > -1){
				item.innerHTML = "";
				lista.push(item);
			}
		});
		for (j = 0; j < conteudos.length; j++) {
			lista[j].innerHTML = conteudos[j];
		}
	}

	browser.runtime.onMessage.addListener(mensagemRecebida);

})();
