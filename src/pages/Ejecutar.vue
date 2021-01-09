<template>
  <head class="titulo centrar">
    ¿Cuántas personas faltan?
  </head>

  <div class="cantidad centrar" :class="{ excedido: esVencido && hayDatos }">
    {{ actual }}
  </div>

  <div class="info">
    <div>
      Esperamos <strong>{{ tiempoEsperado }} </strong>
    </div>
    <template v-if="hayDatos">
      <div v-if="esVencido" class="excedido">
        Se pasó <strong>{{ tiempoExcedido }}</strong>
      </div>
      <div v-else-if="esEstimado">
        Falta <strong>{{ tiempoFaltante }}</strong>
      </div>
    </template>
  </div>

  <div class="ajustar centrar">
    <Icono nombre="minus" @click="salir()" :valido="!esFinal" grande />
    <Icono nombre="plus" @click="entrar()" :valido="!esInicio" />
  </div>
  <footer>
    <router-link :to="{ path: `/` }" replace>
      <button class="accion" @click="navigate">Terminar</button>
    </router-link>
  </footer>
</template>

<script>
import { horaHumanizada } from "../utils.js";

import { computed, onUnmounted, reactive } from "vue";
import { useRoute } from "vue-router";

import Icono from "../components/Icono.vue";

import { Cola } from "../ColaSimple.js";

export default {
  components: { Icono },
  props: ["cantidad"],

  setup(props) {
    const {
      params: { cantidad },
    } = useRoute();

    const cola = reactive(new Cola(cantidad));
    const reloj = setInterval(() => cola.actualizar(), 500);

    console.log("Instalando el reloj");

    const entrar = () => cola.entrar();
    const salir = () => cola.salir();

    onUnmounted(() => {
      console.log("onUnmounted");
      clearInterval(reloj);
      cola.value = null;
    });

    const hayDatos = computed(() => !cola.esInicio && cola.tiempoEsperado > 1);
    const esInicio = computed(() => cola.esInicio);
    const esFinal = computed(() => cola.esFinal);
    const esEstimado = computed(() => cola.tiempoFaltante > 0);
    const esVencido = computed(() => cola.plazoVencido);

    const actual = computed(() => cola.cantidad);
    const tiempoFaltante = computed(() => horaHumanizada(cola.tiempoFaltante));
    const tiempoExcedido = computed(() => horaHumanizada(-cola.tiempoFaltante));
    const tiempoEsperado = computed(() => horaHumanizada(cola.tiempoEsperado));

    return {
      entrar,
      salir,
      actual,
      hayDatos,
      esInicio,
      esFinal,
      esEstimado,
      esVencido,
      tiempoFaltante,
      tiempoEsperado,
      tiempoExcedido,
    };
  },
};
</script>
