<template>
	<div class="row">
		<div class="article-card bl-df-c-center bl-col-12" v-for="(article, index) in articles" :key = "index">
			<!-- <p class="bl-df-left">
				<img :src="article.avatar" alt="" class="bl-avatar bl-btn-circle bl-mr">
				{{article.nickname}}
			</p> -->
			<router-link :to="{ path: '/article/' + article.id}">
			<p class="bl-lg-font bl-bd-font">{{article.title}}</p>
			</router-link>
			<p class="description-p bl-sub-title">{{article.description}}</p>
			<p class="bl-meta">转发量:{{article.forwardAccount}} 评论量:{{article.commentAccount}} 关注数:{{article.likeAccount}}</p>
		</div>
	</div>
</template>

<script>
	// export default {
	// 	data() {
	// 		return {
	//             articles : []
	// 		}
	// 
	// 	},
	// 	created() {
	// 		this.axios.get(this.GlOBAL.servelUrl + '/article/hot').then(res => {
	// 			this.articles = res.data.data;
	// 		})
	// 	},
	// 	methods: {
	// 
	// 	}
	// }
	export default {
			data() {
				return {
					articles: [],
					keywords: ''
				};
			},
			created() {
				this.keywords = this.$route.query.keywords;
				console.log(this.keywords);
				this.axios
					.get(this.GlOBAL.servelUrl + '/article', {
						params: {
							keywords: this.keywords
						}
					})
					.then(res => {
						console.log(res.data.data.length);
						this.articles = res.data.data;
					});
			},
			methods: {}
		}
</script>

<style scoped>
	p {
		width: 100%;
		margin-top: 5px;
	}
	
	.article-card {
		margin-top: 20px;
		width: 100%;
	}
	
	.description-p {
		height: 40px;
	}
</style>
