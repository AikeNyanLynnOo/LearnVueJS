<template>
  <ul class="nav-list">
    <li class="nav-list-item">
      <router-link tag="li" to="user/1">User 1</router-link>
    </li>
    <li class="nav-list-item">
      <router-link tag="li" to="user/2">User 2</router-link>
    </li>
    <li class="nav-list-item">
      <router-link tag="li" to="user/3">User 3</router-link>
    </li>
  </ul>
</template>
<script>
export default {};
</script>
<style scoped>
.nav-list {
  list-style-type: none;
  padding: 0;
  margin: 1em 0;
  border: 1px solid #ddd;
  border-bottom: none;
  border-radius: 3px;
}
.nav-list-item {
  padding: 0.5em 1em;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
}
</style>