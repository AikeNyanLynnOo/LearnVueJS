<template>
  <div class="container">
    <div class="col-xs-12">
      <h1>Book</h1>
      <button @click="counter++">Increase!</button>
      {{counter}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMounted() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeDestroy() {
    console.log("beforeDestroy()");
  },
  destroyed() {
    console.log("destroyed()");
  },
  deactivated() {
    console.log("deactivated()");
  },
  activated() {
    console.log("activated()");
  }
};
</script>
<style scoped>
</style>