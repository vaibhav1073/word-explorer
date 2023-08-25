import { generateTextArrays } from "./generateTextArrays";


export const searchBarText = "Search Country";
//ek function likhna pagega for the same so that the array only contains the words
//also need to do the 
// export const textArrays = [
//   "W",
//   "Wo",
//   "Wor",
//   "Worl",
//   "World",

//   "Worl",
//   "Wor",
//   "Wo",
//   "W",
//   "",
//   "C",
//   "Co",
//   "Cou",
//   "Coun",
//   "Count",
//   "Countr",
//   "Countr",
//   "Countrie",
//   "Countries",
//   "Countrie",
//   "Countri",
//   "Countr",
//   "Count",
//   "Coun",
//   "Cou",
//   "Co",
//   "C",
//   "",
//   "E",
//   "Ea",
//   "Ear",
//   "Eart",
//   "Earth",
//   "Eart",
//   "Ear",
//   "Ea",
//   "E",
//   "",
// ];


const texts=["World","Countries","Earth","Civilization"];


export const textArrays=generateTextArrays(texts)
// console.log(arr)

export  const exploreHeading ="Explore With Graphs"

export const quizHeading="Welcome to Quiz"