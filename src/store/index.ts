import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		ingredients: {
			salad: 0,
			meat: 0,
			cheese: 0,
			bacon: 0,
		},
		totalPrice: 4,
		INGREDIENT_PRICES: {
			salad: 0.5,
			cheese: 0.4,
			bacon: 0.7,
			meat: 1.3,
		},
	},
	mutations: {
    // ADD_INGREDIENT (state) {

    // }
  },
	actions: {
    // addIngredient ({commit}, paylaod) {
      
    // },
  },
	modules: {

  },
});
