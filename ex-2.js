//1

function sumOfQuadratic(arr){

  let result =arr.reduce((sum,curent)=>
  {if(Math.sqrt(curent)%2===0){
    return sum+curent
  }else{
          return sum+0
      }},0)
  
 return result;

}
let arr=[9,16,4,25,64,100]
sumOfQuadratic(arr)

//2

function sumOfQuadratic(arr){
  let result=0;
  for(let i=0;i<arr.length;i++){
      if(Math.sqrt(arr[i])%2===0){
        result+=arr[i]
      }

  }
  return result;
}

let arr=[9,16,4,25,64,100]
sumOfQuadratic(arr)