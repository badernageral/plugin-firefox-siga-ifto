
(function () {

	if (window.hasRun) {
		return;
	}
	window.hasRun = true;

	function mensagemRecebida(request, sender, sendResponse) {
		alunos = request.mensagem;
		var alunos_nao_encontrados = "";
		var alunos_duplicados = "";
		var alunos_encontrados = 0;
		var spans = document.querySelectorAll("input[type='hidden']");
		for (j = 0; j < alunos.length; j++) {
			var encontrou = false;
			var qtd_encontrado = 0;
			for (var i = 0; i < spans.length; i++) {
				if (spans[i].value.toLowerCase().indexOf(alunos[j][0].trim().toLowerCase()) > -1) {
					if (alunos[j][1] != undefined){
						varcheck1 = spans[i].parentNode.parentNode.childNodes[3].childNodes[0];
						if (varcheck1 != undefined) {
							varcheck1.value = alunos[j][1];
						}
					}
					if (alunos[j][2] != undefined) {
						varcheck1 = spans[i].parentNode.parentNode.childNodes[5].childNodes[0];
						if (varcheck1 != undefined) {
							varcheck1.value = alunos[j][2];
						}
					}
					if (alunos[j][3] != undefined) {
						varcheck1 = spans[i].parentNode.parentNode.childNodes[7].childNodes[0];
						if (varcheck1 != undefined) {
							varcheck1.value = alunos[j][3];
						}
					}
					if (alunos[j][4] != undefined) {
						varcheck1 = spans[i].parentNode.parentNode.childNodes[9].childNodes[0];
						if (varcheck1 != undefined) {
							varcheck1.value = alunos[j][4];
						}
					}
					if (alunos[j][5] != undefined) {
						varcheck1 = spans[i].parentNode.parentNode.childNodes[11].childNodes[0];
						if (varcheck1 != undefined) {
							varcheck1.value = alunos[j][5];
						}
					}
					if (alunos[j][6] != undefined) {
						varcheck1 = spans[i].parentNode.parentNode.childNodes[13].childNodes[0];
						if (varcheck1 != undefined) {
							varcheck1.value = alunos[j][6];
						}
					}
					alunos_encontrados++;
					qtd_encontrado++;
					encontrou = true;
				}
			}
			if (qtd_encontrado > 1) {
				alunos_duplicados = alunos_duplicados + "\n- " + alunos[j][0];
			}
			if (!encontrou) {
				alunos_nao_encontrados = alunos_nao_encontrados + "\n- " + alunos[j][0];
			}
		}
		if (alunos_nao_encontrados != "") {
			alunos_nao_encontrados = "\n\nAlunos não encontrados:" + alunos_nao_encontrados;
		}
		if (alunos_duplicados != "") {
			alunos_duplicados = "\n\nAlunos duplicados:" + alunos_duplicados;
		}
		alert("Você informou " + alunos.length + " alunos.\nForam encontrados " + alunos_encontrados + " alunos." + alunos_nao_encontrados + alunos_duplicados);
	}

	browser.runtime.onMessage.addListener(mensagemRecebida);

})();

