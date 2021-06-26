const button = document.querySelector(".search");
const resustContainer = document.querySelector(".result-container");

const searchMovie = () => {
  const movieName = document.querySelector(".movie-name").value;
  resustContainer.innerHTML = "";
  fetch(`https://gentle-savannah-55289.herokuapp.com/searchMovie/${movieName}`)
    .then((res) => res.json())
    .then((data) => renderResult(data));
};
const renderResult = (data) => {
  if (data) {
    data.forEach((element) => {
      resustContainer.innerHTML =
        resustContainer.innerHTML +
        `
        <div>
            <h1>${element.title}</h1>
            <div>${element.links}</div>
        </div>
            
        `;
    });
  }
};
button.addEventListener("click", searchMovie);
