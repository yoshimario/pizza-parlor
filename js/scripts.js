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
  console.log("devilsPrice");
  this.devilsPrice = this.devilsToppings.devils.length * 25.40 + this.devilsPrice;
  }
  return this.devilsPrice;
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
    $(".demonOrderTotal").show();
    let devilsToppings = new DevilsToppings(inputtedVeggies, inputtedMeat, inputtedSauces, inputtedCheese);
    let demonsOrder = new DemonsOrder(inputtedSize, inputtedType, pizzaToppings);
    if (inputtedSize === "error") {
      alert("Please choose a size");
    } else if (inputtedType === "error") {
      alert("Please choose a type of crust");
    } else {
      $("input#cheese").each(function() {
        if ($(this).is(':checked')) {
          let checked = ($(this).val());
          inputtedCheese.push(checked);
        }
      });