import Vuex from 'vuex'

import Product from './Product'
import User from './User'
import Shared from './Shared'
import Menu from './Menu'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      product: Product,
      user: User,
      shared: Shared,
      menu: Menu
    }
  })
}

export default createStore