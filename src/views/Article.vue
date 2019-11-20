<template>
	<div>
		<input type="text" value="搜索" v-model="search">
		<button @click="check()">点击</button>
		<!-- <h2>文章信息</h2> -->
		<p v-for="(article, index) in article" :key = "index">
			{{article.title}}
			
			
		</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				articleDto : {
					title : ''
				},
				article : [] ,
				search : ''
			} 
		},
		
		created : function(){
			this.axios.get(this.baseURL+  '/article').then(response=>{
				this.article = response.data.data;
			})
		}	,
		
		methods:{
			
			check () {
				this.articleDto.title = this.search;
				this.axios.post(this.baseURL + '/articles' ,JSON.stringify(this.articleDto)).then(response => {
								this.article = response.data.data;
								alert(response.data.data.length);
								});
			}
		}
	}
	
</script>
   
<style>
	
</style>
