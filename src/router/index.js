import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import Main from '@/components/Main'
import Tshirt from '@/components/Tshirt'
import Product from '@/components/Product'
import EditProduct from '@/components/EditProduct'
import VueSidebarMenu from 'vue-sidebar-menu'

Vue.use(VueSidebarMenu)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form,
      props: true,
    },
    {
      path: '/form',
      name: 'iForm',
      component: Form,
      props: true,
    },
    {
        path: '/product/:id',
        name: 'Id',
        component: Product,
        props: true,
        children: [
          {
            path: 'edit',
            name: 'Edit',
            component: EditProduct,
            props: true
          }
        ]
    },
    {
      path: '/tshirts',
      name: 'Tshirt',
      component: Tshirt,
      props: true
    },
    {
      path: '/sneakers',
      name: 'iMain',
      component: Main,
      props: true
    },
    {
      path: '*',
      redirect:"/"
    }
  ]
})
