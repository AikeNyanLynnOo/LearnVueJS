<template>
  <div>
    <ul>
      <li v-for="index in 5" :key="index">
        <pre>#{{index}}</pre>
        <app-content-detail></app-content-detail>
      </li>
    </ul>
  </div>
</template>
<script>
import ContentDetail from "./ContentDetail";
export default {
  components: {
      'app-content-detail' : ContentDetail
  }
};
</script>
<style scoped></style>