<template>
  <div class="box">
    <h2>User View - {{userName}} - {{age}}</h2>
    <button @click="updateFn">Update Name</button>
  </div>
</template>
<script>
import { eventBus } from "../main";
export default {
  props: {
    userName: {
      //   receiving reference type
      //   type: Object,
      //   default: function() {
      //     return {
      //       name: "aike"
      //     };
      //   }
      type: String,
      default: "Aike" // mutating property default is not recommended
    },
    updateFn: Function,
    userAge: {
      type: Number
    }
  },
  data: function() {
    return {
      age: this.userAge
    };
  },
  methods: {
    switchName: function() {
      //   this.userName.name = this.userName.name
      this.userName = this.userName
        .split("")
        .reverse()
        .join("");
      this.$emit("nameIsSwitched", this.userName);
    }
  },
  created() {
    eventBus.$on("ageWasUpdated", age => {
      this.age = +age;
    });
  }
};
</script>
<style scoped>
.box {
  width: 50%;
  height: 300px;
  border: 1px solid black;
}
button {
  height: 30px;
  margin-top: 15px;
  margin-left: 10px;
}
</style>