export function horaHumanizada(hora) {
  let horas = (hora / 3600).toFixed();
  let minutos = (hora / 60).toFixed() % 60;
  let segundos = hora % 60;
  let salida = [];

  if (horas > 0) salida.push(`${horas}h`);
  if (minutos > 0) salida.push(`${minutos}m`);
  if (segundos > 0) salida.push(`${segundos}s`);

  return salida.join(" ");
}

export function acotar(valor, minimo, maximo) {
  if (valor > maximo) valor = maximo;
  if (valor < minimo) valor = minimo;
  return valor;
}

Date.prototype.hora = function () {
  let options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false, };
  return new Intl.DateTimeFormat('en-US', options).format(this);
}

Date.prototype.agregar = function (segundos) {
  return new Date(this.getTime() + 1000.0 * segundos);
}

Date.prototype.diferencia = function (hora) {
  return ((this.getTime() - hora.getTime()) / 1000).toFixed()
}
