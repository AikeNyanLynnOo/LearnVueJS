<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
textarea {
  margin: 30px auto;
  border-radius: 5px;
  width: 50%;
  display: block;
  box-shadow: 1px 1px 1px gray;
  color: blueviolet;
}
input {
  margin: 30px auto;
  width: 50%;
  display: block;
}
textarea:focus,input:focus {
  outline: none;
}
button {
  display: block;
  margin: 10px auto;
  border-radius: 5px;
  border: 1px solid blueviolet;
  background-color: blueviolet;
  padding: 10px;
  color: #fff;
}
button:focus {
  outline: none;
}
</style>