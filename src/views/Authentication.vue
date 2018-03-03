<template lang="html">
  <div id="Authentication">
    <h1 id="AuthHeader">Cat Clicker</h1>
    <em id="message"></em>
    <h2>Log In</h2>
    <input type="Email" placeholder="Email" id="LogEmail"><br>
    <input type="password" placeholder="Password" id="LogPass"><br>
    <button type="button" name="button" class="btn btn-info" v-on:click="logIn">Log In ツ</button><br>
    <h3 id="or">-OR-</h3>
    <h2>Sign Up</h2>
    <input type="text" placeholder="Username" id="SignName"><br>
    <input type="Email" placeholder="Email" id="SignEmail"><br>
    <input type="password" placeholder="Password" value="" id="SignPass"><br>
    <button type="button" name="button" class="btn btn-success" v-on:click="signUp">Sign Up  ✔</button>

  </div>
</template>

<script>
import firebase from 'firebase';
import router from '../router/index.js'

export default {
  methods: {
    logIn: function(){
        let email =document.getElementById("LogEmail").value;
        let password = document.getElementById("LogPass").value;

        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise
        .catch(e=>{
            document.getElementById("message").innerHTML = e.message;
        });

        promise.then(user => {//If user has been logged in succesfully, go back to root
            router.push('/')
        })
    },
    signUp: function(){
        let email =document.getElementById("SignEmail").value;
        let password = document.getElementById("SignPass").value;
        let username = document.getElementById("SignName").value;

        var auth = firebase.auth();
        var promise = auth.createUserWithEmailAndPassword(email, password);
        //Will message error to user, or pass create account and sign in.
        promise
        .then(user => {
            firebase.database().ref('users/' + user.uid).set({
                email: email,
                password: password,
                name: username,
                clicks: 0
            });

            var promise = auth.signInWithEmailAndPassword(email, password);
            promise.catch(e => {
              document.getElementById("message").innerHTML = e.message;
            })

            promise.then(user => {//If user has been logged in succesfully, go back to root
              router.push('/')
              console.log('logging the user')
            })
        })
        promise
        .catch(e=>{
          document.getElementById("message").innerHTML = e.message;
        })
    }
  }
}
</script>

<style lang="css">
#Authentication{
  min-height: 100vh;
  padding:0;
  margin:0;
}
#Authentication::selection{
  color:#d4d4d4;
}
#Authentication{
  color: grey;
}
#AuthHeader{
  font-weight: bold;
  color: red;
}
#or{
  margin-top: 10px;
  font-weight: lighter;
}
#message  {
  color: #ff0000;
}
</style>
