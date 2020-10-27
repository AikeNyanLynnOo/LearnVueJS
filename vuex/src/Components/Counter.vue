<template>
  <div>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>
<script>
export default {  
  methods: {
    increase: function() {
      this.$store.dispatch("increaseCounter", 1);
    },
    decrease: function() {
      this.$store.dispatch("decreaseCounter", 1);
    }
  }
};
</script>
<style scoped>
</style>