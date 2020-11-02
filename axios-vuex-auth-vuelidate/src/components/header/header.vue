<template>
  <header id="header">
    <div class="logo">
      <router-link to="/">Vue - Complete Guide</router-link>
    </div>
    <nav>
      <ul>
        <template v-if="!auth">
          <li>
            <router-link to="/signup">Sign Up</router-link>
          </li>
          <li>
            <router-link to="/signin">Sign In</router-link>
          </li>
        </template>
        <template v-else>
          <li>
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
          <li>
            <button @click="onLogout" class="btn-logout">Logout</button>
          </li>
        </template>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("signout");
    }
  }
};
</script>
<style scoped>
#header {
  height: 56px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background-color: #521751;
  padding: 0 20px;
}

.logo {
  font-weight: bold;
  color: white;
}

.logo a {
  text-decoration: none;
  color: white;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
}

li {
  margin: 0 16px;
}

li a {
  text-decoration: none;
  color: white;
}

li a:hover,
li a:active,
li a.router-link-active {
  color: #fa923f;
}
.btn-logout {
  border: 1px solid #fa923f;
  border-radius: 3px;
  background-color: #521751;
  color: #fa923f;
  padding: 1em 2em;
  cursor: pointer;
}
.btn-logout:focus {
  outline: none;
}
</style>