// STRUCTURE 1 : COMMON START
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

document.addEventListener('DOMContentLoaded', init)
