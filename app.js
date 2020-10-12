let jobs = "./data.json";

fetch(jobs)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((list) => {
      console.log(list);
    });
  })
  .catch((err) => {
    console.log("Error en esta wea");
  });
