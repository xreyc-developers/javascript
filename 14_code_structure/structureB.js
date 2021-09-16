// STRUCTURE 2 : USING NAME SPACES
// PROBLEM SOLVED
// - when things start to get bloated
// - there might be a variables conflicts

// NOTE:
// - use the namespace instead of this to be specific, context might change
// sometimes if you use arrow function

// YOUR NAMESPACE
const APP = {
  today: new Date(),
  KEY: 'jhj324gj23h42j34',
  init: function() {
    console.log(APP.today.toLocaleDateString());
    APP.addListeners();
    let url = `https://jsonplaceholder.typicode.com/posts?key=${APP.KEY}`;
    APP.getData(url, APP.afterFetch)
  },
  addListeners: function() {
      console.log('Adding event listener');
  },
  // THIS IS EQUIVALENT TO: getData: function() {}
  getData(url, cb) { // USE ES6 SYNTAX
    fetch(url)
      .then((res) => res.json())
      .then((content) => {
        console.log(content);
        if(cb) {
          cb();
        }
      })
      .catch((err) => {
        console.log(err);
      })
  },
  afterFetch() { // USE ES6 SYNTAX
    console.log('data fetch completed');
  },
  abc: () => { // THIS IS NOT EQUIVALENT TO: getData() or getData: function() {}
    console.log('Hello world');
  }
}
document.addEventListener('DOMContentLoaded', APP.init)

// OTHERS NAMESPACE
const CONTACT = {}
const CART = {}
const MAPPING = {}
