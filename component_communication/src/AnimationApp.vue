<template>
  <div class="container">
    <h1>Answer Quiz</h1>
    <hr />
    <transition enter-active-class="animate__animated animate__flipInY">
      <component :is="curCmp" :toggleFn="toggleView" :isCorrect="isCorrect"></component>
    </transition>
  </div>
</template>
<script>
import Quiz from "./components/Quiz";
import Answer from "./components/Answer";

export default {
  data: function() {
    return {
      curCmp: "appQuiz"
    };
  },
  components: {
    appQuiz: Quiz,
    appAnswer: Answer
  },
  methods: {
    toggleView: function(isCorrect = null) {
      this.isCorrect = isCorrect;
      this.curCmp == "appQuiz"
        ? (this.curCmp = "appAnswer")
        : (this.curCmp = "appQuiz");
    }
  }
};
</script>
<style scoped>
.container {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-align: center;
  width: 50%;
  margin: 0 auto;
}
hr {
  margin: 0;
}
</style>