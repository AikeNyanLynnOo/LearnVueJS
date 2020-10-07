<template>
  <div class="wrapper">
    <div v-if="quoteList.length==0" class="fill-alert">Fill quote</div>
    <div class="bar-container">
      <div class="bar" :style="{width:quoteList.length*10+'%'}">{{quoteList.length}}/10</div>
    </div>
    <hr />
    <div class="input-area">
      <quote-input>
        <input type="text" v-model="quoteTitle" />
        <textarea v-model="quoteBody" cols="20" rows="6"></textarea>

        <button @click="addQuote">Add Quote!</button>
      </quote-input>
    </div>
    <hr />
    <div class="quote-panel" v-if="quoteList.length>0">
      <quote-item v-for="(quoteObj,idx) in quoteList" :key="idx">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{quoteObj.title}}</h5>
            <p class="card-text">{{quoteObj.body}}</p>
            <button class="btn btn-danger" @click="deleteQuote(idx)">Delete</button>
          </div>
        </div>
      </quote-item>
    </div>
  </div>
</template>
<script>
import QuoteInput from "./components/QuoteInput";
import QuoteItem from "./components/QuoteItem";

export default {
  data: function() {
    return {
      quoteTitle: "Title",
      quoteBody: "Body",
      quoteList: []
    };
  },
  components: {
    quoteInput: QuoteInput,
    quoteItem: QuoteItem
  },
  watch: {
    quoteList: function(finalValue) {
      if (finalValue.length >= 10) {
        alert("Quote list full !!!");
        setTimeout(() => {
          this.$destroy();
        }, 500);
      }
    }
  },
  methods: {
    deleteQuote: function(index) {
      this.quoteList.splice(index, 1);
      console.log(this.quoteList);
    },
    addQuote: function() {
      this.quoteList.unshift({
        title: this.quoteTitle,
        body: this.quoteBody
      });
    }
  }
};
</script>
<style scoped>
.wrapper {
  margin: 30px auto;
  width: 70%;
}
.bar-container {
  margin: 30px auto;
  border: 1px solid #ddd;
  box-shadow: 1px -1px 1px #ddd inset;
  border-radius: 5px;
}
.bar {
  text-align: center;
  color: #fff;
  background-color: blueviolet;
  border-radius: 5px;
  transition: width 500ms;
}
.input-area {
  display: block;
}
.quote-panel {
  border: 1px solid #ddd;
  box-shadow: 1px -1px 1px #ddd inset;
  border-radius: 5px;
}
.fill-alert {
  width: 10%;
  text-align: center;
  background-color: cyan;
  color: #000;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid cyan;
  font-style: italic;
}
</style>