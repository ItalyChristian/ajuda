function mesAnterior(){
	
	var pegaData =  $("#inserir-data").val(); 
	var buscaMes = pegaData.substring(3, 5);
	
	switch (buscaMes) {
	    case "01":
	    case "02":
	    case "03":
	    case "04":
	    case "05":
	    case "06":
	    case "07":
	    case "08":
	    case "09":
			var buscaDnv = buscaMes.substring(0);
			var subtraindo = buscaDnv - parseInt(1);
			var arrumar2 = buscaMes.replace(buscaMes, ("0" + subtraindo));
			var finalData = pegaData.replace(pegaData.substring(3, 5), arrumar2);
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