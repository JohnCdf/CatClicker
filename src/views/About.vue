<template lang="html">
<div id="myCard" class="container">
  <div id="aboutBG">

  </div>
  <img src="../assets/me.png">
  <h1>John Diaz</h1>
  <hr>
  <a href="https://johncdf.keybase.pub/JohnDiaz/index.html">🕔 Website</a>
  <br>
  <span>🏷️Full Stack Developer</span>
  <hr>
  <ul>
    <li>#javascript</li>
    <li>#htmlcss</li>
    <li>#react</li>
  </ul>
  <hr>
  <div class="container content">
    <h2>Cat Clicker</h2>
    <em>Vue.js, Firebase, Bootstrap, jQuery</em>
    <p>Cat Clicker was originally a project I made as practice when I started learning <a href="http://knockoutjs.com//" target="_blank">Knockout.JS</a> on a
    design patterns course. After I made it, I put it up for my friends to check out. After showing them, they started competing and became
  determined on getting to the end of the game. This gave me the incentive to build a full version to Cat Clicker.</p>
  </div>

</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
#aboutBG{
  background-color: #45b649;
  background-image: url('../assets/AboutBackdrop.jpg');
  background-blend-mode: soft-light;
  position: fixed;
  top:0;
  bottom: 0;
  left:0;
  right:0;
  z-index: -10;
}
a{
  color: white;
}a:hover{color:grey;}
#myCard {
  padding-top: .5em;
  padding-bottom: .5em;
  background: #444444;
  color: #cccccc;
  width: 50vw;
  border-radius: 10px;
}
#myCard > img {
  border-radius: 50%;
  height: 110px;
  width: 110px;
}
ul{
  padding:0;
}
hr{
  color: 1px solid #373737;
  width: 100%;
}

.content {
  padding: 0 1em;
}

@media screen and (max-width: 700px){
#myCard {
  width: 90vw;
}
}
@media screen and (max-width: 390px){
  #myCard {
    width: 100vw;
    font-size: 16px;
  }
}
</style>
