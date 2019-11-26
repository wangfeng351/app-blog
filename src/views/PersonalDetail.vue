<template>
	<div class="bl-container">
		<div class="background-img">
             <img src="http://scimg.dameigong.cn/b/20180304/20180304215852_79126.jpg" alt="">
		</div>
		<div>
			<div class="bl-df-between-end body-top">
				<ul class="bl-df-center">
					<li>
						<img :src="user.avatar" class="avatar bl-mr" alt="">
					</li>
					<li class="bl-df-j-between bt-card">
						<span><h2>{{user.nickname}}</h2></span>
						<span class="bl-sub-title">查看详细资料</span>
					</li>
				</ul>
				<span class="data bl-df-center">编辑个人资料</span>
			</div>
			<div class="body-bottom bl-df-start ">
				<div class="bl-col-8 left bl-df-c-center">
					<div class="tab bl-left">
						<span class="tab-item" :class="{ active: isActive}" @click="changeTab">动态</span>
						<span class="tab-item" :class="{ active: !isActive}" @click="changeTab">回答</span>
					</div>
					<div class="tab-box" v-if="show&&selected===0">
						<h3>我的动态</h3>
					</div>
					<div class="tab-box" v-if="show&&selected===1">
						<h3>我的回答</h3>
					</div>
				</div>
				<div class="bl-col-4 right bl-df-c-jcenter">
                    <p class="bl-df-between creator-card">
						<span class="bl-md-font bl-bd-font">创作者中心</span>
						<span class="bl-bd-font bl-color-blue">去开通></span>
					</p>
					<ul class="bl-df-center care-card">
						<li class="bl-df-c-jcenter bl-col-6">
							<span>关注了</span>
							<span>{{user.follows}}</span>
						</li>
						<hr class="spiti-hr">
						<li class="bl-df-c-jcenter bl-col-6">
							<span>关注者</span>
							<span>{{user.fans}}</span>
						</li>
					</ul>
					<p>关注的话题</p>
					<p>关注的专栏</p>
					<p>关注的问题</p>
					<p>关注的收藏夹</p>
					<p>个人主页被浏览了次</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {

			return {
				show: true,
				isActive: true,
				selected: 0,
				user: JSON.parse(localStorage.getItem("user"))
			}
		},
		created: function() {
			
		},
		methods: {
            changeTab(){
				this.isActive = !this.isActive;
				this.selected = this.selected == 0 ? 1 : 0;
			}
		}
	}
</script>

<style scoped>
	.background-img {
		position: relative;
		margin-top: 20px;
		width: 90%;
		height: 160px;
		background-color: #969696;
	}

	.body-top {
		width: 90%;
		height: 120px;
		padding: 20px 20px;
		background-color: #f6f6f6;
	}

	.avatar {
		position: relative;
		margin-top: -70px;
		width: 160px;
		height: 160px;
		border-radius: 5px;
		border: 1px solid #000000;
	}

    .bt-card {
		height: 80px;
	}
	
	.body-bottom {
		position: relative;
		width: 90%;
		margin-top: 10px;
	}

	.left {
		padding: 10px 10px;
		margin-right: 20px;
	}

     .data {
		 height: 40px;
		 width: 120px;
		 border-radius: 5px;
		 border: 1px solid #0084FF;
	 }
	 
	.right {
		height: 100%;
	}

	.tab {
		width: 100%;
		height: 40px;
		background-color: #f6f6f6;
	}

	.tab-item {
		cursor: pointer;
		flex: 0 0 40px;
		margin-right: 20px;
		text-align: center;
		line-height: 38px;
	}

	.active {
		color: #333333;
		font-weight: 600;
		border-bottom: 2px solid #0084ff;
	}

	.tab-box {
		height: 500px;
		background-color: #f6f6f6;
		color: #eee;
		width: 100%;
	}
	
	.creator-card {
		padding: 10px;
		height: 60px;
		width: 95%;
		background-color: #f6f6f6;
	} 
	
	.care-card {
		margin-top: 10px;
		height: 80px;
		width: 95%;
		background-color: #f6f6f6;
	}
	
	.spiti-hr {
		width: 1px;
		height: 100%;
		background-color: #fff;
	}
	
	p {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
		border-bottom: 1px solid;
		height: 40px;
		width: 95%;
	}
</style>
