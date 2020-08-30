// Business Logic for Devil's Pizza Order

function DevilsPizzas() {
  this.demonNumber = 0;  // Order Number
  this.devilsPizzas = [];
  this.devilsToppings = devilsToppings;
}

DevilsPizzas.prototype.devilsPrice = function(devilsPizza) {
  let demonsTotal = [];
  let devilsPrice = [100, 80, 20];
  let devilsSize = ["biteSized", "demonsGlutton", "devilsFortress"];
  if (devilsSize === "biteSized") {
    demonsTotal === devilsPrice[1];
  } else if (devilsSize === "demonsGlutton") {
    demonsTotal === devilsPrice[2];
  } else if (devilsSize === "devilsFortress") {
    demonsTotal === devilsPrice[3];
  } else {
    demonsTotal = demonsTotal;
  } 
}

// User Experience Element
let devilsPizza = new DevilsPizza();

$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault(); 
    $("form#demonOrderTotal").show();
    $("input:checkbox[name=devilsTopping]:checked").each(function() {
      
  });
});
