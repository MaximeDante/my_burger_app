<template>
	<div>
		<Backdrop :show="show" :clicked="modalClosed" />
		<div v-if="show" class="modal" @click="clicked" :class="show ? slideIn : slideOut">
            <slot />
        </div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Backdrop from '@/components/UI/Backdrop.vue';

export default Vue.extend({
	name: "Modal",
	components: {
		Backdrop,
	},
	props: {
		show: {
			type: Boolean,
			default: false,
		},
		modalClosed: {},
	},
});
</script>
<style scoped>
.modal {
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 70%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    left: 15%;
    top: 0%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
}
.slideIn {
    transform: translateY(0);
    opacity: 1;
}

.slideOut {
   transform: translateY(-100);   
   opacity: 0;
}


@media (min-width: 600px) {
    .modal {
        width: 500px;
        left: calc(50% - 250px);
    }
}
</style>
