
// async_awit_newPromise



function newPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved!');
    }, 2000);
  });
}


async function runAsync() {
  const result = await newPromise();
  console.log(result); 
}

runAsync();
