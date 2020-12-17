<template>
  <div class="movie">
      <img :src="movie.poster" alt="Movie Poster" @click="openDetails" /> 
	  <span :style="{'background-color':getRatingColor()}">{{movie.rating}}</span> 
      <div class="description">
          <div class="basic-info">
              <h3>{{movie.name}}</h3>
          </div> 
              <p>{{movie.genre}}</p>
              <p>{{movie.year}}</p>
      </div>

  </div>
</template>

<script>
import ratingMixin from '../mixins/getRatingColor'

export default {
	mixins:[
		ratingMixin
	],
	
    props:{
        movie:{
            type:Object,
            default:() => {} 
        }
    },

    methods:{ 
		openDetails() {
			this.$router.push({
				name: 'moviePreview', 
				params: {id : this.movie.id},
			})
		}
    }
}
</script>

<style lang='scss' scoped> 
	.movie {
		flex: 1;
		margin: 2rem;
		min-width: 250px;
		max-width: 250px;
		position: relative;

		img {
			max-width: 100%;
            max-height: 350px;
			box-shadow: 0 14px 28px rgba(0, 0, 0, 0.473),
				0 10px 10px rgba(0, 0, 0, 0.473);
			margin-bottom: 7px;
			border-radius: 15px;
			cursor: pointer;
		} 

		span {
			    border-radius: 50%;
				font-size: 18px;
				width: 20px;
				height: 20px;
				padding: 10px;
				text-align: center;
				font-weight: bold;
				color: white;
				position: absolute;
				top: 8px;
				right: 16px;
		}

		.description {
			padding: 1rem 0;

			.basic-info {
				display: flex;
				justify-content: space-between;

				h3 {
					margin: 0;
					text-align: left;
					color: #1b1d1b;
                    font-size: 20px;
				}
			}

			p {
				margin: 5px 0;
				color:#404040;
				font-size:18px;
				text-align: left;
			}
		}
	} 
</style>