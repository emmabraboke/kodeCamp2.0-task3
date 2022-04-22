let arr1=[ 234, 43, 55, 63, 5, 6, 235, 547 ];
let arr2= [ 1, 4, 2, 5, -2, 3 ];
let arr3=[ 52, 37, 63, 14, 17, 8, 6, 25 ];

function bubbleSort(arr){
 for(let x = 0; x < arr.length; x++){
   for(let y = 0; y < ( arr.length - x -1 ); y++){
     if(arr[y] > arr[y+1]){
         //swaping values
       var temp = arr[y]
       arr[y] = arr[y + 1]
       arr[y+1] = temp
     }
   }
 }

 return arr

}

console.log(bubbleSort(arr1))
console.log(bubbleSort(arr2))
console.log(bubbleSort(arr3))

// TIME COMPLEXITY
// If the array is in reverse order then this condition is the worst case and Its time complexity is O(n2).
// If the array is already sorted then it is the best-case scenario and its time complexity is O(n)