const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  let tutorialCopy = []

  tutorials.map((line) => {
    let sentence = line.split();
    //console.log(sentence)
    let words = sentence[0].split(" ");
    //console.log(words)
    words = words.map( (individualWord) => {
      let capitalizedWord = individualWord.charAt(0).toUpperCase() + individualWord.slice(1);
      return capitalizedWord;
    })
    sentence = words.join(" ");
    
    tutorialCopy.push(sentence);
    
  })

  tutorials.map((line, index) => {
    tutorials[index] = tutorialCopy[index]
  })

  tutorialCopy.length = 0
  console.log(tutorials)
  return tutorials
}

titleCased();

/* function testSplit(){
  console.log(tutorials[0]);

  const test = tutorials[0];

  console.log(test);

  const test2 = test.split();

  console.log(test2)

  let test3 = []; 

  test2.forEach(() => {test3 = test2[0].split(" ")});

  console.log(test3);

  console.log(test3[0][0])

  let test4 = test3.map(function (word){ 
    console.log(word);
    betterWord = word.charAt(0).toUpperCase() + word.slice(1);
    console.log(betterWord)
    return betterWord;
  })

  reconstructedSentence = test4.join(" ")

  console.log(test4)

  console.log(reconstructedSentence)

  tutorials[0] = reconstructedSentence;

  console.log(tutorials);
}

testSplit();

titleCased(tutorials); */