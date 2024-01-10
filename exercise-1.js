db.pizzaOrders.findOne({
  customer_name: "Cherlyn",
});

credit_card_type;

db.pizzaOrders.find({
  credit_card_type: "mastercard",
});

db.pizzaOrders
  .find({
    size: "medium",
  })
  .limit(5);
