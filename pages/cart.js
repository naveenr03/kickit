const cartCountElement = document.querySelector(".cart-count");
const cartButton = document.getElementById("addcart");

function updateCartCount() {
  cartCountElement.textContent = cartCount;
}

function addToCart() {
  cartCount++;
  updateCartCount();
}

document.body.addEventListener("click", function (event) {
  if (event.target === cartButton) {
    addToCart();
  }
});

let cartCount = 0;