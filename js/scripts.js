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
    this.devilsPrice = 0;
  }
  console.log("devilsPrice");
  this.devilsPrice = this.devilsToppings.length * 25.40 + this.devilsPrice;
  }
  return this.devilsPrice;
};

function DevilsToppings (devilsToppings) {
  this.devilsToppings = devilsToppings;
}

// User Experience Element
let demonsOrder = new DemonsOrder();
let devilsToppings = new DevilsToppings();

$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    $(".demonOrder").show();
  })
  });
});