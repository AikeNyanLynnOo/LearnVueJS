<template>
  <div id="app">
    <h1>Routing</h1>
    <hr />
    <router-view name="header-top"></router-view>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view name="header-bottom"></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  width: 40%;
  margin: 1em auto;
  padding: 1em;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 3px #ddd;
  border-radius: 3px;
}
h1 {
  text-align: center;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
  /* opacity : 1; */
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>
