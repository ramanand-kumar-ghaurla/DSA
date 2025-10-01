const sortWithItrative = (arr)=>{

    /** bubble sort
     * In bubble sort - we pick one element from start and compare to just next element
     * if first element is greater than next element we swap these elements 
     * with this aproach , the biggest element is put at the last of array in every iteration
     * we repeat this process until the whole array is sorted properly
     */

    // the outer for loop for indexing of i

    for( let i = 0 ; i < arr.length ; i++){

        // for loop for comparing and swapping

        // take one variable for monitring if swap is done or not 
        let isSwap = false;

        for( let j = i+1; j < arr.length  ; j++){

            console.log(arr[i], arr[j])

            if ( arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

                isSwap = true
            }
        }

        if(isSwap == false){
            return;
        }
    }

    console.log(arr)
 //   console.log(object)
}



// we can solve it with recursive aproach

const bubbleSortWithRecursive = (arr, j) =>{

    // make a function which take two argument array and j value , by this we can remove one loop
    // the j represents the range in which we iterate over elements for comparing and swapping 
    // and after every iteration we reduce the range by 1 to shrink the comparesing area for optamization

    if( j == 0){
        return;
    }
    for( let i = 0; i < j ; i++){

        if( arr[i] > arr[i+1]){
            let temp = arr[i];
            arr[i ]= arr[i+1];
            arr[i+1 ]= temp;
        }
    }

    bubbleSortWithRecursive(arr,j-1)
    
}

function bubbleSortWithPureRecursive(arr, k  , i){

    // this function is responsible for sorting the array with only recursion

    /** pure recursion aproach
     * in this we have 3 params - array , k ( range in which unsorted segement) , i ( the index value of array)
     * we call this fuction with ( arr, k = arr.length and i = 0) first,
     * In function : 
     * we have condtion if( k == 0) meats when unsorted segament is over and whole array is sorted
     * then we have ( i == k ) this meats when i reaches at the last index of range which provided
     *  - in this case we call this function by initiating the i value with 0 and reducing the range with one 
     * and in the  last step of function we call the same function by increasing the i value to same range  
     */


    if( k == 0){
        return;

    }

    if(i == k){
        bubbleSortWithPureRecursive(arr,k-1,0)
        return
    }

    if(arr[i] > arr[i+1]){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
    }

    bubbleSortWithPureRecursive(arr,k,i+1)

}

const arr = [ 3, 2, 1, 5, 54, 3 , -3, -45 ,89, 32]

bubbleSortWithPureRecursive(arr, arr.length, 0)
console.log(arr)