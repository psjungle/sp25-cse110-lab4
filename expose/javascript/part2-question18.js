let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);

setInterval(() => {
  d = new Date();
  time = d.toLocaleTimeString();
  console.log(time);
}, 1000);
