var addToCartButtons = document.querySelectorAll(".product-addtocart");
var confirmation = document.querySelector(".confirmation");
function showConfirmation() {
  confirmation.classList.toggle("is-active");
  setTimeout(() => {
    confirmation.classList.toggle("is-active");
  }, 2000);
  console.log("test");
}

addToCartButtons.forEach((addToCart) => {
  addToCart.addEventListener("click", function () {
    showConfirmation();
  });
});
