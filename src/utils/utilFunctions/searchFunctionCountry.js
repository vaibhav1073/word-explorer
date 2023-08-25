let Fuse =require("fuse.js").default;


const options = {
    
    shouldSort: true,
    caseSensitive: false,
    findAllMatches: false,
    threshold:0.4,
    includeScore:false,
    distance:50,
  };
export const searchCountry=(text,countryData)=>{
    
    let fuse=new Fuse(countryData,options);
    // console.log(text)
    
    const limit=5
    console.log("search fx run")
    return fuse.search(text,{limit})
}
