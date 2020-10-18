<template>
  <div class="box">
    <div>{{isCorrect === null && `No answer was chosen!` || isCorrect}}</div>
    <button class="btn-check" @click="toggleFn">Try Another</button>
  </div>
</template>
<script>
export default {
  props: {
    isCorrect: {
      type: Boolean
    },
    toggleFn: {
      type: Function
    }
  },
  data() {
    return {
      answer: "Correct"
    };
  }
};
</script>
<style scoped>
</style>