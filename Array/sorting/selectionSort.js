const findMinIndex=( arr, i)=>{

   let minIndex = i

   for (let j = (i+1); j < arr.length; j++) {
    
    if(arr[j]< arr[minIndex]){
        minIndex = j
    }
    
   }

   return minIndex


}

const selectionSort =( arr)=>{

    for ( let i = 0; i < arr.length; i++){
       let minIndex =  findMinIndex(arr,i)

       if (minIndex != i){
        let temp
        temp = arr[minIndex]
        arr[minIndex] = arr[i]
        arr[i] = temp
       }
    }

    return arr;

}

let arr = [2, 9, 12,-3, 93,90, 90, 34,89, 3, 80]

let sorted = selectionSort(arr)

console.log(arr)