import Vue from 'vue/dist/vue.js';
import featureflags from "../services/featureflag.service";

export const FeatureFlagDir = {
  inserted(el, binding, vnode) {
    console.log('called me a featureflag!', binding);
    return featureflags.getEnabledFeatures().then((allfeatures) => {
      console.log(allfeatures, binding.feature);
      console.log(!allfeatures.includes(binding.feature))
      if (!allfeatures.includes(binding.feature)) {
        el.style.display = 'none';
      }
    })
  }
}

Vue.directive('feature-flag', { FeatureFlagDir }
)
