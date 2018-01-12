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
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
          @click=""
        >
          <v-list-tile-action>
            <v-icon x-large color="green darken-2">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title style="font-size: 16px;">
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      color="blue darken-3"
      dark
      app
      clipped-left
      fixed
    >
      <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <nuxt-link to="/" class="hidden-xs-only" tag="span" style="cursor: pointer">TaDiCho</nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        light
        solo
        prepend-icon="search"
        placeholder="Search"
        style="max-width: 700px; min-width: 200px"
      ></v-text-field>
      <div class="d-flex align-center">
        <v-btn icon>
          <v-icon>apps</v-icon>
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

    <v-footer app> 2017</v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
      }
    },
    computed: {
      items () {
        let items = [
            { icon: 'local_florist', text: 'Vegetables', link: '/vegetables' },
            { icon: 'hot_tub', text: 'Meats', link: '/meats' },
            { icon: 'directions_boat', text: 'Sea Foods', link: '/seafoods' },
            { icon: 'restaurant', text: 'Restaurants' , link: '/restaurants'},
            { icon: 'assistant', text: 'Others', link: '/others' }
        ]
        return items
      }
    }
  }
</script>