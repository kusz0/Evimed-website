document.addEventListener("DOMContentLoaded", () => {
  const loadPartial = (id, url) => {
    fetch(url)
      .then(res => res.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(err => console.error(`Błąd ładowania ${url}:`, err));
  };

  //loadPartial("header-placeholder", "./components/header.html");
  loadPartial("footer-placeholder", "../components/footer.html");
});
