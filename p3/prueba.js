function Telefono (numero,marca,color){
	this.numero = numero;
	this.marca = marca;
	this.color = color;
	this.contador_de_llamadas = 0;
	this.marcar = function(numero) {
		this.contador_de_llamadas++;
	}
}