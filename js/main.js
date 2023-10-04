//opacity wird mit dem Scroll Wert kontrolliert
window.addEventListener(`scroll`, function (e) {
  const scroll = this.scrollY / 250;
  document.getElementById("blurred").style.opacity = `${scroll}`;
});
