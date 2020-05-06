// 1 

function elUnique(arr){

for(let i=0;i<arr.length;i++){

  for(let j=i+1;j<arr.length;j++){

    if(arr[i]===arr[j]){
      return false;
    }
}
}
return true;
}

let arr=['a','b','cd','gh','e','f','gh']

elUnique(arr)

// 2

function elUnique(arr){
  
  let set=new Set(arr)
  
  if(arr.length===set.size){

    return true;

  }else{

    return false;
  }

}
let arr=['a','b','cd','gh','e','f','gh']

elUnique(arr)
