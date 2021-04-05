<template>
	<header class="toolbar">
		<DrawerToggle :clicked="drawerToggleClicked" />
		<div class="logo">
			<Logo />
		</div>
		<nav class="desktopOnly">
			<NavigationItems />
		</nav>
	</header>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationItems from "@/components/Navigation/NavigationsItems/NavigationItems.vue";
import Logo from "@/components/Logo/Logo.vue";
import DrawerToggle from "@/components/Navigation/SideDrawer/DrawerToggle/DrawerToggle.vue";

export default Vue.extend({
	name: "Toolbar",
	components: {
        NavigationItems,
        Logo,
        DrawerToggle
    },
	props: {
        drawerToggleClicked: {},
    },
});
</script>
<style scoped>
.toolbar {
	height: 56px;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #703b09;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	box-sizing: border-box;
	z-index: 90;
}

.toolbar nav {
	height: 100%;
}
.logo {
	height: 80%;
}
@media (max-width: 499px) {
	/* from desktop to mobile*/
	.desktopOnly {
		display: none;
	}
}
</style>
