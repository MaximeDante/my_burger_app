<template>
	<div @click="clicked" class="drawerToggle">
		<div></div>
		<div></div>
		<div></div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "NavigationItem",
	props: {
		clicked: {},
	},
});
</script>
<style scoped>
.drawerToggle {
	width: 40px;
	height: 100%;
	display: flex;
	flex-flow: column;
	justify-content: space-around;
	align-items: center;
	padding: 10px 0;
	box-sizing: border-box;
	cursor: pointer;
}

.drawerToggle div {
	width: 90%;
	height: 3px;
	background-color: white;
}

@media (min-width: 500px) {
	.drawerToggle {
		display: none;
	}
}
</style>
