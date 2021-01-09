<template>
  <head class="titulo centrar">
    Colas
  </head>
  <div class="cantidad centrar">
      <Icono nombre="user-clock" grande />
  </div>
  <div class="info">
      <strong> Estimación de tiempo de espera en cola</strong>
  </div>

  <footer>
    <!-- <router-link :to="{path: `/`}" replace>
      <button class="accion" @click="navigate">Cola Numerada</button>
    </router-link> -->
    <router-link :to="{ path: `/configurar` }" replace>
      <button class="accion" @click="navigate">Cola Simple</button>
    </router-link>
  </footer>
</template>
<script>
import Icono from "../components/Icono.vue";
export default {
    components: {Icono}
}
</script>