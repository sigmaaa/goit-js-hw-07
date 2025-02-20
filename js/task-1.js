const ulCategories = document
  .querySelector("ul#categories")
  .querySelectorAll(".item");
console.log(`Number of categories ${ulCategories.length}`);

ulCategories.forEach((elem) => {
  console.log(`Category: ${elem.querySelector("h2").textContent}`);
  console.log(`Elements ${elem.querySelectorAll("ul li").length}`);
});
