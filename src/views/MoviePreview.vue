<template>
  <div id="movie-preview">
      <Navbar/>

      <div id="movie-container">
          <div id="movie-poster">
              <img :src="movie.poster" alt="movie poster">
          </div> 

          <div id="movie-info">
              <div>
                  <h1>{{movie.name}}</h1>
                  <h3>
                      <span 
                      class="movie-rating"
                      :style="{'background-color':getRatingColor()}">{{movie.rating}}</span>
					  <span class="movie-rating"
					  	:style="{'background-color':'#eee7d7','color':'#97948a'}"
					  >
						  {{movie.year}}
					  </span>
					  <span class="movie-rating"
					   :style="{'background-color':'#f5c83b','color':'#000000'}"
					  >
						  {{movie.genre}}
					  </span>	 
                  </h3>
                  <p>Budget : {{movie.budget}}</p>
                  <p>Box Office : {{movie.boxOffice}}</p> 
                  <p>
                      <strong>
                          Overview 
                      </strong><br/>
                      {{movie.storyline}}
                  </p>

                  <p>
                    <strong>Actors</strong> <br/>
                    <span v-for="(actor, index) in movie.actors" :key='index'>
                        {{actor.name}} 
						<span v-if="index+1 != movie.actors.length">, </span>    
                    </span>    
                  </p> 
              </div>

              <div id="options">
                  <button @click="showModal = true" class="edit">Edit</button>
                  <button @click="deleteMovie" class="delete">Delete</button>
              </div>

          </div>

      </div>

	  <modal v-if="showModal" @close="showModal = false">
			<template v-slot:header>
				<h3 class="m-0">Create new movie</h3>
			</template>
			<template v-slot:body>
				<form
					@submit.prevent="updateMovie"
					ref="movieForm"
					id="movie-form"
				>
					<p>Fill out the details bellow</p>
					<input
						required
						v-model="movie.name"
						type="text"
						placeholder="Name"
					/>
					<input
						required
						v-model="movie.year"
						type="number"
						placeholder="Year"
					/>
					<input
						required
						v-model="movie.rating"
						type="number"
						placeholder="Rating"
					/>
					<input
						required
						v-model="movie.budget"
						type="text"
						placeholder="Budget"
					/>
					<input
						required
						v-model="movie.poster"
						type="text"
						placeholder="Poster"
					/>
					<input
						required
						v-model="movie.boxOffice"
						type="text"
						placeholder="Box Office"
					/>

					<hr />

					<div>
						<div id="actor-input">
							<p class="m-0">Actors</p>
							<span @click="addActor" class="add-actor">+</span>
						</div>

						<input
							required
							v-for="(actor, index) in movie.actors"
							:key="index"
							v-model="movie.actors[index].name"
							type="text"
							placeholder="Actor"
						/>
					</div>

					<hr />

					<textarea
						required
						v-model="movie.storyline"
						placeholder="Storyline"
						rows="6"
					/>
				</form>
			</template>
			<template v-slot:footer>
				<button
					id="update-movie"
					@click="$refs.movieForm.requestSubmit()"
				>
					Save
				</button>
			</template>
		</modal>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import ratingMixin from '../mixins/getRatingColor' 
import Modal from "../components/Modal"  
import moviesApi from '../services/moviesApi'

export default {
    mixins:[ 
        ratingMixin
    ],

    components:{
		Navbar,
		Modal
    },

    props: {
        id:{
            type: [String, Number],
            default: null
        }
    },

    data(){
        return {
			showModal: false,
            movie: {},
        }
	}, 
	
	methods:{
		updateMovie(){
			this.$store.dispatch('updateMovie', this.movie)
			this.showModal = false 
		},

		deleteMovie(){
			// this.$store.dispatch('deleteMovie', parseInt(this.id)) 
			this.$store.dispatch('deleteMovie', this.id)
			this.$router.push('/') 
		},

		addActor() {
			this.movie.actors.push({ name: "" });
		},
	},

    created(){
        // call from store
		const movie = this.$store.getters.getMovieById(parseInt(this.id))
		
		if(movie){
			this.movie = movie
		}else{
			moviesApi
			.getMovieById(this.id)
			.then((res) => (this.movie = res))
			.catch((err) => console.log(err))
		}
    }
}
</script>

<style lang='scss' scoped>
	#movie-preview {
		display: flex;
		overflow: auto;

		#movie-container {
			display: flex;
			justify-content: center;
			flex-grow: 1;
			margin-top: 120px;
			padding: 0 1rem 10rem 1rem;

			#movie-poster {
				flex-grow: 1;
				min-width: 400px;

				img {
					max-width: 300px;
					box-shadow: 0 14px 28px rgba(0, 0, 0, 0.473),
						0 10px 10px rgba(0, 0, 0, 0.473);
					margin-bottom: 7px;
					border-radius: 15px;
				}
			}

			#movie-info {
				display: flex;
				flex-grow: 2;
				text-align: left;
				flex-direction: column;
				justify-content: space-between;

				h1 {
					color: #1b1d1b;
					margin-bottom: 2rem;
				}

				h3 {
					color: #1b1d1b;

					.movie-rating {
						display: inline-block; 
						border-radius: 10px;
						font-size: 20px; 
						padding:5px 20px;
						color: white;
					}

					span {
						margin-right: 5px;
					}
				}

				p {
					font-size:18px;
				}

				#options {
					max-width: 180px;
					display: flex;
					justify-content: space-between;
					margin-top: 1rem;

					.edit {
						height: 30px;
						width: 80px;
						background-color:#f5c83b;
						border: none;
						color:#000000; 
						font-size:16px;
						font-weight: 600;
						border-radius: 5px;
						outline: none;
						cursor: pointer;
					}

					.delete {
						height: 30px;
						width: 80px;
						background-color: #e44647;
						color:white;
						border: none; 
						font-size:16px;
						font-weight: 600;
						border-radius: 5px;
						outline: none;
						cursor: pointer;
					}
				}
			}
		}

		#movie-form {
			display: flex;
			flex-direction: column;
			text-align: left;

			& > div {
				display: flex;
				flex-direction: column;

				#actor-input {
					display: flex;
					justify-content: space-between;
				}
			}

			.add-actor {
				background-color: rgb(89, 136, 107);
				text-align: center;
				color: white;
				margin-left: 5px;
				height: 100%;
				padding: 2px 10px;
				font-size: 20px;
				padding: 1re;
				align-self: center;
				cursor: pointer;
			}
		}

		#update-movie {
			background-color: rgb(89, 136, 107);
			border: none;
			padding: 5px;
			width: 70px;
			color: white;
			border-radius: 10px;
			cursor: pointer;
			text-transform: uppercase;
			outline: none;
		}
	}

	@media only screen and (max-width: 500px) {
		/* For mobile phones: */
		#movie-preview{
			#movie-container{ 
				width: 100%;
				display:block;

				#movie-poster{
					width:100%;
					min-width: 0;
					img{ 
						max-width: 100%;
					}
				}

				#movie-info {
					h3{
						.movie-rating{
							margin:5px;
						}
					}
				}
			}
		} 
	}
</style>