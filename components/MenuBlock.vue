<template>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm3 md3>
          <v-card flat>
            <v-navigation-drawer permanent light class="hidden-xs-only">
              <v-toolbar flat>
                <v-list>
                  <v-list-tile>
                    <v-list-tile-title  class="headline">
                      Menu
                    </v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-toolbar>
              <v-divider></v-divider>
              <v-list dense class="pt-0">
                <v-list-tile v-for="item in menuItems" :key="item.index" :to="item.link" @click="" >
                  <v-list-tile-action>
                    <v-icon x-large color="green darken-2">{{ item.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title style='font-size: 16px'>{{ item.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-navigation-drawer>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm9 md9>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card>
                <v-progress-circular
                  indeterminate
                  class="primary--text"
                  :width="7"
                  :size="70"
                  v-if="loading"
                >
                </v-progress-circular>
                <v-carousel style="cursor: pointer; height: 450px" v-else>
                  <v-carousel-item
                    v-for="product in products"
                    :src="product.imageUrl"
                    :key="product.id"
                    @click="onLoadProduct(product.id)" 
                  >
                  </v-carousel-item>
                </v-carousel>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
  export default {
    data () {
      return {
        menuItems: this.$store.getters.menuItems
      } 
    },
    computed: {
      products () {
        return [
          {title: '', imageUrl: 'http://media.thuonghieucongluan.vn/uploads/2017_03_16/hoa-qua-nhap-lau-1489633553.jpg'},
          {title: '', imageUrl: 'http://kingbbq.com.vn/wp-content/uploads/2016/03/3-900x599.jpg'},
          {title: '', imageUrl: 'http://sohanews.sohacdn.com/zoom/700_438/2017/h-1502875846287-0-0-993-1600-crop-1502875850513.jpg'}
        ]
      },
      loading () {
        return false
      },
      items () {
          let items = [
              { icon: 'local_florist', title: 'Vegetables', link: '/vegetables' },
              { icon: 'hot_tub', title: 'Meats', link: '/meats' },
              { icon: 'directions_boat', title: 'Sea Foods', link: '/seafoods' },
              { icon: 'restaurant', title: 'Restaurants' , link: '/restaurants'},
              { icon: 'assistant', title: 'Others', link: '/others' }
          ]
          return items
      }
    },
    methods: {
      onLoadProduct (id) {
        this.$router.push('/product/' + id)
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>