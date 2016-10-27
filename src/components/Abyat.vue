<template>
  <div class="columns is-multiline is-desktop abyat">
    <div class="column is-half-desktop beyt"  v-for="beyt in abyatArray" :key="beyt._id">
      <beyt :poem="beyt"></beyt>
    </div>
  </div>
</template>

<script>
import Beyt from './Beyt'

export default {
  name: 'abyat',
  components: {
    Beyt
  },
  props: ['abyatArray']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.abyat {
  min-height: 100vh;
}
.beyt .card {
  opacity: .8;
}
</style>
