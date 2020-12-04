const ratingMixin = {
    methods:{
        getRatingColor() {
            if(this.movie.rating > 7) return "#59886b"
            if(this.movie.rating > 4) return "#f4c23a"
            return "#e44647"  
		},
    },
}

export default ratingMixin;