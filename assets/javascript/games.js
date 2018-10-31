  //Randomly generate letter
   
  var targetNumber = function(){
    targetNumber = [Math.floor(Math.random() * 101) +19];
    targetNumber = parseInt(targetNumber);
  return 
  }


targetNumber();
 
 
 $("#totalNumber").text(targetNumber);
   console.log(targetNumber);
   

  var counter = 0;
  var wins = 0;
  var loss = 0;
   

// Now for the hard part. Creating multiple crystals each with their own unique number value.

// Next we create a for loop to create crystals for every numberOption.

var createCrystals = function(){
  $("#crystals").empty();
  for (var i = 1; i < 5; i++) {


  var numberOptions = function() {
    numberOptions = [Math.floor(Math.random() * 12)+ 1];
    return numberOptions;
  }

    // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", numberOptions);
  console.log(numberOptions);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#crystals").append(imageCrystal);
  
  }
}


createCrystals();

// This time, our click event applies to every single crystal on the page. Not just one.
var score = function(){
  $("#totalScore").empty();

$(".crystal-image").on("click", function() {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

 $("#totalScore").text("Your score is: " + counter)
  console.log(counter);



// Keep track of wins and losses
  if (counter === targetNumber) {
    wins++;
    alert("You win");
    $("#wins").text("Wins: " + wins);
    reset();
  }
   
   else if (counter > targetNumber) {
    loss++;
    alert("You Lost") ;
     $("#loss").text("Lose: " + loss);
    reset();
    
    } 


  
});
}
score();


//reset targetNumber and counter
var reset = function(){
  targetNumber = [Math.floor(Math.random() * 101) +19];
  $("#totalNumber").text(targetNumber);

  createCrystals();
  score();
  $("#totalScore").text("Total Score: ")
  
  counter = 0;

 


}

