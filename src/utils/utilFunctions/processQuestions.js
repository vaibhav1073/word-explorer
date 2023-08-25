export const makeQuestions=(questionSet,countryData,countryCodeArr,totalQuestions)=>{
    let newQuestions=[]

    for (let i = 0; i < totalQuestions; i++) {
        const topic = questionSet[Math.floor(Math.random() * questionSet.length)],
          correctCountryCode =
            countryCodeArr[Math.floor(Math.random() * countryCodeArr.length)],
            correctAnswer=countryData[correctCountryCode].name?.common,
          term = countryData[correctCountryCode][topic];
        let otherOptions = new Array(3);
        const media= topic==="flags" ? term.png : null;
        for (let i = 0; i < 3; i++){
            const countryCode=countryCodeArr[Math.floor(Math.random() * countryCodeArr.length)];
          otherOptions[i] =  countryData[countryCode].name?.common}

        const question = processQuestions(
          topic,
          correctAnswer,
          term,
          otherOptions,
          media
        );
        newQuestions.push({...question,attempted:false,result:null})
      }
      return newQuestions
}

const processQuestions = (
    topic,
    correctCountryCode,
    termData,
    otherOptionsArray,
    media
  ) => {
    // ["capital", "currencies", "flags"]
    if (topic === "capital")
      return askCapital(termData, correctCountryCode, otherOptionsArray);
    else if (topic === "currencies")
      return askCurrencies(termData, correctCountryCode, otherOptionsArray);
    else return askFlag(correctCountryCode, otherOptionsArray,media)
  };
  
  const askCapital = (capitalArray, answer, otherOptionsArray) => {
    //capital is an array here
    const question = `${capitalArray[0]} is the capital of which country?`;
    return {
      question: question,
      answer: answer,
      choices: choices(answer, otherOptionsArray)
    };
  };
  
  const askCurrencies = (currenyData, answer, otherOptionsArray) => {
    const currencyNames = Object.values(currenyData).map(
      (currency) => currency.name
    );
    const question = `${currencyNames[0]} is the official curreny of which country ?`;
    return {
      question: question,
      answer: answer,
      choices: choices(answer, otherOptionsArray)
    };
  };

  const askFlag=( answer, otherOptionsArray,media)=>{
    const question = `Which Country has this flag?`;
    return {
      question: question,
      answer: answer,
      choices: choices(answer, otherOptionsArray),
      media:media
    };}
  
  const choices = (answer, otherOptionsArray) => {
    const options = [answer, ...otherOptionsArray];
    return shuffle(options);
  };
  
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }
    // console.log(array);
    return array;
  }
  