<template>
	<button class="button" :class="btnStyle" v-bind="$attrs" v-on="$listeners">
		<slot />
	</button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "Button",
	components: {},
	props: {
		btnStyle: {
			type: String,
			default: "",
		},
	},
});
</script>
<style scoped>
.button {
	background-color: transparent;
	border: none;
	color: white;
	outline: none;
	cursor: pointer;
	font: inherit;
	padding: 10px;
	margin: 10px;
	font-weight: bold;
}

.button:first-of-type {
	margin-left: 0;
	padding-left: 0;
}
.button:disabled {
	color: #ccc;
	cursor: not-allowed;
}

.success {
	color: #5c9210;
}

.danger {
	color: #944317;
}
.button:hover {
	transform: scale(0.98);
}
</style>
