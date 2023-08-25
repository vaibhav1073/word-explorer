//this function is such that if the demonyn of a country is diff we will shrae that male and
// female are different else we will just say the demonym as one

export const processDemonym = (demonymObject, countryName) => {
  if (demonymObject.eng.f === demonymObject.eng.m)
    return `The people from ${countryName} are called ${demonymObject.eng.f}`;
  else
    return `While the male population from ${countryName} are called ${demonymObject.eng.m} , the females on the other hand are called ${demonymObject.eng.f}`;
};

export const processBorders = (bordersArray, countryName) => {
  // console.log(bordersArray)
  if (!bordersArray)
    return `As ${countryName} is an island nation, it doesn't have any land borders with any country. `;
  else {
    if (bordersArray.length === 1)
      return `${countryName} shares it's borders with ${bordersArray[0]}`;
    else {
      let str = bordersArray.slice(0,bordersArray.length-1).join(", ");
      //if there are multiple borders we will put a comma infrom of everyone except of the last kyuki usspe an
      
      return `${countryName} share it's boundaries with ${str} and ${bordersArray.at(-1)}.`
    }
  }
};
