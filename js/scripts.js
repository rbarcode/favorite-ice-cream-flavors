
const favoriteIceCreamFlavor = ["chocolate chip cookie dough", "brownie", "cookies 'n cream", "vanilla"];

window.onload = function () {
  let ulTag = document.createElement("ul");
  document.querySelector("body").append(ulTag);

  favoriteIceCreamFlavor.forEach(function (flavor) {
    const li = document.createElement("li");
    li.append(flavor);
    ulTag.append(li);
  });

}