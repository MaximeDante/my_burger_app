<template>
  <div id="app">
    <Toolbar :drawerToggleClicked="sideDrawerToggleHandler"/>
    <SideDrawer :open="showSideDrawer" :closed="sideDrawerClosedHandler"/>
    <h1>Maxime</h1>
    <h1>Maxime</h1>
    <!-- <OrderSummary/> -->
    <router-view/>
     <BurgerIngredients type="bread-top"/>
     <BurgerIngredients type="bacon"/>
     <BurgerIngredients type="meat"/>
     <BurgerIngredients type="cheese"/>
     <BurgerIngredients type="salad"/>
     <BurgerIngredients type="bread-bottom"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Toolbar from '@/components/Navigation/Toolbar/Toolbar.vue'
import SideDrawer from '@/components/Navigation/SideDrawer/SideDrawer.vue'
// import OrderSummary from '@/components/Burger/OrderSummary/OrderSummary.vue'
import BurgerIngredients from '@/components/Burger/BurgerIngredients/BurgerIngredients.vue'

export default Vue.extend({
	name: "App",
	components: {
    Toolbar,
    SideDrawer,
    // OrderSummary,
    BurgerIngredients,
  },
	props: {
	
	},
  data () {
    return {
      showSideDrawer: false,
    }
  },
  computed: {

  },
  methods: {
    sideDrawerClosedHandler () {
      this.showSideDrawer = false;
    },
    sideDrawerToggleHandler () {
      return this.showSideDrawer = !this.showSideDrawer;
    }
  }
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Open Sans",  sans-serif;
}
</style>
