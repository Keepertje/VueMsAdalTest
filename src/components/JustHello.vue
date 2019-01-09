<template>
  <div>
    <h3>Hallo CCM, je bent ingelogd en awesome</h3>
    <button v-on:click="getFeatures">Heb ik feature flags?</button>
    <div v-show='isFeatureEnabled("testfeature")'>Ik ben een feature</div>
    <div v-show='isFeatureEnabled("testfeature2")'>Ik ben een andere feature</div>

     <div v-feature-flag="feature1">Ik ben een feature met dir</div>
    <div v-feature-flag="feature2">Ik ben een andere feature met dir</div>
  </div>
</template>

<script>
import authentication from "../services/authentication.service";
import featureflags from "../services/featureflag.service"
import FeatureFlagDir from "../featureflag/featureflag.directive";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: function(){
    return {
      features: [],
      feature1:"testfeature",
      feature2:"testfeature2"
    }
  },
  computed: {
    isAuthenticated() {
      return authentication.isAuthenticated();
    }
  },
  methods:{
    isFeatureEnabled(feature) {
    
      return this.features.includes(feature);
    },
    getFeatures(){
      console.log('called!');
     return featureflags.getEnabledFeatures().then((allfeatures) => {
       console.log(allfeatures);
      this.features = allfeatures;
      return allfeatures
      }).catch((err) => console.log(err));
    }
  }, 
  beforeMount(){
    this.getFeatures()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  color: black;
}
</style>