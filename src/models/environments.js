import Vue from 'vue'
import {store} from '../store/store.js';
import musiclist from './musiclist.js'
import gamefunctions from './functions.js'

const environment = {
  baby: function(){
    gamefunctions.stopMusic()
    store.state.imgsrc = 'src/assets/img/cat1.jpg'
    store.state.vidsrc = 'src/assets/video/baby.mp4'
    musiclist.baby.play()
        this.baby = function(){//this chunk of code is in every environment function, it terminates the function so that it doesnt run over and over again each click, for performance issues
          return
        }
  },
  grown: function(){
    gamefunctions.stopMusic()
    store.state.imgsrc = 'src/assets/img/cat2.jpg'
    store.state.vidsrc = 'src/assets/video/grown.mp4'
    musiclist.grown.play()
        this.grown = function(){
          return
        }
  },
  danger: function(){
    gamefunctions.stopMusic()
    store.state.imgsrc = 'src/assets/img/cat3.png'
    store.state.vidsrc = 'src/assets/video/danger.mp4'
    musiclist.danger.play()
        this.danger = function(){
          return
        }
  },
  super1: function(){
    gamefunctions.stopMusic()
    store.state.imgsrc = 'src/assets/img/super1.JPG'
    store.state.vidsrc = 'src/assets/video/super1.mp4'
    musiclist.super1.play()
        this.danger = function(){
          return
        }
  },
  super2: function(){
    gamefunctions.stopMusic()
    store.state.imgsrc = 'src/assets/img/super2.jpg'
    store.state.vidsrc = 'src/assets/video/super2.mp4'
    musiclist.super2.play()
        this.super2 = function(){
          return
        }
  },
  super3: function(){
    gamefunctions.stopMusic()
    store.state.imgsrc = 'src/assets/img/super3.jpg'
    store.state.vidsrc = 'src/assets/video/super3.mp4'
    musiclist.super3.play()
      this.super3 = function(){
        return
      }
  },
  super4: function(){
    gamefunctions.stopMusic()
    store.state.imgsrc = 'src/assets/img/super4.jpg'
    store.state.vidsrc = 'src/assets/video/super4.mp4'
    musiclist.super4.play()
      this.super4 = function(){
        return
      }
  },
  ultra: function(){

    this.ultra = function(){
      return
    }


    gamefunctions.stopMusic()
    store.state.imgsrc = 'src/assets/img/ultra.jpg'
    store.state.vidsrc = 'src/assets/video/ultra.mp4'
    musiclist.ultra.play()

    gamefunctions.endingBegin()
  },
  shibe: function(){
    this.shibe = function(){
      return
    }

    gamefunctions.stopMusic()
    store.state.imgsrc = 'src/assets/img/dog.jpg'
    store.state.vidsrc = ''
  }
}

export default environment;
