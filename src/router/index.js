import Vue from 'vue'
import Router from 'vue-router'

import Game from '../views/Game'
import Authentication from '../views/Authentication'
import About from '../views/About'
import LeaderBoards from '../views/LeaderBoards'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Game,
      name: 'root'
    },
    {
      path: '/Account',
      component: Authentication,
      name: 'authentication'
    },
    {
      path: '/About',
      component: About,
      name: 'about'
    },
    {
      path: '/LeaderBoards',
      component: LeaderBoards,
      name: 'leaderboards'
    }
  ]
})
