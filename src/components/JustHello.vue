<template>
  <div>
    <h3>Hallo CCM, je bent ingelogd en awesome</h3>
  </div>
</template>

<script>
import authentication from "../services/authentication.service";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    isAuthenticated() {
      return authentication.isAuthenticated();
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
