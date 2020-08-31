// Business Logic for Devil's Pizza Order

function DevilsPizza(devilsSize, devilsToppings) {
  this.devilsSize = devilsSize;
  this.devilsToppings = devilsToppings;
  this.devilsPrice = 0;
}

  DevilsPizza.prototype.devilsPizzaPrice = function() {
  if (this.devilsSize === "biteSized") {
    this.devilsPrice += 280;
  } else if (this.devilsSize === "demonsGlutton") {
    this.devilsPrice += 140;
  } else if (this.devilsSize === "devilsFortress") {
    this.devilsPrice += 40;
  } else {
    alert("Yo demon order your selection!");
    this.devilsPrice = this.devilsPrice;
  }

  if (this.devilsToppings.length > 0) {
    this.devilsPrice += this.devilsToppings.length * 5;
  }

  return this.devilsPrice;
}


DevilsPizza.prototype.showOrderSummary = function () {
  /**
   * 1. Selected toppins
   * 2. Pizza Size
   * 3. COst
   */

   return {
      toppings: this.devilsToppings.split(', '),
      size: this.devilsSize,
      cost: this.devilsPrice
   }
}



function DevilsToppings (devils) {
  this.devils = devils;
}

// User Experience Element
let devilsPizza = new DevilsPizza();
let devilsToppings = new DevilsToppings();

$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    $("#demonOrderTotal").show();
    
    const inputDevilsSize = $("#devilsSize").val();
    const inputDevils = [];
    let devilsToppings = new DevilsToppings(inputDevils);
    let devilsPizza = new DevilsPizza(inputDevilsSize, devilsToppings.devils);

    console.log({ inputDevilsSize })

    if (inputDevilsSize === "badDemon") {
      alert("Please choose a size");
    } else {
      $("input#devils").each(function() {
        if ($(this).is(':checked')) {
          let checked = ($(this).val());
          inputDevils.push(checked);
        }
      });
      let demonOrderTotal = Object.values(devilsPizza);
      $("#demonOrderTotalValue").text("$" + devilsPizza.devilsPizzaPrice());
      console.log(devilsPizza.devilsPizzaPrice())
    }
    console.log(demonOrderTotal);
  });
});