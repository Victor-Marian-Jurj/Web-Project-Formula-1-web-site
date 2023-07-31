function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function showJumbotronImage() {
    const jumbotronImage = document.getElementById("jumbotron-image");
    if (isInViewport(jumbotronImage)) {
      jumbotronImage.style.opacity = 1;
      window.removeEventListener("scroll", showJumbotronImage);
    }
  }

  window.addEventListener("scroll", showJumbotronImage);