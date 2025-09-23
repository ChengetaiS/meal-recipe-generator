function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe-list", {
    strings: "Hello World",
    autoStart: true,
    cursor: "✍",
    delay: 100,
  });
}

let recipeForm = document.querySelector("#recipe-generator-form");
recipeForm.addEventListener("submit", generateRecipe);
