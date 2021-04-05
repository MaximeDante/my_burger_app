<template>
	<div v-if="show" class="backdrop" @click="clicked">

    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "Backdrop",
	components: {},
	props: {
		show: {
			type: Boolean,
			default: false,
		},
        clicked: {}
	},
});
</script>
<style scoped>
.backdrop{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5); 
}
</style>
