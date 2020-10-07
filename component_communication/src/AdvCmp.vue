<template>
  <div class="container">
    <div class="col-xs-12">
      <button @click="selectedCmp = 'appQuote'">Home</button>
      <button @click="selectedCmp = 'appAuthor'">Author</button>
      <button @click="selectedCmp = 'appBook'">Book</button>
      <hr />
      <p>{{selectedCmp}}</p>
      <keep-alive>
        <component :is="selectedCmp"></component>
      </keep-alive>
      <!-- <app-quote>
        <h1 slot="title">Quote Title</h1>
        <pre slot="body">{{quote}}</pre>
        <button slot="btn" @click="changeQuote">Change quote</button>
        <footer>This is Default slot</footer>
      </app-quote>-->
    </div>
  </div>
</template>
<script>
import Quote from "./components/Quote";
import Author from "./components/Author";
import Book from "./components/Book";
export default {
  data: function() {
    return {
      quote: "A wonderful quote!",
      selectedCmp: "appQuote"
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appBook: Book
  },
  methods: {
    changeQuote: function() {
      this.quote = "A very nice quote!";
    }
  }
};
</script>
<style>
button {
  border: 1px solid brown;
  background-color: brown;
  padding: 10px;
  color: #fff;
}
button:focus {
  outline: none;
}
h1 {
  color: blue;
}
footer {
  font-style: italic;
  color: brown;
}
</style>