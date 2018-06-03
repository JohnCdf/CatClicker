import musiclist from './musiclist.js'
import {store} from '../store/store.js'
import firebase from 'firebase'

Audio.prototype.stop = function () {
    this.pause();
    this.currentTime = 0;
};

const gamefunctions = {

  stopMusic: function(){for (var i in musiclist) {//this will stop every song in the music list before redirecting to the about page
      if (musiclist.hasOwnProperty(i)) {
        musiclist[i].stop()
      }
    }
  },

  endingBegin: function(){//this will start the counter for the ending
    this.endingCounter = setInterval(function(){
      store.commit('increment')
    },1000)

    setTimeout(function(){//wait three seconds and start counting 1click / .5 seconds
      this.endingCounter = setInterval(function(){
        store.commit('increment')
      },500)
    },3000)

    setTimeout(function(){//wait 5 seconds and start counting 2clicks / .25 seconds
      this.endingCounter = setInterval(function(){
        store.commit('increment',2)
      },250)
    },5000)
    setTimeout(function(){//wait 7 seconds and start counting 5clicks / .01 seconds
      this.endingCounter = setInterval(function(){
        store.commit('increment',5)
      },10)
    },7000)
    setTimeout(function(){//wait 40 seconds and start counting 100click / .001 seconds
      this.endingCounter = setInterval(function(){
        store.commit('increment', 100)
      },1)
    },40000)
    setTimeout(function(){//wait 40 seconds and start counting 100click / .001 seconds
      this.endingCounter = setInterval(function(){
        store.commit('increment', 10000)
      },1)
    },50000)
  },


  endEnding: function(){
    clearInterval(this.endingCounter)
  },

  startMethod: function() {//will start the refresh interval and make it an object property.
    this.refreshData = setInterval(function(){
      /*
      the refresh interval will upload all the data to the database every 1.5 seconds.
      this is so:
        -firebase wont have to upload every single click
        -we can clearInterval whenever we want
        -it isnt inplemented directly in the view
      */
      let ref = firebase.database().ref("users").child(store.state.useruid);
      let clicks = store.state.clicks;

      ref.child("clicks").set(clicks)

    }, 1500);
    //
  },

  stopMethod: function() {
    clearInterval(this.endingCounter)
  }


}
export default gamefunctions;
