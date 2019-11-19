<template>
	<div>
		<div class=" bl-df-center">
			<div class="bl-col-8 left">
				<div class="top bl-df-between">
					<div class="bl-df-start">
						<div class="bl-content-avatar">
							<img :src="user.avatar" alt="" class="bl-btn-circle">
						</div>
						<div class="bl-df-c-center">
							<p class="bl-lg-font bl-bd-font">{{user.nickname}}</p>
							<p class="bl-sub-title">
								<ul class="bl-df-left">
									<li>关注数</li>
									<li>{{user.fans}}</li>
									<li>{{user.articles}}</li>
									<li>{{user.id}}</li>
								</ul>
							</p>
							<p class="bl-msm-font">account</p>
						</div>
					</div>
					<div>
						<button class="btn bl-btn bl-btn-round bl-md-font">
							发私信
						</button>
						<button class="btn bl-btn bl-btn-round bl-md-font">
							关注
						</button>
					</div>
				</div>
			    
				<div class="bl-df-c-center bottom">
				<div class="tab">
			    	<span class="tab-item">文章</span>
			    	<span class="tab-item">动态</span>
					<span class="tab-item">最新评论</span>
					<span class="tab-item">热门</span>
			    </div>
				<div class="tab-box">
					<div class="bl-df-c-center" v-for="(use, index) in userArticle.slice(0,4)" :key = "index">
						<div class="bl-article-recommendation at bl-df-between-up">
							<div class="bl-df-c-center">
								<p class="bl-lg-font bl-bd-font">{{use.title}}</p>
								<p class="bl-msm-font description">文章简述...{{use.nickname}}</p>
								<p class=" bl-df-around">
									<span>{{user.fans}}</span>
									<span>123</span>
									<span>{{use.likeAccount}}</span>
									<span>12321</span>
								</p>
							</div>
							<div class="ar-avatar">
								<img :src="'https://images.weserv.nl/?url='+ use.avatar" alt="">
							</div>
						</div>
					</div>
				</div>
				</div>
				
			</div>
			<div class="bl-col-4 right">
				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			
			return {
				user:{},
				userArticle : []
			}
		},
		created: function() {
			/* 获取网页地址url */
		    var query = window.location.href;
            /* 锁定到最后一个"="的位置 */
			var i = query.lastIndexOf("=");
			/* 取出"="之后的字符串   左闭右开*/
			var id = query.substring(i+1);
			/* 获取对应作者id的信息 */
			this.axios.get('http://localhost:8080/users/' + id).then(res =>{
				this.user = res.data.data;
			}),
			
			/* 两表联查 */
			this.axios.get('http://localhost:8080/article/' + id).then(res =>{
				this.userArticle = res.data.data;
				console.log(res.data.data);
			})
			
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.left{
		border: 1px solid #000000;
		margin-right: 10px;
		height: 400px;
	}
	.right{
		border: 1px solid #1E9FFF;
		height: 400px;
	}
	
	.btn {
		width: 80px;
		height: 30px;
		border: 1px solid #333333;
	}
	
	li {
		flex: 0 0 60px;
	}
	
	
	p {
		width: 100%;
	}
	
	.top {
		height: 80px;
    }
	
	.tab {
		width: 100%;
		margin-top: 30px;
		display: flex;
		align-items: center;
		height: 60px;
		background-color: #ffffff;
	}
	
	.tab-item {
		cursor: pointer;
		flex: 0 0 100px;
		margin-right: 10px;
		line-height: 38px;
	}
	
	.tab-box {
		height: 600px;
		width: 100%;
	}
	.at {
		
		border: 2px solid #000000;
	}
	
	.ar-avatar {
		width: 240px;
		height: 140px;
		border: 1px solid #009688;
	}
	
	.description {
		height: 60px;
	}
	
	
</style>
