<template>
  <div id="app">
    <ul>
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
      <router-link tag="li" to="/">
        <a>Login</a>
      </router-link>
      <router-link tag="li" to="/HelloWorld">
        <a>HelloWorld</a>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/JustHello.vue";
import Login from "./components/Login.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Login
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: peachpuff;
}
</style>
