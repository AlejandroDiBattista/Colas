<template>
  <div :class="{'grande': grande, 'chico': !grande, 'desabilitar' : !valido }">
    <span class="fa-stack fa-2x">
      <i v-if="!simple" class="far fa-circle fa-stack-2x"></i>
      <i class="fas fa-stack-1x" :class="[`fa-${nombre}`]"></i>
    </span>
  </div>
</template>

<script>

export default {
  props: {
    nombre: String,
    grande: Boolean,
    valido: {
      type: Boolean,
      default: true, 
    },
    simple: Boolean,
  },
};
</script>

<style scoped>
.grande {
  font-size: 8vw;
}

.chico {
  position: absolute;
  right: 5vw;
  font-size: 4vw;
}

.desabilitar .fa-stack-2x{
  color: lightgray;
}

.desabilitar i {
  color: gray;
}

.fa-stack-2x {
  color: #fd9c8f;
}
</style>