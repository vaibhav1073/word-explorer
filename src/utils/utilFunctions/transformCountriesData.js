export const transformCountriesdata=(countryDataArr)=>{
    let countryCodeArr=new Array(countryDataArr.length),countryData={},countryNameArr=new Array(countryDataArr.length);
    countryDataArr.forEach((item,index)=>{
        const unique=item.cca3
        countryCodeArr[index]=unique;
        countryData[unique]=item;
        countryNameArr[index]=item.name.common;
    })
    // console.log(countryCodeArr,countryData,countryNameArr)
    return {countryCodeArr,countryData,countryNameArr}
}