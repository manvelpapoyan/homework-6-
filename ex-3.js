function anagram(str,arr){
  let result=[];
  
for(let i=0;i<arr.length;i++){
    let strCHarCode=0;
    let arrCharCode=0;

    if(str.length===arr[i].length){

   for(let j=0;j<str.length;j++){
    strCHarCode+=str[j].charCodeAt();
    arrCharCode+=arr[i].charCodeAt(j);
   }
    if(strCHarCode===arrCharCode){

      result.push(arr[i])
    }
  }
    
  }
return result;
}