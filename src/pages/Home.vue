<template>
  <head class="titulo centrar">
    Colas
  </head>
  <div class="cantidad centrar">
    <Icono nombre="user-clock" grande />
  </div>
  <div class="info">Estimación tiempo 
    <br />de espera en cola
    {{isFullscreen}}
  </div>

  <footer>
    <router-link :to="{ path: `/configurar` }" replace>
      <button class="accion" @click="navigate">Cola Simple</button>
    </router-link>
  </footer>
</template>
<script>
import Icono from "../components/Icono.vue";
import { useFullscreen } from "@vueuse/core";

export default { 
  components: { Icono }, 
  setup() {
    const { isFullscreen, enter, exit, toggle } = useFullscreen();
    toggle();
    return {isFullscreen}
  } 
  };
</script>