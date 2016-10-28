<template>
  <div class="card is-fullwidth">
    <div class="card-content">
      <div class="mesra">{{ poem.m1 }}</div>
      <div class="mesra">{{ poem.m2 }}</div>
    </div>
    <div class="card-footer">
      <router-link :to="'/sh/' + poem.sh + '/1'" class="card-footer-item">{{ poem.sh }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'beyt',
  props: ['poem']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
