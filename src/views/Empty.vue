<template>
	<div></div>
</template>
<script>
    export default {
		data() {
			return {
				keywords: ''
			};
		},
		
		mounted() {
			this.keywords = this.$route.query.keywords;
			this.$route.push({path: 'article', query: { keywords: this.keywords}});
		}
	}
</script>

<style>
</style>
