let arr = [7 , 9 , 7, 37 , 67, 90]
let target_sum = 16
let i = 0
let j = arr.length - 1

const findSum = (arr,target) => {
while (i<=j) {

    console.log(' the indexes of array', {i , j})
    if(arr[i] + arr[j] === target){
         return [i , j]

    }else if( arr[i]+arr[j] < target){
       i++
    
}else{
    j--
}

}
 return [ -1, -1]
}

 const result =  findSum( arr,target_sum)

 console.log(result)