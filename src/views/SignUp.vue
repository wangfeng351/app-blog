<template>
	<div class="bl-df-center body">
		<div class="bl-card signUp-box">
			<input type="text" placeholder="输入手机号" v-model="userDto.mobile">
			<input type="password" placeholder="输入密码" v-model="userDto.password">
			<input type="password" placeholder="确认密码" v-model="password">
			<button class="sure-btn bl-btn" @click="signUp(userDto)">确认注册</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				userDto: {
					mobile: '',
					password: ''
				},
				password: ''
			};
		},
		created() {

		},
		methods: {
			signUp(userDto) {
				this.axios({
					method: 'post',
					url: this.GlOBAL.servelUrl + '/users/sign-up',
					data: JSON.stringify(this.userDto)
				}).then(res => {
					if (res.data.msg === '添加成功') {
						alert('注册成功');
						this.$router.push('/signIn');
					} else {
						alert(res.data.msg);
					}
				});
			}
		}
	}
</script>

<style scoped>
	.body {
		background-image: url(../assets/image/bg1.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		height: 750px;
	}

	.signUp-box {
		position: relative;
		width: 350px;
		height: 350px;
		background-color: #1E9FFF;
	}

	input {
		width: 90%;
		height: 40px;
		margin-top: 20px;
		border: none;
		outline: none;
		background-color: rgba(0, 0, 0, 0);
		border-bottom: 1px solid #333333;
	}

	.sure-btn {
		margin-top: 50px;
		width: 90%;
		height: 40px;
	}
</style>
