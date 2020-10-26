<template>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <router-link class="nav-link" to="/" tag="li" active-class="active" exact>Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/user" tag="li" active-class="active" exact>User</router-link>
    </li>
  </ul>
</template>
<script>
export default {};
</script>
<style scoped>
li{
    cursor: pointer;
}
</style>