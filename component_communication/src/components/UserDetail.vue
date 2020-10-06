<template>
  <div class="box">
    <h2>User Name-{{name}} User Age - {{age}}</h2>
    <input type="number" v-model="age" />
    <!-- <button @click="editAge">Update Age</button> -->
  </div>
</template>
<script>
import { eventBus } from "../main";
export default {
  props: {
    userAge: {
      type: Number
    },
    userName: {
      type: String
    },
    updateAge: Function
  },
  data: function() {
    return {
      name: this.userName,
      age: this.userAge
    };
  },
  watch: {
    age: function(finalValue) {
      //   this.$emit("ageWasUpdated", +finalValue); // emitting event
      // this.updateAge(finalValue); // by callback function
      eventBus.emitChangeAge(finalValue);
    }
  }
};
</script>
<style scoped>
.box {
  width: 50%;
  height: 300px;
  border: 1px solid red;
  text-align: center;
}
input {
  height: 30px;
  margin-top: 15px;
  margin-left: 10px;
}
</style>