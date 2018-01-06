var numero = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var operacion = ['+', '-', '*', '/', '√'];
this.a;
this.b;
this.operacion;
var cal = {
	uno: function () {
		resultado.textContent = resultado.textContent + numero[0];
	},
	dos: function () {
		resultado.textContent = resultado.textContent + numero[1];
	},
	tres: function () {
		resultado.textContent = resultado.textContent + numero[2];
	},
	cuatro: function () {
		resultado.textContent = resultado.textContent + numero[3];
	},
	cinco: function () {
		resultado.textContent = resultado.textContent + numero[4];
	},
	seis: function () {
		resultado.textContent = resultado.textContent + numero[5];
	},
	siete: function () {
		resultado.textContent = resultado.textContent + numero[6];
	},
	ocho: function () {
		resultado.textContent = resultado.textContent + numero[7];
	},
	nueve: function () {
		resultado.textContent = resultado.textContent + numero[8];
	},
	cero: function () {
		resultado.textContent = resultado.textContent + numero[9];
	},
	reset: function () {
		resultado.textContent = "";
	},
	punto: function () {
		resultado.textContent = resultado.textContent + ".";
	},
	borrar: function () {
		window.alert('nose como se usa aun xdxd');
	},
	suma: function () {
		this.a = resultado.textContent;
		this.operacion = operacion[0];
		limpiar();
	},
	resta: function () {
		this.a = resultado.textContent;
		this.operacion = operacion[1];
		limpiar();
	},
	multiplica: function () {
		this.a = resultado.textContent;
		this.operacion = operacion[2];
		limpiar();
	},
	division: function () {
		this.a = resultado.textContent;
		this.operacion = operacion[3];
		limpiar();
	},
	raiz: function () {
		this.a = resultado.textContent;
		this.operacion = operacion[4];
		limpiar();
	},
	igual: function () {
		this.b = resultado.textContent;
	},
}

function limpiar () {
	resultado.textContent = "";
}

 