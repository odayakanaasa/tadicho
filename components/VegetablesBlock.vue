<template>
  <v-card>
	  <v-card-title class="grey lighten-3">
      <div class="headline">Vegetable Products</div>
    </v-card-title>
    <v-container>
      <v-layout row wrap>
        <v-flex md3 v-for="product in products.slice(0, 8)" :key="product.index" class="hidden-sm-and-down">
          <v-card>
            <v-card-media
              :src="product.imageUrl"
              height="170px"
            >
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <div class="headline">Top western road trips</div>
                <span class="grey--text">1,000 miles of wonder</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat>Share</v-btn>
              <v-btn flat color="purple">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 v-for="product in products.slice(0, 4)" :key="product.index" class="hidden-md-and-up">
          <v-card>
            <v-container fluid>
              <v-layout row>
                <v-flex xs7 sm7>
                  <v-card-media
                    :src="product.imageUrl"
                    height="170px"
                  ></v-card-media>
                </v-flex>
                <v-flex xs5 sm5>
                  <v-card-title primary-title>
                    <div>
                      <h5 class="white--text mb-0">{{ product.title }}</h5>
                      <div></div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat :to="'/meetups/' + product.id">
                      <v-icon left light>arrow_forward</v-icon>
                      View Meetup
                    </v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  computed: {
    products () {
      return [
        {title: '', imageUrl: 'http://media.thuonghieucongluan.vn/uploads/2017_03_16/hoa-qua-nhap-lau-1489633553.jpg'},
        {title: '', imageUrl: 'http://kingbbq.com.vn/wp-content/uploads/2016/03/3-900x599.jpg'},
        {title: '', imageUrl: 'http://sohanews.sohacdn.com/zoom/700_438/2017/h-1502875846287-0-0-993-1600-crop-1502875850513.jpg'},
        {title: '', imageUrl: 'http://media.thuonghieucongluan.vn/uploads/2017_03_16/hoa-qua-nhap-lau-1489633553.jpg'},
        {title: '', imageUrl: 'http://kingbbq.com.vn/wp-content/uploads/2016/03/3-900x599.jpg'},
        {title: '', imageUrl: 'http://sohanews.sohacdn.com/zoom/700_438/2017/h-1502875846287-0-0-993-1600-crop-1502875850513.jpg'},
        {title: '', imageUrl: 'http://sohanews.sohacdn.com/zoom/700_438/2017/h-1502875846287-0-0-993-1600-crop-1502875850513.jpg'},
        {title: '', imageUrl: 'http://media.thuonghieucongluan.vn/uploads/2017_03_16/hoa-qua-nhap-lau-1489633553.jpg'},
        {title: '', imageUrl: 'http://kingbbq.com.vn/wp-content/uploads/2016/03/3-900x599.jpg'},
        {title: '', imageUrl: 'http://sohanews.sohacdn.com/zoom/700_438/2017/h-1502875846287-0-0-993-1600-crop-1502875850513.jpg'},
        {title: '', imageUrl: 'http://kingbbq.com.vn/wp-content/uploads/2016/03/3-900x599.jpg'},
        {title: '', imageUrl: 'http://sohanews.sohacdn.com/zoom/700_438/2017/h-1502875846287-0-0-993-1600-crop-1502875850513.jpg'},
        {title: '', imageUrl: 'http://sohanews.sohacdn.com/zoom/700_438/2017/h-1502875846287-0-0-993-1600-crop-1502875850513.jpg'},
        {title: '', imageUrl: 'http://media.thuonghieucongluan.vn/uploads/2017_03_16/hoa-qua-nhap-lau-1489633553.jpg'},
        {title: '', imageUrl: 'http://kingbbq.com.vn/wp-content/uploads/2016/03/3-900x599.jpg'},
        {title: '', imageUrl: 'http://sohanews.sohacdn.com/zoom/700_438/2017/h-1502875846287-0-0-993-1600-crop-1502875850513.jpg'},
        {title: '', imageUrl: 'http://kingbbq.com.vn/wp-content/uploads/2016/03/3-900x599.jpg'}
      ]
    }
  }
}
</script>
