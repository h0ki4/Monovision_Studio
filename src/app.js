document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function () {
    setTimeout(() => {
      history.replaceState(null, null, window.location.pathname);
    }, 10);
  });
});
