let button = document.getElementById("calcBtn");
let quantityInput = document.getElementById("quantity");
let unitPriceInput = document.getElementById("unitPrice");

button.addEventListener("click", calculateTotal);

  quantityInput.addEventListener("keyup", calculateTotal);
  unitPriceInput.addEventListener("keyup", calculateTotal);

function calculateTotal() {
  let quantity = Number(quantityInput.value);
  let unitPrice = Number(unitPriceInput.value);

  let total = quantity * unitPrice;

  document.getElementById("totalAmount").textContent =
    "Total Amount: RM " + total.toFixed(2);
}
