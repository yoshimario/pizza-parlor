// Business Logic for Devil's Pizza Order

function DevilsPizzas() {
  this.demonNumber = 0;  // Order Number
  this.devilsPizzas = [];
}

DevilsPizzas.prototype.devilsPrice = function(devilsPizza) {
  let demonsTotal = 0;
  let devilsPrice = [100, 80, 20];
  let devilsSize = ["biteSized", "demonsGlutton", "devilsFortress"];
  for (let d = 0; d < devilsSize.length; d++) {
    if (devils.size === devilsSize[d]) {
      demonsTotal = devilsPrice[d];
    }
  }
  demonsTotal (devilsPizza.devilsToppings.length * 202.50);
  return demonsTotal;
}

// User Experience Element
function devilsPizza {
  this.devilsSize = devilsSize;
  this.devilsToppings = devilsToppings;
}

$(document).ready(function() {
  event.preventDefault();
  $("form#pizzaForm").submit(function(event) {
    
  });
});
