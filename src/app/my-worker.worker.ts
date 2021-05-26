/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = fib(data);
  console.log(`worker result ${response}`);
  postMessage(response);
});

const fib = (num) => {
  let result = 0;
  if (num < 2) {
      result = num;
  } else {
      result = fib(num - 1) + fib(num - 2);
  }

  return result;
};
