'use strict'

$(document).ready(function() {
  // Var Stash
  let numberToGuess = 0
  let wins = 0
  let loses = 0
  let totalScore = 0
  let crystalWorth
  let crystalWorthSelector

  const numberAddOptions = [3, 5, 6, 10]
  // crystalWorthSelector = numberAddOptions[Math.floor(Math.random() * 5)];
  function crystalWorthSelectorMaker() {
    crystalWorthSelector = numberAddOptions[Math.floor(Math.random() * 4)]
    return crystalWorthSelector
  }

  //////////////////////////////////////////////////////////////////////////
  // This is the Durstenfeld Shuffle, a modified version of the Fisher-Yates algorithm.
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }
  ///////////////////////////////////////////////////////////////////////////

  // console.log('I increment', crystalWorthSelector); //remove me

  function randomNumberGenerator() {
    let randomNumberGenerators
    randomNumberGenerators = Math.floor(
      Math.random() * 10 + Math.floor(Math.random() * 91) + 20,
    )
    return randomNumberGenerators
  }

  numberToGuess = randomNumberGenerator()
  // $('#number-to-guess').text(randomNumberGenerator());

  $('#number-to-guess').text(numberToGuess)
  crystalWorthSelectorMaker()
  // console.log(crystalWorth);
  // Loop to create crystals for every numberAddOptions

  // forToMakeCrystals() was here!!
  function forToMakeCrystals() {
    $('#crystals').empty()
    randomNumberGenerator()

    for (let i = 0; i < numberAddOptions.length; i++) {
      let imageCrystal = $('<img>')

      imageCrystal.addClass('crystal-image')

      imageCrystal.attr('src', './assets/images/sapphire_PNG13.png')
      crystalWorthSelectorMaker() //change the crystalSelectorValue
      imageCrystal.attr('data-crystalvalue', crystalWorthSelectorMaker())

      imageCrystal.attr('style', 'height: 150px; width: 150px')

      $('#crystals').append(imageCrystal)
    }
  }
  forToMakeCrystals()

  //On Click
  $(document).on('click', '.crystal-image', function() {
    // console.log(numberAddOptions);
    crystalWorth = $(this).attr('data-crystalvalue')
    crystalWorth = parseInt(crystalWorth)

    totalScore += crystalWorth

    $('#total-score').text(parseInt(totalScore))

    if (totalScore == numberToGuess) {
      // console.log('You Win!');
      wins++

      $('#win').text(wins)
      shuffleArray(numberAddOptions)
      // crystalWorthSelectorMaker();
      totalScore = 0
      $('#total-score').text(parseInt(totalScore))
      numberToGuess = randomNumberGenerator()
      $('#number-to-guess').text(numberToGuess)
      forToMakeCrystals()
    } else if (totalScore > numberToGuess) {
      // console.log('You lose');

      loses++
      $('#lose').text(loses)
      shuffleArray(numberAddOptions)
      // crystalWorthSelectorMaker();
      totalScore = 0
      $('#total-score').text(parseInt(totalScore))
      numberToGuess = randomNumberGenerator()
      $('#number-to-guess').text(numberToGuess)
      forToMakeCrystals()
    }
  })
}) //document.ready ends here
