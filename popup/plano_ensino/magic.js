
(function () {

	if (window.hasRun) {
		return;
	}
	window.hasRun = true;

	function mensagemRecebida(request, sender, sendResponse) {
		datas = request.mensagem;
		var checkboxes = document.querySelectorAll("table .hasDatepicker");
		for (var i = 0; i < checkboxes.length; i++) {
			checkboxes[i].value = "";
		}
		for (j = 0; j < datas.length; j++) {
			checkboxes[j].value = datas[j];
		}
	}

	browser.runtime.onMessage.addListener(mensagemRecebida);

})();
