// Utility Logic

function isEmpty(testString) {
  return (testString.trim().length === 0);
}


// Business Logic

function wordCounter(text) {
  if (isEmpty(text)) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (isEmpty(word)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function mostCommonWords(text){
  const textArray = text.split(" "); //turns our input text to an array
  const alreadyCheckedArray = []; //makes an array to store our words we already checked
  textArray.forEach(function(element) { //FOR EACH word in our inputted text
    let wordCount = 0; //sets word count to 0
    const toCheck = element.toLowerCase(); //pick that word to check against our sentence
    textArray.forEach(function(element){ //FOR EACH word in our inputted text
      if (element.toLowerCase() === toCheck){ //if the word in our inputted text matches our TO CHECK word
        wordCount++ //increase word count
      }// otherwise don't do anything
    });
    if (alreadyCheckedArray.includes(toCheck)){ //If our TO CHECK word is already in our "checked words" array
      console.log (toCheck + " already exists"); //Say it's already there, for posterity
      return; // do nothing
    } else { //otherwise (which means the TOCHECK word has NOT been checked and is NOT in our alreadyCheckedArray)
      alreadyCheckedArray.push(toCheck); //add it to the already checked array
      const paragraph = document.createElement("p"); //make a paragraph element
      const body = document.querySelector("body"); //choose the body of the document
      paragraph.append(toCheck + " " + wordCount); //add our TOCHECK word and word count (how many times that word showed up in theinput text) to the paragraph element
      body.append(paragraph); //puts the paragraph element at the bottom of the page
    };
  });
};
//foreach in alreadyCheckedArray
  //if tocheck === element
    //return
  //else
    //add the paragraph

// UI Logic

function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});





// BAD WORDS FUNCTIONS

function noBadWords(word, text) {
  let wordCount = 0;
  const wordArray = word.split(" ");
  const textArray = text.split(" ");
  textArray.forEach(function(word) {
    const wordIndex = textArray.indexOf(word);
    const deleteCount = 1;
  if (word.toLowerCase().includes("zoinks")) {
    textArray.splice(wordIndex, deleteCount);
  } else if (word.toLowerCase().includes("muppeteer")) {
    textArray.splice(wordIndex, deleteCount);
  } else if (word.toLowerCase().includes("biffaroni")) {
    textArray.splice(wordIndex, deleteCount);
  } else if (word.toLowerCase().includes("loopdaloop")) {
    textArray.splice(wordIndex, deleteCount);
  }
  });
  return textArray;
}

function omitOffensiveWords(badArray, inputText){
  let inputArray = inputText.split(" ");
  badArray.forEach(function(element){
    const badWord = element;
    inputArray.forEach(function(element){
      if (element.includes(badWord)){
        const deleteCount = 1;
        const wordIndex = inputArray.indexOf(element);
        inputArray.splice(wordIndex, deleteCount);
      }
    });
  });
  return inputArray;
}