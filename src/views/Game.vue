<template>
  <div id="game">
    <header class="container-fluid">
      <h1>{{name}}</h1>
      <h3>RANK: {{rank}}</h3>
      <h3>CLICKS: {{clicks}}</h3>
      <i class="fa fa-bars" v-on:click="sideMenuToggle"></i>
    </header>
    <img :src="imgsrc" @click="incrementCounter" id="catimage" @mouseleave="mouseLeave" @mouseover="mouseOver"/>

    <video :src="vidsrc" autoplay muted loop poster="src/assets/logo.jpeg">

    </video>
    <div id="sideMenu">
      <button type="button" class="btn btn-block btn-dark" @click="sideMenuToggle">Close</button>
      <ul>
        <li @click="signOut">Sign Out<i class="fa fa-sign-out"></i></li>
        <li @click="toAboutPage">About Cat Clicker<i class="fa fa-info-circle"></i></li>
        <li @click="toLeaderBoards">Leader Boards<i class="fa fa-star"></i></li>
      </ul>

    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import router from '../router/index.js'

import ranks from '../model/ranks.js'

Audio.prototype.stop = function () {
    this.pause();
    this.currentTime = 0;
};

var enviorment = {
  self: this,//reference to the model, because of the fact that it needs to be referenced inside an object.
  baby: function(){
    this.self.stopMusic()
    this.self.imgsrc = 'src/assets/img/cat1.jpg'
    this.self.vidsrc = 'src/assets/video/baby.mp4'
    musiclist.baby.play()
        this.baby = function(){//this chunk of code is in every enviorment function, it terminates the function so that it doesnt run over and over again each click, for performance issues
          return
        }
  },
  grown: function(){
    this.self.stopMusic()
    this.self.imgsrc = 'src/assets/img/cat2.jpg'
    this.self.vidsrc = 'src/assets/video/grown.mp4'
    musiclist.grown.play()
        this.grown = function(){
          return
        }
  },
  danger: function(){
    this.self.stopMusic()
    this.self.imgsrc = 'src/assets/img/cat3.png'
    this.self.vidsrc = 'src/assets/video/danger.mp4'
    musiclist.danger.play()
        this.danger = function(){
          return
        }
  },
  super1: function(){
    this.self.stopMusic()
    this.self.imgsrc = 'src/assets/img/super1.JPG'
    this.self.vidsrc = 'src/assets/video/super1.mp4'
    musiclist.super1.play()
        this.super1 = function(){
          return
        }
  },
  super2: function(){
    this.self.stopMusic()
    this.self.imgsrc = 'src/assets/img/super2.jpg'
    this.self.vidsrc = 'src/assets/video/super2.mp4'
    musiclist.super2.play()
        this.super2 = function(){
          return
        }
  },
  super3: function(){
    this.self.stopMusic()
    this.self.imgsrc = 'src/assets/img/super3.jpg'
    this.self.vidsrc = 'src/assets/video/super3.mp4'
    musiclist.super3.play()
      this.super3 = function(){
        return
      }
  },
  super4: function(){
    this.self.stopMusic()
    this.self.imgsrc = 'src/assets/img/super4.jpg'
    this.self.vidsrc = 'src/assets/video/super4.mp4'
    musiclist.super4.play()
      this.super4 = function(){
        return
      }
  },
  ultra: function(){
    let self = this.self;
    console.log('called ultra')
    this.ultra = function(){
      return
    }
    self.stopMusic()
    self.imgsrc = 'src/assets/img/ultra.jpg'
    self.vidsrc = 'src/assets/video/ultra.mp4'
    musiclist.ultra.play()

    setTimeout(function(){//wait one second and begin adding at a rate of 1/second
      setInterval(function(){
        self.incrementCounter()
      },1000)
    },1000)
    setTimeout(function(){//wait 5 seconds and add 1/.5second
      setInterval(function(){
        self.incrementCounter()
      },500)
    },5000)
    setTimeout(function(){//wait 10 and 1/.25second
      setInterval(function(){
        self.incrementCounter()
      },25)
    },10000)

    setTimeout(function(){//wait 40 seconds and begin super increment
      setInterval(function(){
        self.incrementCounter()
      },10)
      setTimeout(function(){//wait 10 seconds after line 154 and add every milisecond
        setInterval(function(){
          self.incrementCounter()
        },1)
      },10000)
    },40000)


    setTimeout(function(){//wait 1.7minutes after line 154 and add every milisecond
      setInterval(function(){
        self.incrementCounter()
      },1)
    },100000)
  }
}

var config = {
    apiKey: "AIzaSyB7N6v3UHU7SHvoUJEThIlP4RlVjB5qg88",
    authDomain: "catclicker-d6eae.firebaseapp.com",
    databaseURL: "https://catclicker-d6eae.firebaseio.com",
    projectId: "catclicker-d6eae",
    storageBucket: "catclicker-d6eae.appspot.com",
    messagingSenderId: "282969253732"
  };

let app = firebase.initializeApp(config);

export default {
  name: 'Game',
  data () {
    return {
      name: '...',
      clicks: '...',
      useruid: '',

      imgsrc: '',
      vidsrc: ''
    }
  },
  computed: {
    rank : function(){//function check
      let clicks = this.clicks;

      if (clicks == '...') {//this is so it doesnt begin showing assets before user has been identified
              return
      }
                if (clicks < 20){
                    enviorment.baby()//
                    return "Newborn"
                }
                if(clicks < 70){
                    enviorment.baby()//
                    return "Infant"
                }
                if(clicks < 120){
                    enviorment.baby()//
                    return "Child"
                }
                if (clicks <250){
                    enviorment.baby()//
                    return "Teen"
                }
                if (clicks <380){
                    enviorment.grown()//
                    return "Adult"
                }
                if (clicks <550){
                    enviorment.grown()//
                    return "Big boi"
                }
                if(clicks < 790){
                    enviorment.danger()
                    return "Ninja"
                }
                if(clicks < 1000){
                    enviorment.danger()
                    return "Veteran"
                }
                if(clicks < 1400){
                    enviorment.super1()
                    return "Dragon"
                }
                if(clicks < 2012){
                    enviorment.super1()
                    return "Mountain Splitter"
                }
                if(clicks < 3650){
                    enviorment.super2()
                    return "Continent Wiper"
                }
                if(clicks < 5000){
                    enviorment.super2()
                    return "Multi Continent Breaker"
                }
                if(clicks < 5500){
                    enviorment.super2()
                    return "Planet Surface Blaster"
                }
                if(clicks < 6254){
                    enviorment.super2()
                    return "Planet Buster"
                }
                if(clicks < 7000){
                    enviorment.super3()
                    return "Multi Planet Annihilator"
                }
                if(clicks < 7800){
                    enviorment.super3()
                    return "Star Destroyer"
                }
                if(clicks < 8500){
                    enviorment.super3()
                    return "Solar System wiper"
                }
                if(clicks < 10000){
                    enviorment.super3()
                    return "Multi-Solar-System Engulfer"
                }
                if(clicks < 11000){
                    enviorment.super4()
                    return "Galaxy Splitter"
                }
                if(clicks < 12500){
                    enviorment.super4()
                    return "Galactic Cataclysm"
                }
                if(clicks < 13750){
                    enviorment.ultra()
                    return "Universe Giga Canon"
                }
                if (clicks <13800) {
                  enviorment.ultra()
                    return "Multi Universe Devastator"
                }
                if (clicks < 14000) {
                  enviorment.ultra()
                    return "✙The One above all✙"
                }
                if (clicks < 17000) {
                  enviorment.ultra()
                    return "Truth"
                } else {
                  enviorment.ultra()
                  return "∞The Beyonder∞"
                }


        }

  },
  methods: {
    incrementCounter: function(){
      this.clicks++

      firebase.database().ref(`users/${this.useruid}/clicks`).set(this.clicks)
    },
    showSignIn: function(){
      this.stopMusic()
      router.push('Account')
    },
    signOut: function(){
      this.stopMusic()
      firebase.auth().signOut()
    },


    toAboutPage: function(){
      this.stopMusic()
      router.push('About')
    },
    toLeaderBoards: function() {
      this.stopMusic()
      router.push('LeaderBoards')
    },
    sideMenuToggle: function(){
      let toggle = function(){if(Number(  $("#sideMenu").outerWidth()  ) === 0){return '25vw';}return 0;};//this function returns the width the sidebar should be made depending on its current width

      $("#sideMenu").animate({
        width: toggle()
      });
    },
    stopMusic: function(){
      for (var i in musiclist) {//this will stop every song in the music list before redirecting to the about page
        if (musiclist.hasOwnProperty(i)) {
          musiclist[i].stop()
        }
      }
    },

    mouseLeave: function(){
      document.getElementById("catimage").style.opacity = "0.2";
    },
    mouseOver: function(){
      document.getElementById("catimage").style.opacity = "1";
    }

  },
  beforeMount() {//Will set up observation for user authentication before being mounted, to make sure user is always signed in
    let self = this;
      firebase.auth().onAuthStateChanged(function(user) {
        if(!user){
          self.showSignIn()
          return
        }

        let ref = firebase.database().ref("users").child(user.uid);
            self.useruid = user.uid//sets data useruid to user.uid to be referenced in other functions
                ref.on("value", function(snapshot) {
                    self.name = snapshot.child("name").val()
                    self.clicks = snapshot.child("clicks").val()
                });
      });

  }

}
</script>

<style scoped>

h1, h2 {
  font-weight: normal;
}

header {
  background-color: #F85032;
  color: #fcfafb;
  width: 100%;

  display: inline-flex;
  justify-content: space-between;

}
header *{margin-bottom: 0;line-height: 90px;padding: 10px;}
header h1 {
  margin-right: auto;
}
header i {
  height: 100%;
  margin-left: auto;
  transition: .5s all ease-in-out;
  cursor: pointer;
}
header i:hover {
  color: #ff0000;
}
a {
  color: #42b983;
}

video {
  position: fixed;
   right: 0;
   bottom: 0;
   min-width: 100%;
   min-height: 100%;
   z-index: -1;
}

#catimage {
  width: 75vw;
  margin: auto;
  transition: .05s all ease-in-out;
}#catimage:active{
  width: 74vw;
}

#sideMenu {
  width: 0;
  overflow: hidden;
  background: white;
  color: black;

  position: absolute;
  top:0;
  bottom:0;
  right: 0;

}
ul{
  width: 100%;
  margin: 0;
  padding:0;
  list-style: none;
}
li{
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid grey;
  transition: .2s all ease-in-out;
}
li:hover {
  border-left: 2px solid #343a40;
}
#sideMenu .btn {
  border-radius: 0;
}
</style>
