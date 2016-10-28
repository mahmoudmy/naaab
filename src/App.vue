<template>
	<div class="app">
		<div class="columns has-text-centered" v-if="sh">
			<div class="column">
				<router-link to="/1" class="button is-warning is-medium">
					<span class="icon">
            <svg viewBox="0 0 32 32" width="12" height="12" fill="none" stroke="currentcolor" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="9%">
              <path d="M2 30 L30 2 M30 30 L2 2"></path>
            </svg>
          </span>
					<span> {{ sh }} </span>
				</router-link>
			</div>
		</div>
		<abyat :abyat-array="abyatArray"></abyat>
		<nav class="pagination">
			<router-link :to="prevPageLink" class="button is-info is-outlined page-btn" v-if="page > 1">صفحه قبل</router-link>
			<router-link :to="nextPageLink" class="button is-info is-outlined page-btn" v-if="abyatArray.length === 20">صفحه بعد</router-link>
		</nav>
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
    loadAbyat (page, sh) {
      window.scroll(0, 0)
      this.abyatArray = []
      const shQuery = sh ? '?query={"sh":"' + sh + '"}' : ''
      request
      .get(apiUrl + shQuery)
      .query({ limit: 20, skip: (page - 1) * 20 })
      .set('Authorization', token)
      .end((err, res) => {
        if (err) {
          console.log('Connection Error!')
        } else {
          this.abyatArray = res.body
        }
      })
    }
  },
  data: function () {
    return {
      abyatArray: [],
      sh: this.$route.params.sh,
      page: this.$route.params.page || 1
    }
  },
  computed: {
    nextPageLink: function () {
      if (this.sh) {
        return '/sh/' + this.sh + '/' + (parseInt(this.page) + 1)
      } else {
        return '/' + (parseInt(this.page) + 1)
      }
    },
    prevPageLink: function () {
      if (this.sh) {
        return '/sh/' + this.sh + '/' + (parseInt(this.page) - 1)
      } else {
        return '/' + (parseInt(this.page) - 1)
      }
    }
  },
  components: {
    Abyat
  },
  watch: {
    '$route' (to, from) {
      this.page = to.params.page || 1
      this.sh = to.params.sh
      this.loadAbyat(this.page, this.sh)
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.loadAbyat(to.params.page, to.params.sh)
    })
  }
}
</script>

<style>
	body {
		direction: rtl;
		font-family: 'Vazir', sans-serif;
		background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
	}
	
	.app {
		padding: 20px;
	}
	
	.pagination a {
		margin: 0 10px;
	}
	
	.button.page-btn.is-outlined:focus {
		background-color: transparent;
		border-color: #3273dc;
		border-width: 1px;
		color: #3273dc;
	}
	
	.button .icon:first-child {
		margin-right: -2px;
		margin-left: 4px;
	}
	
	.content a.icon, .content a.icon:visited {
		border: none;
    color: #999;
	}

  .content a.icon:hover {
    color: #000;
  }
</style>