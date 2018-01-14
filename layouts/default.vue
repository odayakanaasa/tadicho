<template>
  <v-app>
    <v-navigation-drawer
      fixed
      clipped
      app
      v-model="drawer"
    >
      <v-list dense>
        <v-list-tile 
          v-for="(item, i) in menuItems"
          :key="i"
          :to="item.link"
          @click=""
        >
          <v-list-tile-action>
            <v-icon x-large color="green darken-2">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title style="font-size: 16px;">
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      app
      clipped-left
      fixed
    >
      <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
        <nuxt-link to="/" tag="span" style="cursor: pointer">TaDiCho</nuxt-link>
      </v-toolbar-title>
      <div class="d-flex align-center" style="margin-left: auto">
        <v-btn icon>
          <v-icon>shopping_cart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
        <v-btn icon large>
          <v-avatar size="32px" tile>
            <img
              src="https://vuetifyjs.com/static/doc-images/logo.svg"
              alt="Vuetify"
            >
          </v-avatar>
        </v-btn>
      </div>
    </v-toolbar>

    <v-content>
      <nuxt />
    </v-content>

    <v-btn
      fab
      bottom
      right
      color="pink"
      dark
      fixed
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-footer class="pa-3">
      <div>© {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<<script>
export default {
  data () {
    return {
      drawer: false,
      menuItems: this.$store.getters.menuItems
    }
  },
  computed: {
  }
} 
</script>
