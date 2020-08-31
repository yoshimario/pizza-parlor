// Business Logic for Devil's Pizza Order

function DemonsOrder(devilsSize, devilsToppings) {
  this.devilsSize = devilsSize;
  this.devilsToppings = devilsToppings;
  this.devilsPrice = devilsPrice;
}

DemonsOrder.prototype.devilsPrice = function() {
  let devilsPrice = [240,120,30];
  let devilsSize = ["biteSized","demonsGlutton","devilsFortress"];

  if (devilsSize === "biteSized") {
    this.devilsPrice === devilsPrice[1];
  } else if (devilsSize === "demonsGlutton") {
    this.devilsPrice === devilsPrice[2];
  } else if (devilsSize === "devilsFortress") {
    this.devilsPrice === devilsPrice[3];
  } else {
    alert("Yo demon order your selection!");
  }
  console.log("devilsPrice");
};

// User Experience Element
let demonOrder = new DemonsOrder();

$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    $(".demonOrder").show();

  });
});