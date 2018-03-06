<template>
  <div id="game">
    <div id="sideMenu">
      <div id="sideMenuHead">
        <h1>Menu</h1>
      </div>
        <button class="btn btn-block" @click="signOut">Sign Out<i class="fa fa-sign-out"></i></button>
        <button class="btn btn-block" @click="routeTo('About')">About Cat Clicker<i class="fa fa-info-circle"></i></button>
        <button class="btn btn-block" @click="routeTo('LeaderBoards')">Leader Boards<i class="fa fa-star"></i></button>

    </div>

    <div id="main-display">
      <nav class="navbar">
          <span class="btn btn-light fa fa-bars"@click="sideMenuToggle"></span>
            <span id="nameDisplay" class="navbar-brand" href="#">{{name}}</span>
            <span class="navbar-brand" href="#">{{clicks}}</span>
            <span class="navbar-brand" href="#">{{rank}}</span>
      </nav>
      <img :src="imgsrc" @click="incrementCounter" id="catimage" @mouseleave="mouseLeave" @mouseover="mouseOver"/>
      <video :src="vidsrc" autoplay muted loop poster="src/assets/logo.jpeg"></video>


    </div>


  </div>
</template>

<script>
import Vue from 'vue'
import firebase from 'firebase';
import router from '../router/index.js'

import musiclist from '../models/musiclist.js'
import enviorment from '../models/enviorments.js'
import gamefunctions from '../models/functions.js'

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

    sideMenuToggle: function(){
      let toggle = function(){if(Number(  $("#sideMenu").outerWidth()  ) === 0){return '100%';}return 0;};//this function returns the width the sidebar should be made depending on its current width

      $("#sideMenu").animate({
        width: toggle()
      });
    },

    mouseLeave: function(){
      document.getElementById("catimage").style.opacity = "0.2";
    },
    mouseOver: function(){
      document.getElementById("catimage").style.opacity = "1";
    }
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

  },
  beforeMount() {//WIll log in the user when mounting
    let self = this;
      firebase.auth().onAuthStateChanged(function(user) {//whenever there is a change in authorisation
        if(!user){//if user is not logged return and sign in
          self.routeTo('Account')
          return
        }

        self.$store.state.useruid = user.uid//else , set the useruid a centralized state for further referring

        firebase.database().ref("users/"+user.uid).on("value", function(snapshot) {//if there is a change in the database, make it a centralized state
            self.$store.state.name = snapshot.child("name").val()
            self.$store.state.clicks = snapshot.child("clicks").val()

            gamefunctions.startMethod()//begins data refresh in game functions
        });





      });
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
  display: inline-flex;
  justify-content: center;
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
  font-size: 26px;
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
  width: 70%;
  margin: auto;
  left: 0;
  right: 0;
  top:10vh;
  transition: .05s all ease-in-out;
}
#catimage:active{
  width: 69%;
}

#sideMenu {
  height: 100vh;
  width: 0;
  overflow: hidden;
  background:#FEFEFE;
  color: black;

  top: 0;
  bottom: 0;
  left: 0;
}
#sideMenuHead{
  background: #FAF7FA;
  color:#504E51;
  text-align: center;
  height: 20vh;
}#sideMenuHead h1{margin:auto;line-height: 20vh;}
#sideMenu .btn {
  border-radius: 0;
  background: #FEFEFE;
  color: black;
  line-height: 10vh;
  border: 1px solid #F7F7F7;
  margin: 0;
}
#sideMenu .btn:hover {
  border-left: 2px solid grey;
}

@media screen and (max-width: 800px){
  nav *{
    width: 100%;
    margin:auto;
  }
  #catimage{
    width: 100%;
  }
  #catimage:active{
    width: 95%;
  }
}
</style>
