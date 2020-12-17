<template>
  <div id="filters"> 
      <p v-for="(filter,index) in filters" :key="index" @click="applyFilter(filter)">
		{{filter.name}}	  
	  </p>  
  </div>
</template>

<script>
export default {
	data(){
		return {
			filters: [
				{
					name: 'Rating highest',
					key: 'rating',
					order: 'desc'
				},
				{
					name: 'Rating lowest',
					key: 'rating',
					order: 'asc'
				},
				{
					name: 'Your rewest',
					key: 'year',
					order: 'desc'
				},
				{
					name: 'Your oldest',
					key: 'year',
					order: 'asc'
				},
			]
		}
	},
	methods:{
		applyFilter(filter){
			this.$store.dispatch('filter', filter);
			console.log(filter)
		}
	}
}
</script>

<style lang='scss' scoped>
	#filters {
		text-align: left;
		color: rgb(143, 143, 143);
		cursor: pointer;

		p { 
			font-size:18px;
			transition: 0.3s;

			&:hover {
				color:#deb141;
			}
		}
	}
</style>