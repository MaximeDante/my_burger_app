<template>
	<div>
		<div class="container" v-html="displayIngredients(type)"></div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "Burger",
	components: {},
	props: {
		type: {
			type: String,
			default: "",
		},
	},
	methods: {
		displayIngredients(type: string) {
			let ingredient = null;
			switch (type) {
				case "bread-bottom":
					ingredient = `<div class="breadBottom">.</div>`;
					break;
				case "bread-top":
					ingredient = 
                    `<div class="breadTop">
                        <div class="seed1">.</div>
                        <div class="Seeds2">.</div>
                    </div>`;
					break;
				case "meat":
					ingredient = `<div class="meat">.</div>`;
					break;
				case "cheese":
					ingredient = `<div class="cheese">.</div>`;
					break;
				case "salad":
					ingredient = `<div class="salad">.</div>`;
					break;
				case "bacon":
					ingredient = `<div class="bacon">.</div>`;
					break;
				default:
					ingredient = null;
					break;
			}
			return ingredient;
		},
	},
});
</script>
<style scoped>
.container >>> .breadBottom {
	height: 13%;
	width: 80%;
	background: linear-gradient(#f08e4a, #e27b36);
	border-radius: 0 0 30px 30px;
	box-shadow: inset -15px 0 #c15711;
	margin: 2% auto;
}

.container >>> .breadTop {
	height: 20%;
	width: 80%;
	background: linear-gradient(#bc581e, #e27b36);
	border-radius: 50% 50% 0 0;
	box-shadow: inset -15px 0 #c15711;
	margin: 2% auto;
	position: relative;
}

.container >>> .seeds1 {
	width: 10%;
	height: 15%;
	position: absolute;
	background-color: white;
	left: 30%;
	top: 50%;
	border-radius: 40%;
	transform: rotate(-20deg);
	box-shadow: inset -2px -3px #c9c9c9;
}

.container >>> .seeds1:after {
	content: "";
	width: 100%;
	height: 100%;
	position: absolute;
	background-color: white;
	left: -170%;
	top: -260%;
	border-radius: 40%;
	transform: rotate(60deg);
	box-shadow: inset -1px 2px #c9c9c9;
}

.container >>> .seeds1:before {
	content: "";
	width: 100%;
	height: 100%;
	position: absolute;
	background-color: white;
	left: 180%;
	top: -50%;
	border-radius: 40%;
	transform: rotate(60deg);
	box-shadow: inset -1px -3px #c9c9c9;
}

.container >>> .seeds2 {
	width: 10%;
	height: 15%;
	position: absolute;
	background-color: white;
	left: 64%;
	top: 50%;
	border-radius: 40%;
	transform: rotate(10deg);
	box-shadow: inset -3px 0 #c9c9c9;
}

.container >>> .seeds2:before {
	content: "";
	width: 100%;
	height: 100%;
	position: absolute;
	background-color: white;
	left: 150%;
	top: -130%;
	border-radius: 40%;
	transform: rotate(90deg);
	box-shadow: inset 1px 3px #c9c9c9;
}

.container >>> .meat {
	width: 80%;
	height: 8%;
	background: linear-gradient(#7f3608, #702e05);
	margin: 2% auto;
	border-radius: 15px;
}

.container >>> .cheese {
	width: 90%;
	height: 4.5%;
	margin: 2% auto;
	background: linear-gradient(#f4d004, #d6bb22);
	border-radius: 20px;
}

.container >>> .salad {
	width: 85%;
	height: 7%;
	margin: 2% auto;
	background: linear-gradient(#228c1d, #91ce50);
	border-radius: 20px;
}

.container >>>.bacon {
	width: 80%;
	height: 3%;
	background: linear-gradient(#bf3813, #c45e38);
	margin: 2% auto;
}
</style>
