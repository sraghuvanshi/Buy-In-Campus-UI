// import "./styles/dropdown.css";

class Dropdown {
  constructor(container) {
    (this.container = container),
      (this.trigger = container.querySelector(".trigger")),
      (this.content = container.querySelector(".content"));
  }
  init() {
    this.trigger.addEventListener("click", () => {
      this.trigger.classList.toggle("showDropdown");
      this.content.classList.toggle("showDropdown");
    });
  }
}

// initiate

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});
