<template>
  <div>
    <h1>Home Component</h1>
    <pre>{{name}} - {{age}}</pre>
    <div class="box">
      <!-- <user-view :user-name="$data"></user-view>  sending reference type-->
      <!-- <user-view :user-name="name" @nameIsSwitched="nameSwitched"></user-view> emitting event-->
      <!-- <user-view :user-name="name" :updateFn="updateName"></user-view> using prop function-->
      
      <user-view :user-name="name" :updateFn="updateName" :user-age="age"></user-view>
      <!-- <user-detail-view :user-age="age" @ageWasUpdated="updateAge"></user-detail-view> emitting event-->
      <!-- <user-detail-view :user-age="age" :updateAge="updateAge"></user-detail-view> props function-->
      <user-detail-view :user-name="name" :user-age="age" :updateAge="updateAge"></user-detail-view>
    
    </div>
    <button @click="changeName">Change Name</button>
  </div>
</template>

<script>
import User from "./components/User";
import UserDetail from "./components/UserDetail";
export default {
  data: function() {
    return {
      name: "Aike Nyan Lynn Oo",
      age: 21
    };
  },
  methods: {
    changeName: function() {
      this.name = this.name.toUpperCase();
    },
    nameSwitched: function($event) {
      this.name = $event;
    },
    updateName: function() {
      this.name = "anlo";
    },
    // updateAge: function($event) {
    //   this.age = $event;
    // }
    updateAge: function(updateVal) {
      this.age = +updateVal;
    }
  },
  components: {
    userView: User,
    userDetailView: UserDetail
  }
};
</script>
<style scoped>
.box {
  width: 70%;
  display: flex;
  padding: 10px;
  flex-direction: row;
  border: 1px solid black;
  text-align: center;
}
</style>
