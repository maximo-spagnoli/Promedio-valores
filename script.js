    var parcial1,parsial2,final,promedio;
	parcial1 = parseFloat(promtp("Parcial1"));
    parcial2 = parseFloat(promtp("Parcial2"));
	final = parseFloat(promtp("Final"));
	promedio = (parcial1+parsial2+final)/3;

	if(promedio >= 10.5){
		document.write("El promedio es "+promedio+" APROBADO");
	}else{
		document.write("El promedio es "+promedio+" DESAPROBADO");
	}