<template>
	<div class="bl-container">
		<h1 class="artile-title">{{articleVo.title}}</h1>
		<div class="card bl-df-left">
			<img :src="articleVo.avatar" alt="" class="bl-logo bl-btn-circle bl-mr">
			<ul>
				<li class="bl-md-font">
				{{articleVo.nickname}}
				<button class="care-btn">关注</button>
				</li>
				<li class="bl-meta bl-mt">
				{{articleVo.createTime.date.year}}.
				{{articleVo.createTime.date.month}}.
				{{articleVo.createTime.date.day}}    
				{{articleVo.createTime.time.hour}}:
				{{articleVo.createTime.time.minute}}
				{{articleVo.createTime.time.second}}
				评论数:{{articleVo.commentAccount}}
				关注量:{{articleVo.likeAccount}}
				</li>
			</ul>
		</div>
		
		<div v-html="articleVo.content" class="article-content">
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
				return {
					articleVo: {}
				};
			},
			created() {
				var id = this.$route.params.id;
				this.axios.get(this.GlOBAL.servelUrl + '/article/' + id).then(res => {
					this.articleVo = res.data.data;
				});
			},
		methods:{
			
		}
	}
	
</script>

<style scoped>
	.article-content {
		line-height: 25px;
		margin-top: 40px;
	}
	
	.artile-title {
		margin-top: 20px;
	}
	
	.care-btn {
		margin-top: 2px;
		cursor: pointer;
		width: 60px;
		height: 25px;
		border-radius: 10px;
		font-size: 14px;
		border: 1px solid rgb(238, 126, 103);
		background-color: rgba(0,0,0,0);
		color: rgb(238, 126, 103);
	}
</style>
