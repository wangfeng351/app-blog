<template>
	<div>
		<input type="text" id="code" v-model="cd">
		<p>
			{{code.code}}
		</p>
		<button @click="verf">点击验证码</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				code : {},
				cd : null
			} 
		},
		
		created : function(){
				this.axios.get('http://localhost:8080/code').then(res =>{
					this.code = res.data.data;
				})
		},
		methods:{
			verf(){
				if(this.cd == this.code.code){
					alert("验证成功");
				}
			}
		}
	}
	
</script>

<style scoped>
	
</style>
