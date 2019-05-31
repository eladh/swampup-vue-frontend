<template>
  <div id="app">

    <div id="nav">
      <img src="./assets/frog-face.png"><router-link to="/">Hello Frogs</router-link> |
      <img src="./assets/frog-face.png"> <router-link to="/bootstrap">Get Frogs</router-link> |
      <img src="./assets/frog-face.png">  <router-link to="/user">Add Frog</router-link> |
      <img src="./assets/frog-face.png">  <router-link to="/service">Frog Facts</router-link>
    </div>
    <router-view :hellomsg="msg"></router-view>
  </div>
</template>

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
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
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

  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
