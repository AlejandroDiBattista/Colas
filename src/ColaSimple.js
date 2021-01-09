import { acotar } from "./utils.js";

export class Cola {
    constructor(cantidad) {
        this.inicial = { cantidad, hora: new Date() };
        this.actual  = { cantidad, hora: new Date() };

        this.actualizar();
        console.log(`Creamos la cola con ${cantidad} personas`);
    }

    entrar() {
        this.cambiar(this.cantidad + 1);
    }

    salir() {
        this.cambiar(this.cantidad - 1);
    }

    cambiar(valor) {
        this.actual.cantidad = acotar(valor, 0, this.inicial.cantidad );
        this.actual.hora = new Date();
    }

    actualizar() {
        this.ahora = new Date();
    }

    get cantidad() {
        return this.actual.cantidad;
    }

    get tiempoTotal() {
        return this.actual.hora.diferencia(this.inicial.hora);
    }

    get tiempoEsperado() {
        return this.ahora.diferencia(this.inicial.hora);
    }

    get tiempoPromedio() {
        let n = this.inicial.cantidad - this.actual.cantidad;
        return n === 0 ? 0 : (this.tiempoTotal / n).toFixed();
    }

    get tiempoFaltanteEstimado() {
        return this.actual.cantidad * this.tiempoPromedio;
    }

    get horaFinalizacion() {
        return this.inicial.hora.agregar(this.inicial.cantidad * this.tiempoPromedio);
    }

    get tiempoFaltante() {
        return this.horaFinalizacion.diferencia(this.ahora);
    }

    get plazoVencido() {
        return this.tiempoFaltante <= -1;
    }

    get conDatos() {
        return this.inicial.cantidad > this.actual.cantidad && this.tiempoTotal > 5;
    }

    get esInicio() {
        return this.actual.cantidad >= this.inicial.cantidad;
    }

    get esFinal() {
        return this.actual.cantidad <= 0;
    }

    informe() {
        console.group("Simulacion Cola simple");
        console.log(`Inicial > Hora : ${this.inicial.hora.hora()} | Cantidad : ${this.inicial.cantidad} `);
        console.log(`Actual  > Hora : ${this.actual.hora.hora()} | Cantidad : ${this.actual.cantidad} `);
        console.log(`Hora Actual       : ${(new Date()).hora()}`);
        console.log(`Hora Finalizacion : ${this.horaFinalizacion.hora()}`);
        console.log(`Tiempo Promedio     ${this.tiempoPromedio}`);
        console.log(`Faltante Estimado   ${this.tiempoFaltanteEstimado}`);
        console.log(`Tiempo Faltante     ${this.tiempoFaltante} > ${this.tiempoFaltante}`);
        console.log(`Tiempo Total        ${this.tiempoTotal}`);
        console.log(`Plazo Vencido       ${this.plazoVencido}`);
        console.log(`Espera Total        ${this.tiempoEsperado}  > ${this.tiempoEsperado}`);
        console.groupEnd();
    }
}

