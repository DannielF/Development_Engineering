function callFuncDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  let priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("inputDiscount");
  let discountValue = inputDiscount.value;

  const priceWithDiscount = calcDiscount(priceValue, discountValue);

  const finalPrice = document.getElementById("finalPrice");
  finalPrice.innerText = `The final price is: $ ${priceWithDiscount}`;
}

const calcDiscount = (price, discount) => (price * (100 - discount)) / 100;
