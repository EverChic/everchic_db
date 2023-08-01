const Customer = require("./Customer");
const Order = require("./Order");

Customer.hasMany(Order) 
Order.belongsTo(Customer) // customerId

