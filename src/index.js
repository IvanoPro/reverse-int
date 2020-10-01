module.exports = function reverse(n){
    let min = n < 0 ? n * -1 : n
    let arr = String(min).split('').reverse();
      for(let i=0; i<=arr.length; i++){
         if(arr[0] == 0){
           arr.shift()
           return arr.join('');
         }
        return arr.join('');
     }
   };