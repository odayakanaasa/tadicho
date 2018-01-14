export default {
  state: { 
    items: [
      { icon: 'local_florist', title: 'Vegetables', link: '/vegetables' },
      { icon: 'hot_tub', title: 'Meats', link: '/meats' },
      { icon: 'directions_boat', title: 'Sea Foods', link: '/seafoods' },
      { icon: 'restaurant', title: 'Restaurants' , link: '/restaurants'},
      { icon: 'assistant', title: 'Others', link: '/others' }
    ]    
  },
  getters: {
    menuItems (state) {
      return state.items
    }
  }
}