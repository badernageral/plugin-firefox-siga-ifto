
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
		var tabelas = document.querySelectorAll("#table_notas");
		for (j = 0; j < alunos.length; j++) {
			var encontrou = false;
			var qtd_encontrado = 0;
			for (var q = 0; q < tabelas.length; q++) {
				matriculas = tabelas[q].childNodes[1].childNodes;
				for (var i = 0; i < matriculas.length; i++) {
					if (matriculas[i].childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerHTML.trim().toLowerCase()==alunos[j][0].trim().toLowerCase()) {
						var notas = matriculas[i].querySelectorAll("input");
						for(var k=0;k<notas.length;k++){
							if (alunos[j][k+1] != undefined){
								notas[k].value = alunos[j][k+1];
								notas[k].dispatchEvent(new Event('blur'));
							}
						}
						alunos_encontrados++;
						qtd_encontrado++;
						encontrou = true;
					}
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

