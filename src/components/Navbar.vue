<template>
    <div id="navbar-wrap" :class="{ 'navbar-scroll': !showNavbar }" >  
        <div id="navbar" :class="{ 'navbar-padding': !showNavbar }">
            <h2 @click="$router.push('/')">Movie.io</h2>
            <div v-if="$route.path == '/'"> 
                <input v-model="search" type="text" placeholder="Maybe Avatar?" /> 
            </div>
			<img :src="'../assets/img/avatar.png'" alt="avatar"> 
        </div>
    </div>
</template>

<script>
export default {
    data (){
		return{
			search: '', 
			showNavbar: true,
			lastScrollPosition: 0
		}
	},

	mounted () {
		window.addEventListener('scroll', this.onScroll)
	}, 

	methods: {
		onScroll () {
			// Get the current scroll position
			const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
			// Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
			if (currentScrollPosition < 0) {
				return
			}
			// current scroll position and last scroll position is less than some offset
			if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
				return
			}

			this.showNavbar = currentScrollPosition < this.lastScrollPosition
			this.lastScrollPosition = currentScrollPosition
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
		transform: translate3d(0, 0, 0);
		transition: 0.1s all ease-out; 

		&.navbar-scroll {  
			box-shadow: 0 2px 15px #1d1d1d;
		}

		#navbar {
			display: flex;
			padding: 20px;
			justify-content: space-between;
			background-color:#070608;

			&.navbar-padding {
				padding:25px 20px;
			}

			img { 
				width:40px;
			}

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