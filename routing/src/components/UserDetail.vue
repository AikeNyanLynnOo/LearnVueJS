<template>
  <div>
    <h1>User Detail</h1>
    <p>User - {{userId}}</p>
    <router-link tag="button" class="btn btn-info" :to="link">Edit user {{userId}}</router-link>
    <!-- <button @click="navigateUserEdit" class="btn btn-info">Edit user {{userId}}</button> -->
    <button @click="confirm = true">Confirm</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: this.$route.params.id,
      link: {
        name: "userEdit",
        params: { id: this.userId },
        query: { locale: "en", q: 100 },
        hash: "#data"
      },
      confirm: false
    };
  },
  methods: {
    navigateUserEdit() {
      //   this.$router.push(`/${this.userId}/edit`);
      //   this.$router.push({path : `${this.userId}/edit`});
      this.$router.push({ name: "userEdit", params: { id: this.userId } });
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    next();
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirm) {
      next();
    } else if (confirm("Are you sure to exit")) {
      next();
    } else {
      next(false);
    }
  }
};
</script>
<style scoped>
</style>