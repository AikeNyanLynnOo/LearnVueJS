<template>
  <div>
    <h1>{{text}}</h1>
    <button @click="changeText">Change Text</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      text: "Hello"
    };
  },
  methods: {
    changeText: function() {
      this.text = "Hi";
    }
  }
};
</script>

<style>
</style>