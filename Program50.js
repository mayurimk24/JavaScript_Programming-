let arr = ["Australia", "Germany", "United States of America"];

//get Longest Country name
function getLongestName(Arr){
    let Name = "";
    for(let i=0; i<Arr.length; i++){
        if(Arr[i] > Name){
            Name = Arr[i];
        }
    }
    console.log(Name);
}

getLongestName(arr);