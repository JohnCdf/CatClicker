import Vue from 'vue'
import Vuex from 'vuex'

import environment from '../models/environments.js'
import gamefunctions from '../models/functions.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    name: '',
    clicks: '',
    useruid: '',

    imgsrc: '',
    vidsrc: ''

  },

  mutations: {
    increment (state, n) {
      state.clicks+=n
    }
  },
  getters: {
    rank: state => {
              let clicks = state.clicks

                  if (clicks <= 20){

                      environment.baby()//
                      return "Newborn"
                  }
                  if(clicks <= 70){
                      environment.baby()//
                      return "Infant"
                  }
                  if(clicks <= 120){
                      environment.baby()//
                      return "Child"
                  }
                  if (clicks <=250){
                      environment.grown()//
                      return "Teen"
                  }
                  if (clicks <=480){
                      environment.grown()//
                      return "Adult"
                  }
                  if (clicks <=750){
                      environment.danger()////
                      return "Soldier"
                  }
                  if(clicks <= 1000){//
                      environment.danger()
                      return "Ninja"
                  }
                  if(clicks <= 1100){//
                      environment.danger()
                      return "Veteran"
                  }
                  if(clicks <= 1600){//
                      environment.super1()
                      return "Dragon"
                  }
                  if(clicks <= 2000){
                      environment.super1()
                      return "Mountain Splitter"
                  }
                  if(clicks <= 2550){
                      environment.super2()
                      return "Continent Wiper"
                  }
                  if(clicks <= 3250){
                      environment.super2()
                      return "Multi Continent Breaker"
                  }
                  if(clicks <= 5500){
                      environment.super2()
                      return "Planet Surface Blaster"
                  }
                  if(clicks <= 6000){
                      environment.super2()
                      return "Planet Buster"
                  }
                  if(clicks <= 6750){
                      environment.super3()
                      return "Multi Planet Annihilator"
                  }
                  if(clicks <= 7500){
                      environment.super3()
                      return "Star Destroyer"
                  }
                  if(clicks <= 8250){
                      environment.super3()
                      return "Solar System wiper"
                  }
                  if(clicks <= 9000){
                      environment.super3()
                      return "Multi-Solar-System Engulfer"
                  }
                  if(clicks <= 10000){
                      environment.super4()
                      return "Galaxy Splitter"
                  }
                  if(clicks <= 11500){
                      environment.super4()
                      return "Galactic Cataclysm"
                  }
                  if(clicks <= 12000){
                      environment.ultra()
                      return "Universe Giga Canon"
                  }
                  if (clicks <=15000) {
                    environment.ultra()
                      return "Multi Universe Devastator"
                  }
                  if (clicks <= 20000) {
                    environment.ultra()
                      return "✙The One above all✙"
                  }
                  if (clicks <= 50000) {
                    environment.ultra()
                      return "~Truth~"
                  }
                  if(clicks >=50000){//last one
                    environment.ultra()
                    return "∞The Beyonder∞"
                  }

                  else{//clicks havent been loading
                    gamefunctions.endEnding()

                    environment.shibe()

                    return "Hehe. :)"
                  }

    }
  }
})
