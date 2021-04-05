<template>
	<li class="navigationItem">
		<router-link tag="a" :to="link" :exact="exact" :active-class="active">
			<slot />
		</router-link>
	</li>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "NavigationItem",
    props: {
        link: {},
        exact: {},
        active: {},
    },
});
</script>
<style scoped>
/* Mobile first */
.navigationItem {
	box-sizing: border-box;
	margin: 10px 0;
	display: block;
	width: 100%;
}
.navigationItem a {
	text-decoration: none;
	color: #8f5c2c;
	width: 100%;
	box-sizing: border-box;
	display: block;
}

.navigationItem a:hover,
.navigationItem a:active,
.navigationItem a.active {
	color: #40a4c8;
}

@media (min-width: 500px) {
	/*from mobile to desktop */
	.navigationItem {
		margin: 0;
		display: flex;
		height: 100%;
		width: auto;
		align-items: center;
	}
	.navigationItem a {
		color: white;
		height: 100%;
		padding: 16px 10px;
		border-bottom: 4px solid transparent;
	}

	.navigationItem a:hover,
	.navigationItem a:active,
	.navigationItem a.active {
		background-color: #8f5c2c;
		border-bottom: 4px solid #40a4c8;
		color: white;
	}
}
</style>
