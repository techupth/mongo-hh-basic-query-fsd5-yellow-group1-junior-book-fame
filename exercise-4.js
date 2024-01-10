db.pizzaOrders.find({
  quantity: { $gte: 1, $lte: 5 },
  credit_card_type: "mastercard",
});

db.pizzaOrders.find({ quantity: { $gte: 1, $lte: 5 }, size: "small" });

db.pizzaOrders.find({ quantity: { $gte: 10 }, credit_card_type: null });
