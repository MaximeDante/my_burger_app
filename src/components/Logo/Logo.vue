<template>
	<div class="logo">
		<img src="@/assets/images/burger-logo.png" alt="myBurger">
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "Logo",
	components: {
	},
	props: {
		height: {},
	},
});
</script>
<style scoped>
.logo{
    background: white;
    padding: 8px;
    height: 100%;
    box-sizing: border-box;
    border-radius: 5px;
}

.logo img{
    height: 100%;
}
</style>
