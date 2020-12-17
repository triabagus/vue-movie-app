<template>
  <div id="movie-container"> 
	<div id="top-bar">
		<Filters />   
	</div>   
	<Movie v-for="movie in movies" :key="movie.id" :movie="movie" /> 	
  </div>
</template>

<script>
import Filters from '../components/Filters' 
import Movie from './Movie' 

export default {
	components:{
		Filters,
		Movie 
	},

	data() {
		return {
			movie: [], 
		}
	},

	computed: {
		movies() {
			return this.$store.getters.getMovies
		},
	},

	// created() { // sekali berjalan/dibuat
	// 	this.movies = this.$store.getters.getMovies
	// } 
	
	created() {  
		this.$store.dispatch('fetchMovies')
	},
	 
}
</script>

<style lang='scss' scoped>
	#movie-container {
		padding-top: 3rem;
		display: flex;
		flex-wrap: wrap;
		flex-grow: 2;
		justify-content: center;

		#top-bar{
			display:none;
		}
	}

	@media only screen and (max-width: 500px) {
		/* For mobile: */
		#movie-container { 
			#top-bar{
				display: block; 
			}
		}
	}
</style>