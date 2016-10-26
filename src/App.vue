<template>
	<div id="app">
		<abyat :abyat-array="abyatArray"></abyat>
    <router-link :to="'/' + page">بعدی</router-link>
	</div>
</template>

<script>
import request from 'superagent'
import Abyat from './components/Abyat'

const apiUrl = 'https://baas.kinvey.com/appdata/kid_Bywohawkg/abyat'
const token = 'Basic a2lkX0J5d29oYXdrZzozZmZhNTQwMTAwNDk0ZTlkYjY3NTRjZDQ5NDllZTUyMA=='

export default {
  name: 'app',
  methods: {
    loadAbyat (page) {
      request
      .get(apiUrl)
      .query({ query: {}, limit: 20, skip: (page - 1) * 20 })
      .set('Authorization', token)
      .end((err, res) => {
        if (err) {
          console.log('Connection Error!')
          return []
        } else {
          return res.body
        }
      })
    }
  },
  data: function () {
    return {
      page: parseInt(this.$route.params.page) + 1,
      abyatArray: []
    }
  },
  components: {
    Abyat
  },
  watch: {
    '$route' (to, from) {
      console.log(to)
      this.page = parseInt(to.params.page) + 1
      this.abyatArray = this.loadAbyat(this.page)
    }
  }
}
</script>

<style>

</style>