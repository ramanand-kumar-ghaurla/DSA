/** Insertion sort
 * In this , we not swap elements besids it we shift the element and put correct element to its correct position
 * In this sorting aproach we devide an array in two segament - sorted and unsorted
 * we have two loop to manage the sorted and unsorted parts
 * the for loop starts from index 0 and while loop from i -1 
 * we consider that before 1 index array is sorted 
 * the second loop we goes to left side ( j--) until greater than 0 in which
 *  - we compare element on j index with current element if it is greater than j we shift it to j+1
 * and after loop we put the current element to j+1 position
 * 
 */

const sortWithInsertionSort = (arr)=>{

    for( let i = 1; i < arr.length; i++){

        let currentElement = arr[i]   // store arr[i] in variable which want to positioned 
        let j = i-1

        while( j >= 0 && arr[j] > currentElement){   // compare current element to arr[j]

            arr[j+1] = arr[j]  // shift the element to right if it is greater than current element

            j--  // goes to left side for comparing
        }

        arr[j+1] = currentElement;  //  if the element is correct position it already present on i+1 OR NOT it will be put in vacant position which created by shifting greater elements
    }
}

const arr = [1,4,6,7,8,2,45,6,5]

sortWithInsertionSort(arr)
console.log(arr)