const ratingMixin = {
    methods:{
        getRatingColor() {
            if(this.movie.rating > 7) return "#59886b"
            if(this.movie.rating > 4) return "#ffc85c"
            return "#c05555"  
		},
    },
}

export default ratingMixin;