<template>
  <div>
    <p>{{text}}</p>
    <button @click="toUpperCase">UpperCase</button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      text: "Content Detail"
    };
  },
  methods: {
    toUpperCase: function() {
      this.text = this.text.toUpperCase();
    }
  }
};
</script>