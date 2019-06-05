<template>
  <div id="app">

    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">SwampUp 2019</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#"><img src="./assets/frog-face.png"><router-link to="/">Hello Frogs</router-link> </b-nav-item>
            <b-nav-item href="#"><img src="./assets/frog-face.png"><router-link to="/bootstrap">Get Frogs</router-link> </b-nav-item>
            <b-nav-item href="#"><img src="./assets/frog-face.png"><router-link to="/user">Add Frog</router-link> </b-nav-item>
            <b-nav-item href="#"><img src="./assets/frog-face.png"><router-link to="/service">Frog Facts</router-link> </b-nav-item>
            <b-nav-item href="#"><img src="./assets/frog-face.png"><router-link to="/app">Get App</router-link> </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div style="height:3em"></div>
    <router-view :hellomsg="msg"></router-view>
  </div>
</template>


<!--<div id="nav">-->
  <!--<img src="./assets/frog-face.png"><router-link to="/">Hello Frogs</router-link> |-->
  <!--<img src="./assets/frog-face.png"> <router-link to="/bootstrap">Get Frogs</router-link> |-->
  <!--<img src="./assets/frog-face.png">  <router-link to="/user">Add Frog</router-link> |-->
  <!--<img src="./assets/frog-face.png">  <router-link to="/service">Frog Facts</router-link>-->
<!--</div>-->

<script>

    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to your SwampUp 2019 App'
            }
        }
    }
</script>

<style lang="scss">

  .navbar-brand {
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
  }

  a {
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    color: white !important;
  }


  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 20px;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
    font-size: 25px;
  }

</style>
