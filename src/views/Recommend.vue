<template>
	<div class="bl-container">
		<div class="header bl-df-between">
			<h2>推荐博主</h2>
			<p class="bl-sub-title bl-bd-font">
			<a href="https://www.zhihu.com/question/21637013">如何成为一个让人喜欢的博主?</a>
			</p>
		</div>
		<div class="bl-row">
			<div class="blogger-card bl-col-4 bl-card" v-for="(user, index) in users" :key = "index">
				<router-link :to="{path:'/user/' + user.id}">
				<img :src="user.avatar" alt="" class="bl-lg-avatar bl-btn-circle us-avatar bl-cursor">
				</router-link>
				<router-link :to="{path:'/user/' + user.id}">
				<p class="bl-lg-font bl-bd-font bl-cursor">{{user.nickname}}</p>
				</router-link>
				<p class="bl-sub-title introduction-p">{{user.introduction}}</p>
				<p class="bl-df-between a-p bl-meta">
					<span>写过文章</span>
					<span>{{user.follows}}人关注</span>
				</p>
				<p>
					<input type="button" value="关注" class="bl-md-font bl-btn bl-btn-round care-btn">
				</p>
				
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				users: []
			} ;
		},
		
		created(){
					this.axios.get(this.GlOBAL.servelUrl+ '/users').then(res =>{
						this.users = res.data.data;
				})
		},
		methods:{
			verf(){
				
			}
		}
	}
	
</script>

<style scoped>
	.header {
		padding-right: 60px;
		padding-left: 60px;
		margin-top: 30px;
		color: ##333;
		height: 100px;
		background-image: url(../assets/image/bg.jpg);
		background-color: #1E9FFF;
	}
	
	.blogger-card {
		margin-top: 60px;
		height: 350px;
		background-color: rgb(247, 247, 247);
		transition: all 0.2s linear;
	}
	
	.blogger-card:hover {
		box-shadow: 1px 1px 10px 10px #eee;
	}
	.us-avatar {
		position: relative;
		margin-top: -40px;
		margin-bottom: 30px;
	}
	
	.care-btn {
		background-color: rgb(66, 192, 46);
		color: #eee;
		width: 200px;
		height: 40px;
	}
	
	.introduction-p {
		margin-top: 25px;
		width: 60%;
		height: 40px;
		text-align: center;
		margin-bottom: 25px;
	}
	
	.a-p {
		width: 50%;
		margin-bottom: 30px;
	}
</style>
