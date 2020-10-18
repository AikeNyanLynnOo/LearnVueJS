<template>
  <div class="box">
    <p class="question">What is the answer of {{quiz.a}} {{quiz.operation}} {{quiz.b}}</p>
    <div class="answers">
      <button
        v-for="answer in answers"
        :key="answer"
        class="answer"
        @click="selectAns(answer)"
      >{{answer}}</button>
    </div>
    <button class="btn-check" @click="toggleFn(isCorrect)">Check Answer</button>
  </div>
</template>
<script>
export default {
  props: {
    toggleFn: {
      type: Function
    }
  },
  data: function() {
    return {
      answers: [],
      correctAns: 0,
      isCorrect: null,
      quiz: {
        a: Math.floor(Math.random() * 100),
        b: Math.floor(Math.random() * 100),
        operation: ["+", "-", "*"][+Math.round(Math.random() * 2)]
      }
    };
  },
  methods: {
    selectAns(answer) {
      if (this.correctAns === answer) {
        this.isCorrect = true;
      } else {
        this.isCorrect = false;
      }
    }
  },
  created() {
    const helps = [-1, -2, 1, 2];
    const ans = eval(`${this.quiz.a}${this.quiz.operation}${this.quiz.b}`);
    for (var i = 0; i < 3; i++) {
      this.answers.push(ans + helps[+Math.round(Math.random() * 3)]);
    }
    this.answers.splice(+Math.round(Math.random() * 4), 1, ans);
    this.correctAns = ans;
  }
};
</script>
<style>
.box {
  margin: 20px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 2px #ddd;
}
.btn-check {
  padding: 0.5em 0.5em;
  margin: 10px;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
  background-color: #3333ff;
  border: 1px solid #3333ff;
}
.btn-check :focus {
  outline: none;
}
.answers {
  width: 50%;
  margin: 0 auto;
  padding: 2em 4em;
  text-align: center;
  display: flex;
  flex-direction: row;
}
.answer {
  width: 25%;
  font-size: medium;
  margin: 0 1em;
  background-color: skyblue;
  border-radius: 3px;
  border: 1px solid skyblue;
  cursor: pointer;
}
.answer:focus {
  border: 2px solid #3333ff;
}
</style>