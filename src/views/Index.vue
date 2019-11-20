<template>
	<div class="bl-container bl-df-jcenter">
		<div class="bl-col-8 left">
			<input type="search" v-model="ArticleDto.title">
			<button @click="search(ArticleDto.title)" >搜索</button>
			<!-- 主页轮播 -->
			<div class="head">
				<div class="carousel-wrap">
					<transition-group tag="ul" class="slide-ul" name="slide">
						<li v-for="(art,index) in avatars" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
								<img :src="art">
						</li>
					</transition-group>
				</div>
				
			</div>
			<p class="bl-title">文章推荐</p>
			<hr>
			<div class="bl-card" v-for="(article, index) in articles.slice(0,4)" :key = "index">
				<div class="bl-article-recommendation bl-df-center ">
					<div class="ar-avatar">
						<img :src = "'https://images.weserv.nl/?url='+article.avatar">
					</div>
					
					<div class="ar-right bl-df-c-center">
						<p class="bl-title">{{article.title}}</p>
						<p class="article-description">{{article.description}}</p>
						<p class="ar-comment bl-df-between">
							<ul>
								<span>个人博客</span>
							    <span>
								     创建时间:{{article.createTime.date.year}}-{{article.createTime.date.month}}-{{article.createTime.date.day}}
								</span>
							</ul>
							<ul>
							     <span>转发量:{{article.forwardAccount}}</span>
							     <span>评论人数:{{article.commentAccount}}</span>
							     <span>关注量{{article.likeAccount}}</span>
							</ul>
						</p>
					</div>
				</div>
			<hr class="split-line">
			</div>
		</div>
		<div class="bl-col-4 right">
			<!-- 博客专家 -->
			<div class="bl-df-c-center" v-for="(users, index) in users.slice(0,3)" :key = "index">
			<div class = "bl-right-sideCard bl-df-left">
				<div class="bl-content-avatar" @click="jump-personal">
					<img :src="users.avatar" class="bl-btn-circle" alt="" @click="gotoPersonalDetail(users.id)">
				</div>
				<div class="bl-df-c-center">
					<p class="bl-md-font bl-bd-font">{{users.nickname}}</p>
					<p class="bl-msm-font user-descripiton">{{users.introduction.substring(0,30)+"..."}}</p>
					<p class="bottom bl-df-between">
						<span>文章数：0</span>
						<span>粉丝量:{{users.fans}}</span>
					</p>
				</div>
			</div>
			</div>
			
			<!-- 博客周排行榜 -->
			<div>
				<h2>博客周排行榜</h2>
				<div class="bl-df-c-center" v-for="(users, index) in users.slice(10,14)" :key = "index">
				<div class = "bl-right-sideCard bl-df-left">
					<div class="bl-content-avatar" @click="jump-personal">
						<img :src="users.avatar" class="bl-btn-circle" alt="" @click="gotoPersonalDetail(users.id)">
					</div>
					<div class="bl-df-c-center">
						<p class="bl-md-font bl-bd-font">{{users.nickname}}</p>
						<p class="bl-msm-font user-descripiton">{{users.introduction.substring(0,30)+"..."}}</p>
						<p class="bottom bl-df-between">
							<span>文章数：0</span>
							<span>粉丝量:{{users.fans}}</span>
						</p>
					</div>
				</div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ArticleDto : {
					title : ''
				},
				articles : [],
				users : [],
				avatars : [
					"https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg",
				    "https://pic4.zhimg.com/v2-3be05963f5f3753a8cb75b6692154d4a_1200x500.jpg",
					"http://static.runoob.com/images/demo/demo2.jpg",
					"https://uploadfile.huiyi8.com/up/a2/e3/83/a2e3832e52216b846c80313049591938.jpg"
				],
				currentIndex: 0,
				timer: null,
				
				user: JSON.parse(localStorage.getItem('user'))
			}
		},
		created : function() {
			
			/* 查询所有文章 */
			this.axios.get(this.baseURL+  '/article').then(response=>{
				this.articles = response.data.data;
			}),
			
			/* 动画自动播放 */
			this.$nextTick(() => {
				this.timer = setInterval(() => {this.autoPlay()}, 3000)
			}),
			
			/* 查询所有用户 */
			this.axios.get(this.baseURL+ '/users').then(res =>{
				this.users = res.data.data;
				console.log(res.data.data);
			})
		},
		
		methods:{
			
			gotoPersonalDetail(id) {
				 this.$router.push('/persondeatil?id=' + id);
			},
			
			go() {
				this.timer = setInterval(() => {
					this.autoPlay()
				}, 3000)
			},
			stop() {
				clearInterval(this.timer)
				this.timer = null
			},
			autoPlay() {
				this.currentIndex++
				if (this.currentIndex > 3) {
					this.currentIndex = 0
				}
			},
		}
	}
</script>

<style scoped>
	
	.left {
		padding: 20px 20px ;
	}
	
	.right {
		margin: 0;
		height: 800px;
		background-color: rgba(0, 0, 0,0.2);
	}
	
	.head {
		width: 100%;
		height: 260px;
		margin-bottom: 20px;
	}
	
	.head img {
		width: 100%;
		height: 100%;
	}
	
	hr {
		margin-top: 10px;
		margin-bottom: 10px;
		border: 2px solid #DDDDDD;
		width: 100%;
	}
	
	p {
		margin-top: 5px;
	}
	
	ul span {
		
		margin-left: 10px;
	}
	
	.ar-title {
		height: 30px;
		width: 100%;
	}
	.ar-avatar {
		width: 240px;
		height: 140px;
		border: 1px solid #009688;
	}
	
	.ar-avatar img {
		width: 100%;
		height: 100%;
	}
	
	.ar-right {
		height: 100%;
		width: 100%;
		padding: 10px 10px;
	}
	
	.article-description {
		width: 100%;
		margin-top: 10px;
		height: 120px;
		font-size: 12px;
		line-height: 20px;
		font-family: "雅黑";
	}
	
	.ar-comment {
		margin-top: 10px;
		width: 100%;
		font-size: 12px;
	}
	
	.split-line {
		margin-top: 30px;
		border: 0.5px solid;
	}
	
	.bottom {
		font-size: 12px;
		width: 200px;
	}
	
	.user-descripiton {
		height: 25px;
	}
</style>
