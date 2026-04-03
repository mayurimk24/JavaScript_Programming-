// elements larger than a number
let arr = [1,4,6,7,8,3,0,6,45,9,5];
let no = 7;

function getElements(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > num){
            console.log(arr[i]);
        }
    }
    
}

getElements(arr, no);