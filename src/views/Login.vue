<template>
	<div class="bl-df-center">
		<div class="login-box bl-shadow ">
			<div class="header bl-df-c-jcenter">
				<input type="text" placeholder="请输入手机号" class="bl-input-box" v-model="userDto.mobile">
				<input type="password" placeholder="请输入密码" class="bl-input-box" v-model="userDto.password">
				<input type="text" placeholder="请输入验证码" class="bl-input-box" v-model="userDto.code">
				<img   @click="changeVerify()" class="image" src="http://localhost:8080/code" alt="">
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
	      }
	    };
	  },
	  
	  methods: {
		changeVerify(e){
			alert("1");
			 const source = e.src; // 获得原来的 src 中的内容
			            var s = source.substring(0, index); // 从 source 中截取 index 之前的内容 ( index 以及 index 之后的内容都被舍弃 )
			            //console.log( "s : " + s  ) ;
			
			            var date = new Date(); // 创建一个 Date 对象的 一个 实例
			            var time = date.getTime(); // 从新创建的 Date 对象的实例中获得该时间对应毫秒值
			            e.src = s + "?time=" + time; // 将 加了 尾巴 的 地址 重新放入到 src 上
			
		},
		
	
	    signIn(userDto) {
			/* 将code放入useDto对象中,通过JSON.stringify()转换成JSON数据 */
	      this.axios.post('http://localhost:8080/sign-in', JSON.stringify(this.userDto)).then(response => {
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
