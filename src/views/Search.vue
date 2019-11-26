<template>
	<div class="bl-df-start bl-container">
         <div class="bl-col-4 tab bl-lg-font">
			 <router-link :to="{ path: '/search/article', query: { keywords: this.keywords } }"><p>文章</p></router-link>
			 <router-link :to="{ path: '/search/user', query: { keywords: this.keywords } }"><p>用户</p></router-link>
			 <router-link :to="{ path: '/search/topic', query: { keywords: this.keywords } }"><p>专题</p></router-link>
			 <hr class="split-line">
		 </div>
         <div class="bl-col-8">
			 <router-view class = "container" />
		 </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				keywords: ''
			};
		},
		
		created() {
			this.keywords = this.$route.query.keywords;
		},
		computed: {},
		methods: {}
	};
</script>


<style scoped>
    .tab {
		margin-top: 10px;
		color: #e5e5e5;
		height: 100%;
		background-color: #eee;
		padding: 10px 10px;
		margin-right: 20px;
	}
	
	p {
		flex: 0 0 40px;
		margin-top: 30px;
	}
	
	.split-line {
		margin-top: 20px;
		width: 100%;
	}
</style>
