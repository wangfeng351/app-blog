<template>
	<div>
		<h2>文章展示 </h2>
		<p v-for="(article, index)  in articles" :key="index">
			{{article.title}}
		</p>
	</div>
</template>

<script>
	export default {
		name:'my-articles',
		data() {
			return {
				articles: [],
				keywords: '',
				currentPage: 1,
				count: 5
			}
		},
		created: function() {
			this.keywords = this.$route.query.keywords
			console.log(this.keywords)
			if(this.keywords != ''){
			this.axios.get(this.GlOBAL.servelUrl + '/article', {
				params: {
					keywords: this.keywords
				}
			}).
			then(response => {
				this.articles = response.data.data;
				alert(response.data.data.length);
			});
			} else {
				this.axios.get(this.GlOBAL.servelUrl + '/article',{
					params: {
						page: this.currentPage,
						count: this.count
					}
				})
				.then(res =>{
					console.log(res.data.data);
					this.articles = res.data.data;
				});
			}
		},
		methods: {}
	}

</script>

<style>
</style>
