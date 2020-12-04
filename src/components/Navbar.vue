<template>
    <div id="navbar-wrap"> 
        <div id="navbar">
            <h2 @click="$router.push('/')">Movie.io</h2>
            <div v-if="$route.path == '/'"> 
                <input v-model="search" type="text" placeholder="Maybe Avatar?" /> 
            </div>
			<h2>Logo</h2>
        </div>
    </div>
</template>

<script>
export default {
    data (){
		return{
			search:'',
		}
	},

	watch:{
		search(){
			this.$store.dispatch('search', this.search)
		}
	}
}
</script>

<style lang='scss' scoped>
	#navbar-wrap {
		position: fixed;
		width: 100%;
		z-index: 9999;

		#navbar {
			display: flex;
			padding: 20px;
			justify-content: space-between;
			background-color:#070608;

			h2 {
				margin: 2px 1rem 0 1rem;
				color: #c9c9c9;
				cursor: pointer;
			}

			& > div {
				display: flex;
				flex-grow: 2;
				justify-content: center;

				input {
					width: 40%;
					border: none;
					height: 35px;
					border-radius: 5px;
					box-sizing: border-box;
					outline: none;
					padding: 15px 30px;
					font-size: 17px; 
					color: #454545;
					background-color:#262626;
				}
			}
		}
	}
</style>