//  Dev: Italy Christian
//  Version: 1.0.0

function mesAnterior(){
	
	var pegaData =  $("#inserir-data").val(); 
	// busca a data preenchida pelo usuario (ex: pegaData = "05/07/2021")
	var buscaMes = pegaData.substring(3, 5);
	//encontra na string os numeros referentes ao mês (ex: buscaMes = "07")
	var buscaAno = pegaData.substring(8, 11);
	//encontra na string os numeros referentes aos ultimos dígidos do ano (ex: buscaMes = "21")
	
	switch (buscaMes) {
	    case "01":
			var mudaMes = buscaMes.replace(buscaMes, "12");
			var mudaAno = buscaAno - parseInt(1);
			var mudaMesF = pegaData.replace(pegaData.substring(3, 5), mudaMes);
			var finalData = mudaMesF.replace(pegaData.substring(8,11), mudaAno);
			break;
	        
	    case "02":
	    case "03":
	    case "04":
	    case "05":
	    case "06":
	    case "07":
	    case "08":
	    case "09":
			var buscaDnv = buscaMes.substring(0);
			// encontra o primeiro item (no caso o 0) e deixa só o segundo numero (ainda no nosso exemplo temos: buscaDnv = "7")
			var subtraindo = buscaDnv - parseInt(1);
			// subtrai do valor que extraimos (entao temos: substraindo = "6")
			var arrumar2 = buscaMes.replace(buscaMes, ("0" + subtraindo));
			//utilizamos a funcao replace para substituir os valores "07" (que extraimos no inicio) e substitumos por "0" + o resultado da subtraçao 
			// ( entao: arrumar2 = "06" )
			var finalData = pegaData.replace(pegaData.substring(3, 5), arrumar2);
			// aqui nós buscamos de novo o a data inserida pelo usuário (no nosso exemplo: pegaData = "05/07/2021")
			// e em seguida fazemos um novo recorte para substituir o "07" pelo resultado da nossa subtraçao (com o "0")
			// entao ainda dentro do nosso exemplo , teriamos: finalData = "05/06/2021"
	        break;

	    case "10":
	    		var subtraindo = buscaMes - parseInt(1);
			var arrumar2 = buscaMes.replace(buscaMes, ("0" + subtraindo));
			var finalData = pegaData.replace(pegaData.substring(3, 5), arrumar2);
	        break;
	        
		case "11":
		case "12":
			var subtraindo = buscaMes - parseInt(1);
			var arrumar2 = buscaMes.replace(buscaMes, subtraindo);
			var finalData = pegaData.replace(pegaData.substring(3, 5), arrumar2);
	        break;
	}

 	return finalData;
}
