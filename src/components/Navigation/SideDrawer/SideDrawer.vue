<template>
	<div>
		<Backdrop :show="open" :clicked="closed" />
		<div :class="attachedClassed">
			<div class="logo">
				<Logo />
			</div>
			<nav>
				<NavigationItems />
			</nav>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Backdrop from "@/components/UI/Backdrop.vue";
import Logo from "@/components/Logo/Logo.vue";
import NavigationItems from "@/components/Navigation/NavigationsItems/NavigationItems.vue";

export default Vue.extend({
	name: "NavigationItem",
	components: {
		Backdrop,
		Logo,
		NavigationItems,
	},
	props: {
		open: {},
        closed: {}
	},
    data () {
        return {
        }
    },
    computed: {
        attachedClassed () {
        let props = 'sideDrawer close';
            if (this.open) {
                props = 'sideDrawer open'
            }
            return props; 
        }
    }
});
</script>
<style scoped>
.sideDrawer {
	position: fixed;
	width: 280px;
	max-width: 70%;
	height: 100%;
	left: 0;
	top: 0;
	z-index: 200;
	background-color: white;
	padding: 32px 16px;
	box-sizing: border-box;
	transition: transform 0.3 ease-out;
}

@media (min-width: 500px) {
	.sideDrawer {
		display: none;
	}
}

.open {
	transform: translateX(0);
}
.close {
	transform: translateX(-100%);
}
.logo {
	height: 11%;
	margin-bottom: 32px;
}
</style>
