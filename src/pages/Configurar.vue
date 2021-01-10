<template>
  <head class="titulo centrar">
    ¿Cuántas personas hay?
  </head>

  <div class="cantidad centrar">{{ cantidad }}</div>

<div class="info">
  {{coords.latitude.toFixed(5)}},{{coords.longitude.toFixed(5)}}
</div>
  <div class="ajustar centrar">
    <Icono nombre="plus" @click="cambiar(+1)" :valido="!esFinal" grande />
    <Icono nombre="minus" @click="cambiar(-1)" :valido="!esInicio" />
  </div>

  <footer>
    <router-link :to="{path: `/ejecutar/${cantidad}`}" replace>
      <button class="accion" @click="navigate">Comenzar</button>
    </router-link>
  </footer>
</template>

<script>
import { computed, ref } from "vue";
import { acotar } from "../utils.js";
import { useRouter } from "vue-router";
import { useGeolocation } from '@vueuse/core'

import Icono from "../components/Icono.vue";
import Cancelar from "../components/Cancelar.vue";

export default {
  props: {
    minimo: { type: Number, default: 1 },
    maximo: { type: Number, default: 99 },
  },

  components: { Icono, Cancelar },

  setup(props) {
    const cantidad = ref(1);
    // const router = useRouter();

    // const comenzar = () => router.push("/ejecutar/6");
    const { coords } = useGeolocation()

    const cambiar = (paso) =>
      (cantidad.value = acotar(
        cantidad.value + paso,
        props.minimo,
        props.maximo
      ));

    const esInicio = computed(() => cantidad.value <= props.minimo);
    const esFinal = computed(() => cantidad.value >= props.maximo);

    return { coords, cantidad, cambiar, esInicio, esFinal };
  },
};
</script>
