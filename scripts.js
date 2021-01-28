// Case price calculation
document.getElementById("case-increase").addEventListener("click", function () {
  handleProductChanging(true, 59, "case-count", "case-price");
});
document.getElementById("case-decrease").addEventListener("click", function () {
  handleProductChanging(false, 59, "case-count", "case-price");
});

// Phone price calculation
document
  .getElementById("phone-increase")
  .addEventListener("click", function () {
    handleProductChanging(true, 1219, "phone-count", "phone-price");
  });
document
  .getElementById("phone-decrease")
  .addEventListener("click", function () {
    handleProductChanging(false, 1219, "phone-count", "phone-price");
  });

// handle product changing
function handleProductChanging(
  isIncrease,
  price,
  productCountId,
  productPriceId
) {
  const productCount = document.getElementById(productCountId).value;
  let productCountNumber = parseInt(productCount);
  if (!isNaN(productCountNumber)) {
    if (isIncrease == true) {
      productCountNumber = parseInt(productCount) + 1;
    }
    if (isIncrease == false && productCount > 0) {
      productCountNumber = parseInt(productCount) - 1;
    }
    document.getElementById(productCountId).value = productCountNumber;

    productTotal = productCountNumber * price;
    document.getElementById(productPriceId).innerText = productTotal;
    calculateTotal();
  } else {
    alert("Input Can't be a text");
    document.getElementById(productCountId).value = 1;
  }
}
// calculate Total
function calculateTotal() {
  caseCount = getInputValue("case");

  phoneCount = getInputValue("phone");

  const totalPrice = phoneCount * 1219 + caseCount * 59;
  document.getElementById("total-price").innerText = totalPrice;

  const tax = totalPrice * 0.1;
  const taxAmount = Math.round(tax);
  document.getElementById("tax").innerText = taxAmount;

  const grandTotal = totalPrice + taxAmount;
  document.getElementById("grand-total").innerText = grandTotal;
}

function getInputValue(product) {
  const productInput = document.getElementById(product + "-count");
  const productCount = parseInt(productInput.value);
  if (!isNaN(productCount)) {
    return productCount;
  }
}
// // Basic style of coding
// document.getElementById("case-increase").addEventListener("click", function () {
//   const caseCount = document.getElementById("case-count").value;
//   const caseCountNumber = parseInt(caseCount) + 1;
//   document.getElementById("case-count").value = caseCountNumber;

//   caseTotal = caseCountNumber * 59;
//   document.getElementById("case-price").innerText = caseTotal;
// });
// document.getElementById("case-decrease").addEventListener("click", function () {
//   const caseCount = document.getElementById("case-count").value;
//   const caseCountNumber = parseInt(caseCount) - 1;
//   document.getElementById("case-count").value = caseCountNumber;

//   caseTotal = caseCountNumber * 59;
//   document.getElementById("case-price").innerText = caseTotal;
// });
