const cart = [199, 299, 499];

function calculateAmount(cart) {
  const total = cart.reduce((accumulator, currentPrice) => accumulator + currentPrice, 0);
  return total;
}

const totalPrice = calculateAmount(cart);
console.log("Total =", totalPrice);