<template>
  <div class="beyt">
    <div class="mesra">{{ poem.m1 }}</div>
    <div class="mesra">{{ poem.m2 }}</div>
    <div>{{ poem.sh }}</div>
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
.beyt {
  width: 700px;
  text-align: center;
  background-color: #ccc;
  margin: 20px auto;
  padding: 10px
}
</style>
