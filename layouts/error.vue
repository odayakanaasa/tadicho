<template>
  <v-content>
	  <v-container>
		<h1 v-if="error.statusCode === 404">Page not found</h1>
		<h1 v-else>An error occurred</h1>
		<nuxt-link to="/">Home page</nuxt-link>
	  </v-container>
  </v-content>
</template>

<script>
export default {
  props: ['error'],
}
</script>