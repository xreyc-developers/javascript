// STRUCTURE 3 : USING IIFE (Immediately Invoked Function Expression)
// - uses namespaces but let you control access
// - you can isolate some of your functionality, you can control
// which part of your code are exposed
// STRUCTURE 1 : COMMON START

const APP = (function() {
  document.addEventListener('DOMContentLoaded', init)
  const today = new Date();
  const KEY = 'jhj324gj23h42j34';

  function init() {
    console.log(today.toLocaleDateString());
    addListeners();
    let url = `https://jsonplaceholder.typicode.com/posts?key=${KEY}`;
    getData(url, afterFetch)
  }

  function addListeners() {
      console.log('Adding event listener');
  }

  function getData(url, cb) {
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
  }

  function afterFetch() {
    console.log('data fetch completed');
  }

  return {
    today,
    KEY
  }
})()

console.log(APP.today);
