

export const generateTextArrays=(textArrays)=>{
    let arr=[]
    textArrays.forEach((element) => {
    let str="",tempArr=[];
    for(const letter of element){
      str+=letter;
      tempArr.push(str);
    }
    // console.log(tempArr)
    arr=[...arr,...tempArr,...tempArr.reverse()]
    arr.push(" ")
    // arr.concat(tempArr.reverse());
    
    
  });
  
  return arr
}

