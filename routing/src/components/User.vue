<template>
  <div>
    <h1>User View</h1>
    <button class="btn btn-primary" @click="navigateHome">Go Home</button>
    <router-view></router-view>
  </div>
</template>
<script>
import Home from "../Home";
export default {
  methods: {
    navigateHome: function() {
      this.$router.push("/");
      //   this.$router.push({ path: "/", component: Home });
    }
  }
};
</script>
<style scoped>
    div{
        margin : 1em;
    }
</style>