db.pizzaOrder.findone(
  { customer_name: "Zoe" },
  { total_price: 1, customer_name: 1 }
);
