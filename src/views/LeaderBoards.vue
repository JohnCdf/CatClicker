<template lang="html">
  <div class="" id="LeaderBoards">
    <h1>Leader Boards</h1>
    <h3>Top Clickers</h3>
    <div class="container" id="listContainer" >
      <table >
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Clicks</th>
        </tr>
        <tr v-for="(user,index) in usersList">
          <td>#{{index+1}}</td>
          <td>{{user.name}}</td>
          <td v-if="user.clicks <= 500000">{{user.clicks}}</td>
          <td v-else>∞</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'LeaderBoards',
  data () {
    return{
      usersList: []
    }
  },
  methods: {
    compare: function(a,b){
      if (a.clicks > b.clicks)
        return -1;
      if (a.clicks < b.clicks)
        return 1;
        return 0;
    }
  },
  beforeMount (){
    let sortable = [];//this is where the object will be stored as an array
    let self = this;
    let ref = firebase.database().ref('users')
    ref.on("value", function(snapshot) {//every time the database is updated, the users are stored as an array in sortable
      let users = snapshot.val()
      sortable = []
        for (var i in users) {
          sortable.push(users[i]);
        }
        sortable.sort(self.compare);//sorts the users by clicks
        self.usersList = sortable//after the database has been turned into an array and sorted, it's returned
    });


  }
}
</script>

<style lang="css" scoped>

#LeaderBoards{
  text-align: center;
  min-height: 100vh;
  background: #141819;
  color: #b7b7b4;
}
#listContainer{
  background: grey;
  background-image: url('../assets/LeaderBoards.jpg');
  background-blend-mode: soft-light;
  background-position: center;
  background-size: cover;
  height: 100%;
  max-width: 100%;
}
table{
  width: 90%;
  color: #b7b7b4;
  margin:auto;
  border: 2px solid #9d9c9b;
}
th{
  background: #000000;
  line-height: 50px;
  border: 1px solid #9d9c9b;
}
tr{
  background: #181818;
}
tr:nth-child(even) {
    background-color: #202020;
}
</style>
