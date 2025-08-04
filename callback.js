//setInterval(callback, duration)

function sayHello() {
  console.log('Hello')
}

setInterval(sayHello, 1000);

setTimeout(sayHello, 2000);
console.log('This will run first');