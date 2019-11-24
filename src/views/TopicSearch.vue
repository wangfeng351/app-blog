<template>
	<div class="row">
		<div class="bl-df-between topic-card bl-col-12" v-for="(topic, index) in topics.slice(0,10)" :key = "index">
			<div class="bl-col-8 bl-df-left">
				<img :src="topic.logo" alt="" class="topic-log">
				<p class="bl-df-c-center">
					<router-link :to="{ path: '/topic/' + topic.id}">
					<span class="bl-bd-font">{{topic.name}}</span>
					</router-link>
					<span class="bl-meta">共收录了{{topic.articles}},{{topic.follows}}人关注</span>
				</p>
			</div>
			<div class="bl-col-4 bl-df-center">
				<input type="button" value="关注" class="bl-btn care-btn bl-btn-round">
			</div>
		</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
	            topics : []
			}
	
		},
		created() {
			this.axios.get(this.GlOBAL.servelUrl + '/topic').then(res => {
				this.topics = res.data.data;
			})
		},
		methods: {
	
		}
	}
</script>

<style scoped>
	.topic-card {
		width: 100%;
		height: 60px;
		margin-top: 20px;
	}
	
	.topic-log {
		width: 40px;
		height: 40px;
		margin-right: 5px;
		border-radius: 5px;
	}
	
	p {
		width: 100%;
	}
</style>
