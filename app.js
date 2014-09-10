// Very awesome Epitrochoid

var ctx = document.getElementById("canvas").getContext();

function graph(bigR,r,d,theta){

	var amplitude = bigR+r;
	var x = amplitude*Math.cos(theta) - d*Math.cos((amplitude/r)*theta);
	var y = amplitude*Math.sin(theta) - d*Math.sin((amplitude/r)*theta);

	return {
		x : x
		y : y
	};
}

function draw(){
	points = graph();

}

function loop(){

}

// Una vez seteado los parámetros, arrancara la aninación del círculo exterior con su punto fijo.