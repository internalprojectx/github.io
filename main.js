	function focado(focus){
		if (document.getElementById(focus).value != 0) {}
		else{
			document.getElementById(focus).value = "";
		}
	}

	function desfocado(focus){
		if (document.getElementById(focus).value != "") {
			document.getElementById(focus).value = document.getElementById(focus).value;
		}
		else{
			if (document.getElementById(focus).value == "") {
				document.getElementById(focus).value = 0;
			}
		}
		
	}

	function salvaTXT(){

			var aux = ("# -- Calculadora ICMS V1.0 -- #\n\n(DADOS A SEREM SALVOS AQUI)");
			var meublob = new Blob([aux], {type: "text/html;charset=utf-8"});
    		saveAs(meublob, "HistoricoDeCalculo.txt");

		}

	function VerificaCampo(){

		var contador = 0
		var verificador = document.getElementsByTagName('input');

		for (var i = 0; i < 21; i++) {

			if (isNaN(verificador[i].valueAsNumber) == true) {			
		 	document.getElementById(verificador[i].id).value = 0;
		 	contador++;
		 	}
		}
		
		if (contador != 0) {
			return false;
		}
		else{
			return true;
		}

	}
	
	function CalculaBaseICMSInter(confirma){

		if (confirma == true) {

			var valProduto = parseFloat(document.getElementById('valProduto').value);
			var valFrete = parseFloat(document.getElementById('valFrete').value);
			var valSeguro = parseFloat(document.getElementById('valSeguro').value);
			var valDespesas = parseFloat(document.getElementById('valDespesas').value);
			var valDescontos = parseFloat(document.getElementById('valDescontos').value);

			var resultado = ((valProduto + valFrete + valSeguro + valDespesas) - valDescontos);

			document.getElementById("result_base_icms_inter").value = resultado.toFixed(2);
			document.getElementById("baseICMSInter").value = resultado.toFixed(2);

			document.getElementById("valProduto1").value = valProduto;
			document.getElementById("valFrete1").value = valFrete;
			document.getElementById("valSeguro1").value = valSeguro;
			document.getElementById("valDespesas1").value = valDespesas;
			document.getElementById("valDescontos1").value = valDescontos;
		}
		else{
			alert("Os campos não podem ficar em branco e somente números podem ser digitados !");
		}
	}

	function CalculaValorICMSInter(confirma){

		if (confirma == true) {

			var baseICMSInter = parseFloat(document.getElementById('baseICMSInter').value);
			var aliqICMSInter = parseFloat(document.getElementById('aliqICMSInter').value);

			var resultado = (baseICMSInter * (aliqICMSInter / 100));

			document.getElementById("result_valor_icms_inter").value = resultado.toFixed(2);
			document.getElementById("valorICMSinter").value = resultado.toFixed(2);

		}
		else{
			alert("Os campos não podem ficar em branco e somente números podem ser digitados !");
		}

	}

	function CalculaBaseICMSst(confirma){

		if (confirma == true) {

			var valProduto1 = parseFloat(document.getElementById('valProduto1').value);
			var valIPI = parseFloat(document.getElementById('valIPI').value);
			var valFrete1 = parseFloat(document.getElementById('valFrete1').value);
			var valSeguro1 = parseFloat(document.getElementById('valSeguro1').value);
			var valDespesas1 = parseFloat(document.getElementById('valDespesas1').value);
			var valDescontos1 = parseFloat(document.getElementById('valDescontos1').value);
			var valMVA = parseFloat(document.getElementById('valMVA').value);

			var resultado = ((valProduto1 + valIPI + valFrete1 + valSeguro1 + valDespesas1 - valDescontos1) * (1+(valMVA / 100)));

			document.getElementById("result_base_icms_st").value = resultado.toFixed(2);
			document.getElementById("baseICMSst").value = resultado.toFixed(2);

			//OPCIONAL//
			document.getElementById("valProduto").value = valProduto1;
			document.getElementById("valFrete").value = valFrete1;
			document.getElementById("valSeguro").value = valSeguro1;
			document.getElementById("valDespesas").value = valDespesas1;
			document.getElementById("valDescontos").value = valDescontos1;
			//OPCIONAL//

		}
		else{
			alert("Os campos não podem ficar em branco e somente números podem ser digitados !");
		}
	
	}

	function CalculaValorICMSst(confirma){

		if (confirma == true) {

			var baseICMSst = parseFloat(document.getElementById('baseICMSst').value);
			var aliqICMSIntra = parseFloat(document.getElementById('aliqICMSIntra').value);
			var valorICMSinter = parseFloat(document.getElementById('valorICMSinter').value);

			var resultado = ((baseICMSst * (aliqICMSIntra / 100)) - valorICMSinter);

			document.getElementById("result_valor_icms_st").value = resultado.toFixed(2);

		}
		else{
			alert("Os campos não podem ficar em branco e somente números podem ser digitados !");
		}

	}