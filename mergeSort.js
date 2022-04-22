let arr1=[ 234, 43, 55, 63, 5, 6, 235, 547 ];
let arr2= [ 1, 4, 2, 5, -2, 3 ];
let arr3=[ 52, 37, 63, 14, 17, 8, 6, 25 ];


const merge = (arr1, arr2) => {
    let sortedValues = [];
  
    while (arr1.length && arr2.length) { // the loops iterates alongs there items in either array
      if (arr1[0] < arr2[0]) { 
      sortedValues.push(arr1.shift()) // remove the first item of arr1 and push to sortedValues
      }
      else {
          sortedValues.push(arr2.shift()) // remove the first item of arr2 and push to sortedValues
      }
    };
  
    return sortedValues.concat(arr1.slice().concat(arr2.slice())) //if there’s anything leftover, like when one array is larger, concatenate that onto the end.
  };
  
 

  const mergeSort = (arr) => {

    if (arr.length <= 1) {
        return arr
    }
    let center = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, center)) // copy items from 0 index to index before the center 
    let right = mergeSort(arr.slice(center)) // copy items from the center index of arr to the end
  
    return merge(left, right); 
  };
  
  console.log(mergeSort(arr1));
  console.log(mergeSort(arr2));
  console.log(mergeSort(arr3));

  
// Time Complexity
// It has a guaranteed running time complexity of O(nlog(n))in the best, average, and worst case.