function showRecipe(response) {
  let loading = document.querySelector("#loading");
  loading.classList.remove("loader");

  new Typewriter("#recipe-list", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "✍",
    delay: 50,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let loading = document.querySelector("#loading");
  loading.classList.add("loader");

  let desertName = document.querySelector("#user-entry");
  let apiKey = "607bfb3coe77c132397e1ee35e4f2cat";
  let prompt = `Generate a short recipe for a desert called ${desertName.value} entered by user.`;
  let context =
    "You are a seasoned chef and your specialty are short and simple deserts. Present the recipe in 'HTML format'. Be concise and give only the recipe.Remove the html word at the beginning of the recipe.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showRecipe);
}

let recipeForm = document.querySelector("#recipe-generator-form");
recipeForm.addEventListener("submit", generateRecipe);
