<template>
  <div>
    <h1>User Edit View</h1>
    <p>User - {{userId}}</p>
    <p>Locale - {{$route.query.locale}}</p>
    <p>LocId - {{$route.query.q}}</p>
    <div id="data">

    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      userId: this.$route.params.id
    };
  }
};
</script>
<style scoped>
#data {
  margin-top : 500px;
  height : 200px;
  background-color : #ddd;
}
</style>
