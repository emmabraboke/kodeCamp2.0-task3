let arr1=[ 234, 43, 55, 63, 5, 6, 235, 547 ];
let arr2= [ 1, 4, 2, 5, -2, 3 ];
let arr3=[ 52, 37, 63, 14, 17, 8, 6, 25 ];

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    let pivot   = items[Math.floor((right + left) / 2)] //middle point
    while (left <= right) {
        while (items[left] < pivot) {
            left++;
        }
        while (items[right] > pivot) {
            right--;
        }
        if (left <= right) {
            swap(items, left, right); //swapping two values
            left++;
            right--;
        }
    }
    return left;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}


console.log(quickSort(arr1, 0, arr1.length - 1))
console.log(quickSort(arr2, 0, arr2.length - 1))
console.log(quickSort(arr3, 0, arr3.length - 1))

// TIME COMPLEXITY
// Quick sort algorithm is one of the most widely used sorting algorithms. It follows a divide and conquer paradigm. 
// We usually use Recursion in quicksort implementation
// The partition of elements take n time and in quicksort the dataset is divide by 2
// Best Time Complexity : O(nlogn)
// Average Time Complexity : O(nlogn)
// Worst Time Complexity : O(n^2)
