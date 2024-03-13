let searchInput = document.getElementById("searchInput");
let searchForm = document.getElementById("search-form");
let searchResult = document.getElementById("result");
let showMore = document.getElementById("show-more");

let access_Key = "cDf5xHfQsV5cXCTHe4AZRJ4XvtINuJcrHxlKiqI3miA";
let keyword = "";
let page = 1;
async function searchImage() {
  keyword = searchInput.value;
  let url = `https://api.unsplash.com/search/photos?&query=${keyword}&page=${page}&client_id=${access_Key}&per_page=12`;

  let response = await fetch(url);
  let data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  const results = data.results;
  //   console.log(data);

  results.map((result) => {
    let image = document.createElement("img");
    image.src = result.urls.small;

    let imageLinks = document.createElement("a");
    imageLinks.href = result.links.html;
    imageLinks.target = "_blank";

    imageLinks.appendChild(image);

    searchResult.appendChild(imageLinks);
  });

  showMore.style.visibility = "visible";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

showMore.addEventListener("click", function () {
  page++;
  searchImage();
});
