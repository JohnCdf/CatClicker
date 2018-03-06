import Vue from 'vue'
import Vuex from 'vuex'

import enviorment from '../models/enviorments.js'
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

                      enviorment.baby()//
                      return "Newborn"
                  }
                  if(clicks <= 70){
                      enviorment.baby()//
                      return "Infant"
                  }
                  if(clicks <= 120){
                      enviorment.baby()//
                      return "Child"
                  }
                  if (clicks <=250){
                      enviorment.grown()//
                      return "Teen"
                  }
                  if (clicks <=480){
                      enviorment.grown()//
                      return "Adult"
                  }
                  if (clicks <=750){
                      enviorment.danger()////
                      return "Soldier"
                  }
                  if(clicks <= 1000){//
                      enviorment.danger()
                      return "Ninja"
                  }
                  if(clicks <= 1100){//
                      enviorment.danger()
                      return "Veteran"
                  }
                  if(clicks <= 1600){//
                      enviorment.super1()
                      return "Dragon"
                  }
                  if(clicks <= 2000){
                      enviorment.super1()
                      return "Mountain Splitter"
                  }
                  if(clicks <= 2550){
                      enviorment.super2()
                      return "Continent Wiper"
                  }
                  if(clicks <= 3250){
                      enviorment.super2()
                      return "Multi Continent Breaker"
                  }
                  if(clicks <= 5500){
                      enviorment.super2()
                      return "Planet Surface Blaster"
                  }
                  if(clicks <= 6000){
                      enviorment.super2()
                      return "Planet Buster"
                  }
                  if(clicks <= 6750){
                      enviorment.super3()
                      return "Multi Planet Annihilator"
                  }
                  if(clicks <= 7500){
                      enviorment.super3()
                      return "Star Destroyer"
                  }
                  if(clicks <= 8250){
                      enviorment.super3()
                      return "Solar System wiper"
                  }
                  if(clicks <= 9000){
                      enviorment.super3()
                      return "Multi-Solar-System Engulfer"
                  }
                  if(clicks <= 10000){
                      enviorment.super4()
                      return "Galaxy Splitter"
                  }
                  if(clicks <= 11500){
                      enviorment.super4()
                      return "Galactic Cataclysm"
                  }
                  if(clicks <= 12000){
                      enviorment.ultra()
                      return "Universe Giga Canon"
                  }
                  if (clicks <=15000) {
                    enviorment.ultra()
                      return "Multi Universe Devastator"
                  }
                  if (clicks <= 20000) {
                    enviorment.ultra()
                      return "✙The One above all✙"
                  }
                  if (clicks <= 50000) {
                    enviorment.ultra()
                      return "~Truth~"
                  }
                  if(clicks <=500000){//if from 50,000 - 500,000
                    enviorment.ultra()
                    return "∞The Beyonder∞"
                  }
                  else{
                    gamefunctions.endEnding()

                    enviorment.shibe()

                    return "Hehe. :)"
                  }

    }
  }
})
