<template>
  <div>
    <div v-if="isAuthenticated">
     <h3>Je bent al ingelogd</h3>
    <button v-on:click="signOut">Uitloggen dan maar</button>
    </div>
    <div v-else>
        <h3>Je moet nog inloggen</h3>
    <button v-on:click="signIn">Inloggen dan maar</button>
    </div>
  </div>
</template>

<script>
import authentication from "../services/authentication.service";

export default {
  name: "Login",
  props: {
    msg: String
  },
  computed: {
    isAuthenticated() {
      return authentication.isAuthenticated();
    }
  },
  methods: {
    signIn() {
      authentication.signIn();
    },
    signOut() {
      authentication.signOut();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  color: black;
}
</style>
