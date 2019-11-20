
4<template>
	<div>
		<div class="nav bl-df-between">
			<ul class="bl-df-left">
				<li class="bl-logo">
					<img src="http://n.sinaimg.cn/tech/crawl/20171102/Lb2d-fynmzuk2821777.jpg" alt="">
				</li>
				<li class="bl-df-left">
					<input type="text" class="bl-input-box search-input" v-model="search">
					<button @click="check()"  class="bl-btn bl-btn-round search-btn">搜索</button>
				</li>
			</ul>
		<ul class="bl-df-right">
			<li>
				<router-link to = "/">首页</router-link>
			</li>
			<li>
				<router-link to = "/article">文章</router-link>
			</li>
			<li>
				<router-link to = "/album">热门推荐</router-link>
			</li>
			<li>
				<router-link to = "/message">论坛</router-link>
			</li>
			<li v-if="this.user">
				<button class="bl-btn bl-btn-circle bl-avatar">
				<router-link to = "/personal">
					<img :src="this.user.avatar" alt="">
				</router-link>
				</button>
			</li>
			<li v-if="this.user" @click="logout()">
				<router-link to = "/">退出</router-link>
			</li>
			<li v-if="!this.user">
				<router-link to = "/login">登录</router-link>
			</li>
		</ul>
		</div>
		<div>
		<router-view class="bl-container"/>
		</div>
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
				search : '',
				user : JSON.parse(localStorage.getItem("user"))
			} 
		},
		
		created : function(){
			
		}	,
		
		methods:{
			
			check () {
				this.articleDto.title = this.search;
				this.axios.post(this.baseURL+ '/articles' ,JSON.stringify(this.articleDto)).then(response => {
								this.article = response.data.data;
								alert(response.data.data.length);
								this.$router.push("/article");
								});
				
			},
			
			logout(){
				localStorage.clear();
			}
		}
	}
</script>

<style scoped>
	.nav {
		height: 60px;
		width: 100%;
		padding-left: 60px;
		padding-right: 60px;
		background-color: #1E9FFF;
		margin: 0 auto;
	}
	
	img {
		border-radius: 50%;
		width: 100%;
		height: 100%;
	}
	
	
	li {
		flex: 0 0 80px;
		font-size: 18px;
		font-weight: 500;
		text-align: center;
	}
	
	.search-btn {
		width: 120px;
		height: 30px;
	}
	
	.seatch-input {
		width: 200px;
		height: 30px;
	}
	
</style>
