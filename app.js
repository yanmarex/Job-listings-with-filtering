let jobs = "./data.json";

const app = document.getElementById("jobs");

fetch(jobs)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((list) => {
      //Crear contenedor para cada articulo.
      const container = document.createElement("article");
      container.setAttribute("class", "job-card");
      app.appendChild(container);
      //Aplicar los logos a cada articulo
      const jobCardImage = document.createElement("div");
      jobCardImage.setAttribute("class", "job-card-image");
      const jobCardImageChild = document.createElement("img");
      jobCardImageChild.src = `${list.logo}`;
      jobCardImage.appendChild(jobCardImageChild);
      container.appendChild(jobCardImage);
      //Crear y pegar el div de description
      const jobCardDescription = document.createElement("div");
      jobCardDescription.setAttribute("class", "job-card-description");
      container.appendChild(jobCardDescription);
      //Pegar el author to
      const jobAuthor = document.createElement("div");
      jobAuthor.setAttribute("class", "job-author");
      jobCardDescription.appendChild(jobAuthor);
      //
      const h3 = document.createElement("h3");
      h3.setAttribute("class", "company-name");
      h3.textContent = list.company;
      jobAuthor.appendChild(h3);
      //
      const aStatus = document.createElement("a");
      aStatus.setAttribute("class", "job-status");
      aStatus.textContent = list.new;
      aStatus.textContent = list.featured;
      jobAuthor.appendChild(aStatus);
      //
      const jobHeader = document.createElement("div");
      jobHeader.setAttribute("class", "job-header");
      container.appendChild(jobHeader);
      const h2 = document.createElement("h2");
      h2.setAttribute("class", "job-title");
      h2.textContent = list.position;
      jobHeader.appendChild(h2);
      //
      const jobLocationDate = document.createElement("div");
      jobLocationDate.setAttribute("class", "job-location-date");
      container.appendChild(jobLocationDate);
      const spanDate = document.createElement("span");
      spanDate.setAttribute("class", "location-items");
      const spanContract = document.createElement("span");
      spanContract.setAttribute("class", "location-items");
      const spanLocation = document.createElement("span");
      spanLocation.setAttribute("class", "location-items");
      spanDate.textContent = list.postedAt;
      spanContract.textContent = list.contract;
      spanLocation.textContent = list.location;
      jobLocationDate.appendChild(spanDate);
      jobLocationDate.appendChild(spanContract);
      jobLocationDate.appendChild(spanLocation);
      //
      const jobCardTags = document.createElement("div");
      jobCardTags.setAttribute("class", "job-card-tags");
      container.appendChild(jobCardTags);
      //
      let languages = list.languages;
      languages.forEach((item) => {
        const aTags = document.createElement("a");
        aTags.setAttribute("class", "tags");
        aTags.textContent = item;
        jobCardTags.appendChild(aTags);
      });
      //
      let tools = list.tools;
      tools.forEach((tool) => {
        const aTags = document.createElement("a");
        aTags.setAttribute("class", "tags");
        aTags.textContent = tool;
        jobCardTags.appendChild(aTags);
      });
    });
  })
  .catch((err) => {
    console.log("Error en esta wea");
  });
