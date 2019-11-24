<template>
	<div class="bl-df-center">
		<div class="login-box bl-shadow ">
			<div class="header bl-df-c-jcenter">
				<input type="text" placeholder="请输入手机号" class="bl-input-box" v-model="userDto.mobile">
				<input type="password" placeholder="请输入密码" class="bl-input-box" v-model="userDto.password">
				<input type="text" placeholder="请输入验证码" class="bl-input-box" v-model="userDto.code">
				<img @click="refresh" class="image" ref="codeImg" />
			</div>
			<div class="body bl-df-center">
				<button class="bl-btn bl-btn-round bl-btn-default bl-btn-nomar bl-shadow" @click="signIn(userDto)">确定</button>
			</div>
			<router-link to="/signUp">注册新账号?</router-link>
		</div>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
	      userDto: {
	        mobile: '',
	        password: '',
			code: ''
	      },
		  token:'',
		  user : [],
		  codeUrl: ''
	    };
	  },
	  
	  created : function(){
		  this.axios.get(this.GlOBAL.servelUrl + '/code', { responseType: 'blob' }).then(res => {
		  			// console.log(res);
		  			var img = this.$refs.codeImg;
		  			let url = window.URL.createObjectURL(res.data);
		  			img.src = url;
		  			console.log(res.headers);
		  			//取得后台通过响应头返回的sessionId的值
		  			this.token = res.headers['access-token'];
		  			console.log(this.token);
		  		});
	  },
	  
	  methods: {
		refresh() {
					this.codeUrl = '';
					var number = Math.ceil(Math.random() * 10);
					this.codeUrl =  this.GlOBAL.servelUrl + '/code?num = ' + number;
				},
		
	    signIn(userDto) {
                this.axios({
					method: 'post',
					url: this.GlOBAL.servelUrl + '/sign-in',
					data: JSON.stringify(this.userDto),
					headers:{
						'Access-Token': this.token
					}
				}).then(res =>{
					if(res.data.msg === "登录成功"){
						alert(res.data.msg);
						localStorage.setItem('user', JSON.stringify(res.data.data));
						this.$router.push('/');
					}else {
						alert(res.data.msg);
						this.userDto.code = ''
					}
				})	 ;     
	    }
	  }
	  
	};
</script>

<style scoped>
	.login-box {
		position: absolute;
        top: 200px;
		height: 300px;
		width: 400px;
		border-radius: 5px;
		margin: 0 auto;
	}
	
	.image {
		width: 100px;
		height: 40px;
	}
	
	.header {
		height:200px ;
		width: 400px;
	}
</style>
