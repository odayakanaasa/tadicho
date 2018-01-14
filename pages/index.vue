<template>
  <v-container fluid grid-list-xl>
    <v-layout row justify-space-between class="hidden-sm-and-down">
      <v-flex xs2>
      </v-flex>
      <v-flex xs8>
				<MenuBlock />
				<VegetablesBlock class="mt-3"/>
				<MeatsBlock class="mt-3" />
				<SeafoodsBlock class="mt-3" />
				<RestaurantsBlock class="mt-3"/>
				<OthersBlock class="mt-3"/>
      </v-flex>
      <v-flex xs2>
      </v-flex>
    </v-layout>

		<v-layout row justify-space-between class="hidden-md-and-up">
      <v-flex xs12>
				<MenuBlock />
				<VegetablesBlock class="mt-3"/>
				<MeatsBlock class="mt-3" />
				<SeafoodsBlock class="mt-3" />
				<RestaurantsBlock class="mt-3"/>
				<OthersBlock class="mt-3"/>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
	import MenuBlock from "~/components/MenuBlock"
	import VegetablesBlock from "~/components/VegetablesBlock"
	import MeatsBlock from "~/components/MeatsBlock"
	import RestaurantsBlock from "~/components/RestaurantsBlock"
	import SeafoodsBlock from "~/components/SeafoodsBlock"
	import OthersBlock from "~/components/OthersBlock"
	export default {
		components : {
			MenuBlock,
			VegetablesBlock,
			MeatsBlock,
			RestaurantsBlock,
			SeafoodsBlock,
			OthersBlock
		}
	}
</script>