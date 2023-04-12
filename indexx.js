const logHi = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      //   res([
      //     {
      //       title: "EndGame",
      //     },
      //     {
      //       title: "Infinity war",
      //     },
      //   ]);
      rej(new Error("There are no Movies in Database"));
    }, 2000);
  });
};
const getMovies = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([
        {
          title: "EndGame",
        },
        {
          title: "Infinity war",
        },
      ]);
    }, 2000);
  });
};
console.log("Before");
// const result = logHi()
//   .then((movies) => {
//     console.log(movies);
//   })
//   .catch((err) => console.log(err));
// const result1 = getMovies()
//   .then((movies) => {
//     console.log(movies);
//   })
//   .catch((err) => console.log(err));

async function printMovies() {
  try {
    const movies = await getMovies();
    console.log(movies);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Closing Database Connection");
  }
}
printMovies();
console.log("After");
