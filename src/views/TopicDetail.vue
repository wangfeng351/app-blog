<template>
	<div>
		<h3>专题详情页</h3>
	</div>
</template>

<script>
	export default {
		data() {
				return {
					articleVo: {}
				};
			},
			created() {
				var id = this.$route.params.id;
				this.axios.get(this.GlOBAL.servelUrl + '/topic/' + id).then(res => {
					this.articleVo = res.data.data;
				});
			},
		methods:{
			
		}
	}
</script>

<style>
</style>
