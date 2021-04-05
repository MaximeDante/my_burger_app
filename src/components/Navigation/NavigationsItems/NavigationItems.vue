<template>
	<ul class="navigationItems">
        <NavigationItem :link="'/'"> Burger Builder</NavigationItem>
        <NavigationItem :link="'/orders'">Orders</NavigationItem>
    </ul>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationItem from "@/components/Navigation/NavigationsItems/NavigationItem/NavigationItem.vue";

export default Vue.extend({
	name: "NavigationItems",
	components: {
		NavigationItem,
	},
	props: {
	},
});
</script>
<style scoped>
.navigationItems{
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}

@media (min-width: 500px){
    .navigationItems{
        flex-flow: row;
    }
}
</style>
