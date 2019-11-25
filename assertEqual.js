const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅' + 'Assertation Passed: ' + actual + ' === ' + expected);
  } else {
    console.log('🛑🛑🛑' + 'Assertation Failed: ' + actual + ' !== ' + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(5,4.3);
assertEqual(5, 5);
assertEqual('sad', 'sad');
assertEqual('sad', 'mad');