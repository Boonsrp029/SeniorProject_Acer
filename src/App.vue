<template>
  <div id="app">
    <NavigationRoute/>
    <router-view />
  </div>
</template>

<script>
import NavigationRoute from './components/NavigationRoute.vue';

export default {
  methods: {
    // isAdmin(e) {
    //   alert("สามารถทำได้เฉพาะผู้ดูแลระบบเท่านั้น")
    //   e.preventDefault()
    // }
  },
  components: {
    NavigationRoute
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Prompt', sans-serif;
  font-family: 'Sarabun', sans-serif;
  font-family: 'Noto Sans Thai', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  p {
    color: white;
  }
}
</style>
