<template>
  <div>
    <beyt v-for="beyt in abyatArray" :poem="beyt"></beyt>
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
<style scoped>

</style>
