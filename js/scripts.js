var searchButton = document.querySelector(".search__button");
var searchForm = document.querySelector(".search__form");
var searchDateIn = document.querySelector(".search-form__date--in");
var searchDateOut = document.querySelector(".search-form__date--out");

searchForm.classList.add('hidden');

searchButton.addEventListener("click", function(event) {
  event.preventDefault();
  searchForm.classList.toggle('hidden');
  searchForm.classList.toggle('opening');
});

searchForm.addEventListener("submit", function (event) {
  if (!searchDateIn.value || !searchDateOut.value) {
    event.preventDefault();
    searchButton.addEventListener("click", function(event) {
      event.preventDefault();
    });
    searchDateIn.classList.add("error");
    searchDateOut.classList.add("error");
    alert("Укажите дату заезда и дату выезда");
  }
});
