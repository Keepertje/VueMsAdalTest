import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/JustHello'
import Login from '../components/Login'
import authentication from '../services/authentication.service'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuthentication: false
    }},
    {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld,
    meta: {
      requiresAuthentication: true
    }
  }
]
const router = new Router({
  mode: 'history',
  routes
})

// Global route guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuthentication)) {
    // this route requires auth, check if logged in
    if (authentication.isAuthenticated()) {
      // only proceed if authenticated.
      next();
    } else {

     router.push({ path: '/' })
    }
  } else {
    next();
  }
});

export default router;