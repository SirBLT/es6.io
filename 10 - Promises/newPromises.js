const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error("Bro, Wes really isn't that cool..."));
  }, 1000);
});

p
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
