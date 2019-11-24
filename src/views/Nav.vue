4<template>
	<div>
		<div class="nav bl-df-between">
			<ul class="bl-df-left">
				<li class="bl-logo">
					<img src="http://n.sinaimg.cn/tech/crawl/20171102/Lb2d-fynmzuk2821777.jpg" alt="">
				</li>
				<li class="bl-df-left">
					<input type="text" class="bl-input-box search-input" v-model="keywords">
					<button @click="search()" class="bl-btn bl-btn-round search-btn">搜索</button>
				</li>
			</ul>
			<ul class="bl-df-right">
				<li>
					<router-link to="/">首页</router-link>
				</li>
				<li>
					<router-link to="/recommend">推荐</router-link>
				</li>
				<li>
					<router-link to="/forum">论坛</router-link>
				</li>
				<li>
					<router-link to="/subscriptioncolumn">订阅专栏</router-link>
				</li>
				<li v-if="this.user">
					<button class="bl-btn bl-btn-circle bl-avatar">
						<router-link to="/personal">
							<img :src="this.user.avatar" alt="">
						</router-link>
					</button>
				</li>
				<li v-if="this.user" @click="logout()">
					<router-link to="/">退出</router-link>
				</li>
				<li v-if="!this.user">
					<router-link to="/signIn">登录</router-link>
				</li>
			</ul>
		</div>
		<div>
			<router-view class="bl-container" />
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				keywords: '',
				user: JSON.parse(localStorage.getItem("user"))
			}
		},

		created: function() {

		},

		methods: {
			
			search() {
				 /* 获取网页地址url */
				 var currentPath = window.location.href;
				 /* 锁定到最后一个"="的位置 */
				 var start = currentPath.lastIndexOf("/");
				 /* 取出"="之后的字符串   左闭右开*/
				 var end = currentPath.indexOf("?");
				 var id = currentPath.substring(start, end);
				 if(id != '/search' || currentPath != '/search/article' || currentPath != '/search/topic' || currentPath != '/search/user'){
				 this.$router.push({
					path: '/search',
					query: {
						keywords: this.keywords
					}
				})}else {
					this.$router.push({path:'/empty', query:{keywords: this.keywords}})
				}
			},

			logout() {
				this.user = null;
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
