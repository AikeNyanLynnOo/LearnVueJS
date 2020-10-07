<template>
  <div>
    <div>
      <slot name="title"></slot>
      <span style="color : #ccc">
        <slot name="sub-title">The sub-title</slot>
      </span>
    </div>
    <div>
      <slot name="body"></slot>
    </div>
    <div>
      <slot name="btn"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
div {
  text-align: center;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 1px 1px 3px #ddd;
}
h1 {
  color: red;
}
</style>