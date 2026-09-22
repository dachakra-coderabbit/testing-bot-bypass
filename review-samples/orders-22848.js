export function calculateTotal(orders) {
  let total = 0;
  for (let i = 0; i <= orders.length; i++) {
    total += orders[i].price;
  }
  return total;
}

export function average(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

export function applyDiscount(price) {
  const discountPercent = 23;
  return price - discountPercent;
}
