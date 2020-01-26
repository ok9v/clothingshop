<template>
  <div id="app" :class="[{'collapsed' : collapsed}]">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
          integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
          crossorigin="anonymous">
    <div class="shopmain">
      <div class="container">
        <router-view/>
      </div>
      <sidebar-menu
        :menu="menu"
        :collapsed="collapsed"
        :disableHover="disableHover"
        :theme="selectedTheme"
        :show-one-child="true"
        @toggle-collapse="onToggleCollapse"
        @item-click="onItemClick"
      />
      <my-header></my-header>
    </div>
  </div>
</template>

<script>

import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import MyHeader from './components/Header.vue';


const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
}

export default {
  name: 'app',
  components: { MyHeader },
  data () {
    return {
      menu: [
        {
          header: true,
          title: 'Catalog',
          hiddenOnCollapse: true
        },
        {
          href: '/tshirts',
          title: '',
        },
        {
          href: '/tshirts',
          title: 'T-shirts',
          icon: 'fa fa-tshirt',
        },
        {
          href: '/sneakers',
          title: 'Sneakers',
          icon: "fas fa-shoe-prints",
        },
        {
          href: '/pullovers',
          title: 'Pullovers',
          icon: 'fas fa-diagnoses',
        },
        {
          href: '/boots',
          title: 'Boots',
          icon: 'fas fa-socks',
        },
        {
          title: 'New season',
          icon: 'fas fa-hat-wizard',
          badge: {
            text: 'new',
            class: 'vsm--badge_default'
          }
        }
      ],
      collapsed: true,
      disableHover: true,
      themes: [
        {
          name: 'Default theme',
          input: ''
        },
        {
          name: 'White theme',
          input: 'white-theme'
        }
      ],
      selectedTheme: ''
    }
  },
  methods: {
    onToggleCollapse (collapsed) {
      console.log(collapsed)
      this.collapsed = collapsed
    },
    onItemClick (event, item) {
      console.log('onItemClick')
    }
  },

}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-out;

}

.fade-enter, .fade-leave-to {
  opacity: 0;

}

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');

body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  background-color: white;
  color: #262626;
}

#app {
  padding-left: 350px;
}

#app.collapsed {
  padding-left: 50px;
}

.shopmain {
  padding: 10px;
}

.container {
  min-width: 900px;
  height: 600px;
}

pre {
  font-family: Consolas, monospace;
  color: #000;
  background: #fff;
  border-radius: 2px;
  padding: 15px;
  line-height: 1.5;
  overflow: auto;
}
</style>
