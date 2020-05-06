//1

function palindrome(str){
    let a=str.length-1;
  for(let i=0;i<Math.floor(str.length/2);i++){

      if(str[i]!==str[a]){

        return false;
      }
      a--;

  }

 return true;
}

let str='levele'
palindrome(str)

//2

function palindrome(str){

let tempStr=str.split('').reverse().join('');

return (str===tempStr)? true:false
 
}

let str='levele'
palindrome(str)