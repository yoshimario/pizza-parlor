// Business Logic for Devil's Pizza Order

function PizzaOrder() {
  this.orderPizzas = [];
  this.demonNumber = 0;
}

PizzaOrder.prototype.addDevilsPizza = function(pizzaOrder) {
  pizzaOrder.demonNumber = this.demonNumber();
}

// Business Logic for Devil's Pizza

function PizzaInfo(size,toppings) {
  this.size = size;
  this.toppings = toppings;
}

// User Experience Element

let pizzaOrder = new PizzaOrder();
$(document).ready(function() {
  event.preventDefault();
  $("form#pizzaForm").submit(function(event) {
    

  });
});
