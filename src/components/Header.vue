<template>
  <fixed-header id="topheader">
    <div class="navbar navbar-default">
      <div class="navbar-header">
        <h1>
          <router-link :to="{name: 'iMain'}">{{ sitename }}</router-link>
        </h1>
      </div>
      <div class="nav navbar-nav navbar-right cart">
        <router-link active-class="active" tag="button" class="btn btn-default btn-lg" :to="{name: 'Form'}">
          <span class="glyphicon glyphicon-shopping-cart">{{ cart.length}}</span> Checkout
        </router-link>
      </div>
    </div>
  </fixed-header>
</template>

<script>
  import FixedHeader from 'vue-fixed-header'
  import {mapGetters} from "vuex";

  export default {
    name: 'header',
    components: {
      FixedHeader
    },
    data() {
      return {
        sitename: "Sport Clothes",
      }
    },
    methods: {
      showCheckout() {
        this.$router.push({name: 'Form'});
      }

    },
    computed: {
      ...mapGetters([
        'cart'
      ])
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    text-decoration: none;
    color: black;
  }

  .router-link-exact-active {
    color: black;
  }

  .navbar.vue-fixed-header--isFixed {
    position: fixed;
    left: 50px;
    top: 0;
    width: 1142px;
    background-color: blue;
    z-index: 1000;
  }

  .navbar-header {
    margin-left: 100px;

  }
</style>
