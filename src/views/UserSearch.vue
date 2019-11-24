<template>
	<div class="row">
		<div class="bl-df-between bl-col-12 user-row" v-for="(user, index) in users.slice(0,6)" :key = "index">
        <div class="bl-df-left bl-col-8">
			<router-link :to="{ path: '/user/' + user.id}">
			 <img :src="user.avatar" alt="" class="bl-md-avatar bl-btn-circle">
			 </router-link>
			 <ul>
				 <router-link :to="{ path: '/user/' + user.id}">
				 <li class="bl-md-font bl-bd-font">{{user.nickname}}</li>
				 </router-link>
				 <li class="bl-meta">关注：{{user.likeAccount}}    |    粉丝：{{user.fans}}    |     文章：{{user.articles}}</li>
				 <li class="bl-meta">写了{{user.follows}}字，获得了{{user.likeAccount}}个喜欢</li>
			 </ul>
		 </div>
		 <div class="bl-col-4 bl-df-center">
			 <button class="care-btn bl-btn bl-btn-round">关注</button>
		 </div>
		 </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
                users : []
			}

		},
		created() {
			this.axios.get(this.GlOBAL.servelUrl + '/users').then(res => {
				this.users = res.data.data;
			})
		},
		methods: {

		}
	}
</script>

<style scoped>
	
	
	li {
		margin-top: 3px;
	}
	
	.user-row {
		margin-top: 20px;
	}
	
	.b {
		background-color: #009688;
	}
</style>
