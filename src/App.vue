<template>
  <section>
    <Cancelar />
    <router-view />
  </section>
</template>

<script >
import Cancelar from './components/Cancelar.vue'

export default {
  components: { Cancelar }
}

</script>
