const cart = [199, 299, 499];

function calculateTotal(cart) {
  const total = cart.reduce((sum, price) => sum + price, 0);
  return total;
}

const totalPrice = calculateTotal(cart);
console.log("Total =", totalPrice);