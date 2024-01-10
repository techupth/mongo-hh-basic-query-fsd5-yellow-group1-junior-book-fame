db.pizzaOrder.updateOne(
  { customer_name: "Jack" },
  { $set: { isAdmin: false } }
);

db.pizzaOrder.updateMany({}, { $set: { country: "Thailand" } });

db.pizzaOrder.updateOne(
  { customer_name: "M" },
  {
    $setOnInsert: {
      size: "large",
      total_price: 200000,
      quantity: 20,
      customer_name: "M",
      credit_card_type: "mastercard",
      created_at: new Date("2022-01-01T10:48:40Z"),
    },
  },
  { upsert: true }
);
