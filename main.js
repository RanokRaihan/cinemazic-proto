const button = document.querySelector(".search");
const resustContainer = document.querySelector(".result-container");
const input = document.querySelector(".movie-name");
const animation = document.querySelector(".search-animation");
animation.style.display = "none";

const searchMovie = () => {
  const movieName = document.querySelector(".movie-name").value;
  if (movieName.trim() === "") {
    alert("please enter a movie name");
    return false;
  }
  animation.style.display = "block";
  resustContainer.innerHTML = "";
  fetch(`https://gentle-savannah-55289.herokuapp.com/searchMovie/${movieName}`)
    .then((res) => res.json())
    .then((data) => renderResult(data, movieName));
};
const renderResult = (data, movieName) => {
  animation.style.display = "none";
  if (data.length != 0) {
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
  } else {
    console.log("not found");
    resustContainer.innerHTML = `<strong style="color:red">No movie found named '${movieName}'. Please make sure the spelling of the movie name is correct and search again.</strong>`;
  }
};
button.addEventListener("click", searchMovie);
input.addEventListener("keyup", (event) => {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    button.click();
  }
});
