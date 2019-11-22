<template>
	<div>
		<div>
			
		</div>
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
				
			}
		}
	}
	
</script>

<style scoped>
	
</style>
