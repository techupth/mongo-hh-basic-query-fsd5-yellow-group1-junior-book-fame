const { Db } = require("mongodb");

db.pizzaOrder.findone({ Customer_name: "Cherlyn" });
// {
//     _id: ObjectId('659e190f8207b26f0c658c2e')
//     size: 'medium'
//     total_price: 4627.41
//     quantity: 12,
//     customer_name: 'Cherlyn'
//     credit_card_type: 'mastercard'
//     created_at: 2021-06-27T23:57:12.000Z
//   }
db.pizzaOrder.find({ credit_card_type: "mastercard" });

db.pizzaOrder.find({ credit_card_type: "mastercard" }).limit(10);
