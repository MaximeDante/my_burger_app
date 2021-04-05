<template>
	<div>
		<h3>Your Order</h3>
		<p>Delicious burger with the following ingredients</p>
		<!-- <ul>{{ingredientsSummary(ingredients)}}</ul> -->
		<ul v-html="render()"></ul>
		<p><strong>Total Price</strong>: {{price}}</p>
		<p>Continue to Checkout</p>
		<Button btnStyle="danger" @click="purchaseCancelled">Cancel</Button>
		<Button btnStyle="success" @click="purchaseContinued">Continue</Button>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "OrderSummary",
	components: {},
	props: {
		ingredients: {},
		price: {},
		purchaseCancelled: {},
		purchaseContinued: {},
	},
	computed: {},
	methods: {
		ingredientsSummary(ingredientList: any) {
			const ingredientsSummary = Object.keys(ingredientList).map((igKey) => {
				return (
					`<li>
						<span >${igKey}</span>: ${ingredientList[igKey]}
					</li>`
				);
			});
            return ingredientsSummary
		},
        render () {
            let value =`<div class="meat">MAx</div>`;
            return value
        }
	},
});
</script>
<style scoped></style>
