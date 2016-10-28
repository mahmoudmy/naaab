<template>
	<div class="columns is-multiline abyat">
		<div class="column is-6 beyt" v-for="beyt in abyatArray" :key="beyt._id">
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
	
	.beyt .card-content {
		line-height: 36px;
	}
	
	.mesra {
		font-size: 16px;
		text-align: center;
	}
	
	@media only screen and (max-device-width: 768px) {
		.column.beyt {
			width: 100%;
		}
	}
	
	@media only screen and (max-device-width: 568px) {
		.beyt .card-content {
			line-height: 42px;
		}
		.beyt .mesra {
			font-size: 24px;
		}
	}
</style>