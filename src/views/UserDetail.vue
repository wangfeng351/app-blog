<template>
	<div class="bod">
		<div class="left">
	<ul>
		<li></li>
		<li></li>
	</ul>
	</div>
	<div class="right">
	<router-view class = "container" />
	</div>
	</div>
</template>

<script>
	export default {
		data(){
	        return{
				
			}
		},
		create: function(){
			
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	ul {
		display: flex;
		list-style: none;
		flex-direction: column;
	}
	
	a {
		text-decoration: none;
		font-size: 24px;
		color: #333333;
	}
	
</style>
