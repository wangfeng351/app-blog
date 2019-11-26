<template>
	<div class="body">
		<div class="bl-header bl-col-12 bl-df-center">
			<p class="bl-lg-font title bl-center">技能提升       思维升级       尽在订阅专栏</p>
		</div>
		<div class="bl-container">
			<div class="bl-body bl-df-c-center">
					<!-- <div class="first-row">
						<div class="bl-card bl-col-4  top-card" v-for="(avatar, index) in avatars" :key = "index">
							<img :src="'https://images.weserv.nl/?url=' + avatar" alt="">
						</div>
						s
					</div> -->
					<div class="second-row">
					    <div class="bl-card bl-col-4 bottom-card" v-for="(sub, index) in subscription" :key = "index">
					    <div class="card-head">
						    <img :src="'https://images.wesersv.nl/?url=' + sub.subScription.thumbNail" alt="">
					    </div>
					    <div class="card-body bl-df-c-center">
						    <p class="bl-lg-font">{{sub.subScription.description}}</p>
						    <p class="bl-sub-title">初学者必会</p>
						    <p class="bl-df-between bl-sm-font  price-p">
								<span>{{sub.subScription.chaptersNumber}}        </span>
								<span>{{sub.subScription.subScriptionAccount}}</span>
							</p>
						    <p class="bl-md-font bl-df-between">
								<span><!-- <img :src="sub.authorAvatar" alt=""> -->作者:{{sub.user.nickName}}</span>
								<span>￥{{sub.subScription.price}}.00</span>
							</p>
						    <p class="bl-df-center"><button class="bl-btn bl-btn-round sub-scription-btn bl-md-font">订阅</button></p>
					    </div>
					    </div>
						<div class="bl-col-12 bl-df-center">
							<button @click="loadMore" class="bl-btn bl-btn-round load-btn">加载更多</button>...</div>
					</div>
			
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				articleDto : {
					title : '',
				},
				avatars : [
					"https://s1.51cto.com/images/blog/201909/19/74f160111fe842417e361a2c71505d35.jpg",
				    "https://s1.51cto.com/images/blog/201909/19/308edbe8c48f9dbf7cebf0e26d4d8c43.jpg",
					"https://s1.51cto.com/images/blog/201903/26/cc7aa36a6e610ce9e97e8f67672ab283.png",
				],
				subscription : [] ,
				search : '',
				currentPage: 1,
				count:6,
				busy:true
				} 
		},
		
		created : function(){
			this.axios.get(this.GlOBAL.servelUrl + '/colum', {
				params: {
					page: this.currentPage,
					count : this.count
				}
			})
			.then(res =>{
				this.subscription = res.data.data;
			});

		}	,
		
		methods:{
			loadMore(){
				// this.busy = true;
				// setTimeout(() => {
					this.currentPage = this.currentPage+1;
					this.axios.get(this.GlOBAL.servelUrl + '/colum', {
						params: {
							page : this.currentPage,
							count : this.count
						}
					})
					.then(res =>{
						console.log(res.data.data.length);
						console.log(res.data.data);
						let temp = [];
						temp = res.data.data;
						for(var i = 0; i< temp.length; i++){
							// splice替换下标为currentPage*count,长度为0的值为temp[i]
							this.subscription.splice(this.currentPage * this.count, 0, temp[i]);
						}
						console.log(this.subscription.length);
					});
					// this.busy = false;
				// }, 1000);
				
				    
			}
		}
	}
	
</script>
   
<style scoped>
	
	.bl-header {
		height: 100px;
		width: 100%;
		background-image: linear-gradient(to right, #8fadb0, #ddd, #8fadb0);
	}
	
	.load-btn {
		width: 120px;
		height: 40px;
	}
	
	.title {
		color: #225460;
	}
	
	.bl-body {
		display: flex;
		position: relative;
	}
	
	.first-row {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		margin-top: 50px;
	}
	
	.bottom-card {
		height: 400px;
		margin-right: 20px;
		padding: 15px 15px;
		border-radius: 5px;
		margin-top: 40px;
		background-color: white;
		box-shadow: 2px 2px 6px 2px #EEEEEE;
		transition: all 0.2s linear;
		cursor: pointer;
	}
	
	.bottom-card:hover {
		margin-top: 30px;
		
		/* 鼠标移上去之后变大 */
		/* transform: scale(1.4); */
	}
	
	.sub-scription-btn {
		height: 50px;
		width: 90%;
		background-color: rgb(37, 39, 40);
		color: #eee;
	}
	
	.card-head {
		height: 180px;
	}
	
	.card-body {
		height: 220px;
		width: 100%;
	}
	
	.second-row {
		margin-top: 30px;
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		height: 600px;
	}
	
	.top-card {
		border-radius: 5px;
		height: 140px;
		border:1px solid #000000;
		margin-right: 15px;
	}
	
	img {
		width: 100%;
		height: 100%;
	}
	
	p {
		margin-top: 15px;
		width: 100%;
	}
	
	.price-p {
		margin-top: 10px;
		margin-bottom: 10px;
	}
</style>
