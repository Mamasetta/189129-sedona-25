var searchButton = document.querySelector(".search__button");
var searchForm = document.querySelector(".search__form");

searchForm.classList.add('hidden');

searchButton.addEventListener("click", function(event) {
  event.preventDefault();
  searchForm.classList.toggle('hidden');
});
