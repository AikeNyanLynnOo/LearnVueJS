<template>
  <div>
    <app-header></app-header>
    <hr />
    <app-content></app-content>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
export default {
  components: {
    appHeader: Header,
    "app-content": Content,
    "app-footer": Footer
  }
};
</script>

<style>
</style>
