// Search Container Click Listener

document.addEventListener("click", (e) => {
  let searchContainer = document.getElementsByClassName("nav-search");
  let input = document.getElementsByTagName("input");
  if (e.target === searchContainer[0]) {
    input[0].focus();
  }
});
