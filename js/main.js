var numero = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var operacion = ['+', '-', '*', '/', '√'];

var cal = {
	a: 0,
	b: 0,
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
		resultado.textContent = resultado.textContent + operacion[0];
	},
	resta: function () {
		resultado.textContent = resultado.textContent + operacion[1];
	},
	multiplica: function () {
		resultado.textContent = resultado.textContent + operacion[2];
	},
	division: function () {
		resultado.textContent = resultado.textContent + operacion[3];
	},
	raiz: function () {
		resultado.textContent = resultado.textContent + operacion[4];
	},
	
}
