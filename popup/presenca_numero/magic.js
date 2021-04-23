
(function () {

	if (window.hasRun) {
		return;
	}
	window.hasRun = true;

	function mensagemRecebida(request, sender, sendResponse) {
		alunos = request.mensagem;
		var checkboxes = document.querySelectorAll("input[type='text']");
		for (var i = 0; i < checkboxes.length; i++) {
			checkboxes[i].value = "0";
		}
		var quantidade_aulas = checkboxes[0].parentNode.innerHTML.match(/de (\d+)/)[1];
		var alunos_nao_encontrados = "";
		var alunos_duplicados = "";
		var alunos_encontrados = 0;
		var presenca = 0;
		var falta = 0;
		var spans = document.querySelectorAll("input[type='hidden']");
		for (j = 0; j < alunos.length; j++) {
			var encontrou = false;
			var qtd_encontrado = 0;
			for (var i = 0; i < spans.length; i++) {
				if (spans[i].value.toLowerCase().indexOf(alunos[j][0].trim().toLowerCase()) > -1) {
					if (alunos[j][1].trim() == "-") {
						falta++;
					} else {
						presenca++;
						varcheck1 = spans[i].parentNode.parentNode.parentNode.childNodes[5].childNodes[0];
						if (varcheck1 != undefined) {
							varcheck1.value = quantidade_aulas;
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
		alert("Você informou " + alunos.length + " alunos.\nForam encontrados " + alunos_encontrados + " alunos." + alunos_nao_encontrados + alunos_duplicados + "\n\nPresenças: " + presenca + "\nFaltas: " + falta);
	}

	browser.runtime.onMessage.addListener(mensagemRecebida);

})();

