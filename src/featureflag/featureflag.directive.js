import Vue from 'vue/dist/vue.js';
import featureflags from "../services/featureflag.service";

export const FeatureFlagDir = {
  inserted(el, binding, vnode) {
    
    return featureflags.getEnabledFeatures().then((allfeatures) => {
    
      if (!allfeatures.includes(binding.value)) {
        el.style.display = 'none';
      }
    })
  }
}

Vue.directive('feature-flag', FeatureFlagDir
)
