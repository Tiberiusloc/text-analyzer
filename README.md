Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test:"It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("             ")
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2


Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code: 
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word then the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOCcurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
numberOfOccurrencesInText(word, text);
Expected Output: 0


Describe: noBadWords()
Test: "It should return a word match regardless of case."
Code: 
const text = "zoinks zoinks scoob muppeteer 3 biffaroni meal loopdaloop round";
const word = "zoinks muppeteer biffaroni loopdaloop";
Expected Output: 5

Test: "It should remove the bad words from output."
Code:
const text = "zoinks zoinks scoob muppeteer 3 biffaroni meal loopdaloop round";
const word = "zoinks muppeteer biffaroni loopdaloop";
Expected Output: 0

Describe: mostCommonWords()

Test: "It should return 1 if there is one instance of the word" 
Code:
  const text = "hi";
  mostCommonWords(text);
Expected Output: hi 1

Test: "It should return 2 if there are two instances of the word"
Code:
  const text = "hi hi";
  mostCommonWords(text);
Expected output: hi 2

Test: "It should return the correct word count if there are also other words"
Code: 
  const text = "Hi there hey yo hi hi yay yo whoa there whoa yay"
  mostCommonWords(text);
Expected output: hi 3

Test: "It should return the correct word count for two different words."
Code: 
  const text = "hi Hi bye hi bye Bye"
  mostCommonWords(text);
Expected output: hi 3 bye 3