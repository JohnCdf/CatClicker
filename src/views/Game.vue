<template>
  <div id="game">
      <nav class="navbar">
            <span id="nameDisplay" class="navbar-brand" href="#">{{name}}</span>
            <span class="navbar-brand" href="#">{{clicks}}</span>
            <span class="navbar-brand" href="#">{{rank}}</span>
      </nav>
      <img :src="imgsrc" @click="incrementCounter" id="catimage" @mouseleave="mouseLeave" @mouseover="mouseOver"/>
      <video :src="vidsrc" autoplay muted loop poster="src/assets/logo.jpeg"></video>

      <footer class="navbar">
        <button class="fa fa-star navbar-brand" @click="routeTo('LeaderBoards')"></button>

        <button class="fa fa-info-circle navbar-brand" @click="routeTo('About')"></button>

        <button class="fa fa-sign-out navbar-brand" @click="signOut"></button>
      </footer>


  </div>
</template>

<script>
import Vue from 'vue'
import firebase from 'firebase';
import router from '../router/index.js'

import musiclist from '../models/musiclist.js'
import environment from '../models/environments.js'
import gamefunctions from '../models/functions.js'

import {LeaderBoards} from './LeaderBoards.vue'
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
  methods: {
    incrementCounter: function(){
      this.$store.commit('increment',1)
    },
    signOut: function(){
      gamefunctions.stopMethod()
      gamefunctions.stopMusic()
      firebase.auth().signOut()
    },

    routeTo: function(name){
      gamefunctions.stopMethod()
      gamefunctions.stopMusic()
      router.push(name)
    },

    mouseLeave: function(){
      document.getElementById("catimage").style.opacity = "0.2";
    },
    mouseOver: function(){
      document.getElementById("catimage").style.opacity = "1";
    }
  },
  beforeMount() {//Will log in the user when mounting
    let self = this;
      firebase.auth().onAuthStateChanged(function(user) {//whenever there is a change in authorisation
        if(!user){//if user is not logged return and sign in
          self.routeTo('Account')
          return
        }

        self.$store.state.useruid = user.uid

        firebase.database().ref("users/"+user.uid).on("value", function(snapshot) {//if there is a change in the database, make it a centralized state
            self.$store.state.name = snapshot.child("name").val()
            self.$store.state.clicks = snapshot.child("clicks").val()


        });

        gamefunctions.startMethod()//begins data refresh in game functions
      });

  },
  computed: {
        name: function(){
          return this.$store.state.name
        },
        clicks: function(){
          return this.$store.state.clicks
        },
        imgsrc: function(){
          return this.$store.state.imgsrc
        },
        vidsrc: function(){
          return this.$store.state.vidsrc
        },
        rank: function(){
          return this.$store.getters.rank
        }

  }
}
</script>

<style scoped>

h1, h2 {
  font-weight: normal;
}

#game {
  width:100vw;
  height:100vh;
}
#main-display{
  width:100%;
}
nav {
  background-color: #F85032;
  color: white;
  width: 100%;
}
nav span {
  font-size: 16px;
}

video {
   position: fixed;
   right: 0;
   bottom: 0;
   min-width: 100%;
   min-height: 100%;
   z-index: -10;
}

#catimage {
  max-height: 80vh;
  margin: auto;
  right:0;
  left: 0;
  right: 0;
  top:10vh;
  transition: .05s all ease-in-out;
}
#catimage:active{

}

footer{
  width:50%;
  margin:auto;
  background: transparent;
}
footer button{
  border-radius: 50%;
  font-size: 30px;
  border: none;
  color: #f85032;
  width: 60px;
  height: 60px;
  transition: all .5s ease-in-out;
}
footer button:hover{
  transform: rotateZ(360deg);
  color: white;
  background: #f85032;
}

@media screen and (max-width: 600px){
  nav *{
    width: 100%;
    margin:auto;
  }
  #catimage{
    width:95%;
  }
  #catimage:active{
    width:90%;
  }
  footer{
    width: 100%;
  }
}
</style>
