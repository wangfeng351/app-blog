<template>
	<div>
		<div class="bl-df-start">
			<div class="bl-col-8 left">
				<div>
					<h3>热帖交流区</h3>
				</div>
				<div class="bl-card c" v-for="(article, index) in articles" :key="index">
					<div class="title-colum bl-df-between">
						<p class="bl-col-8 bl-sub-title">
							<router-link :to= "{ path: '/article/' + article.id}">{{article.title}}</router-link>
							</p>
						<div class="bl-df-around bl-col-4 bl-msm-font">
							<span>提问人:{{article.authorId}}</span>
							<span>回复数:{{article.forwardAccount}}</span>
							<span>关注数:{{article.likeAccount}}</span>
						</div>
					</div>
				</div>
			</div>
			<div class="bl-col-4 right">
				<h3>荣誉榜</h3>
				<div class="bl-df-c-center" v-for="(user, index) in users.slice(20,23)" :key = "index">
				<div class = "bl-right-sideCard bl-df-left">
					<div class="bl-md-avatar" @click="jump-personal">
						<img :src="user.avatar" class="bl-btn-circle" alt="" @click="gotoPersonalDetail(user.id)">
					</div>
					<div class="bl-df-c-center">
						<p class="bl-md-font bl-bd-font">{{user.nickname}}</p>
						<p class="bottom bl-df-between">
							<span>文章数：0</span>
							<span>粉丝量:{{user.fans}}</span>
						</p>
					</div>
				</div>
				</div>
				<h3>论坛标兵</h3>
				<div class="bl-df-c-center" v-for="(user, index) in users.slice(14,18)" :key="index">
					<div class="bl-right-sideCard bl-df-left">
						<div class="bl-md-avatar" @click="jump-personal">
							<img :src="user.avatar" class="bl-btn-circle" alt="" @click="gotoPersonalDetail(user.id)">
						</div>
						<div class="bl-df-c-center">
							<p class="bl-md-font bl-bd-font">{{user.nickname}}</p>
							<p class="bottom bl-df-between">
								<span>文章数：0</span>
								<span>粉丝量:{{user.fans}}</span>
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
				articles: [],
				users: []
			}
		},

		created: function() {
			this.axios.get(this.GlOBAL.servelUrl + '/article').then(response => {
					this.articles = response.data.data;
				}),
			this.axios.get(this.GlOBAL.servelUrl + '/users').then(res => {
		     	this.users = res.data.data;
				console.log(res.data.data);
				})
		},

		methods: {

		}

	}
</script>

<style scoped>
	.title-colum {
		height: 30px;
		width: 100%;
		margin-top: 10px;
	}

	.user-descripiton {
		height: 25px;
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
</style>
