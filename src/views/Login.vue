<template>
	<div class="bl-df-center">
		<div class="login-box bl-shadow ">
			<div class="header bl-df-c-jcenter">
				<input type="text" placeholder="请输入手机号" class="bl-input-box" v-model="userDto.mobile">
				<input type="password" placeholder="请输入密码" class="bl-input-box" v-model="userDto.password">
				<input type="text" placeholder="请输入验证码" class="bl-input-box" v-model="userDto.code">
				<img :src="this.codeUrl"  @click="refresh" class="image"  >
			</div>
			<div class="body bl-df-center">
				<button class="bl-btn bl-btn-round bl-btn-default bl-btn-nomar bl-shadow" @click="signIn(userDto)">确定</button>
				<button class="bl-btn bl-btn-round bl-btn-warning bl-btn-nomar bl-shadow">注销</button>
			</div>
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
		  user : [],
		  codeUrl: ''
	    };
	  },
	  
	  created : function(){
		  var number = Math.ceil(Math.random() * 10);
		  this.codeUrl = this.GlOBAL.servelUrl + '/code?num = ' + number;
	  },
	  
	  methods: {
		refresh() {
					this.codeUrl = '';
					var number = Math.ceil(Math.random() * 10);
					this.codeUrl =  this.GlOBAL.servelUrl + '/code?num = ' + number;
				},
		
	    signIn(userDto) {
			/* 将code放入useDto对象中,通过JSON.stringify()转换成JSON数据 */
	      this.axios.post(this.GlOBAL.servelUrl+ '/sign-in', JSON.stringify(this.userDto)).then(response => {
	        alert(response.data.msg);
	        if (response.data.msg === '登录成功') {
	          //将后台的用户信息存入本地存储
	          localStorage.user = JSON.stringify(response.data.data);
			  //路由跳转
	          this.$router.push('/');
	        }
	      });
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
