const calculater = {
    sum: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b; 
    },
    mul:function(a,b){
        return a*b;
    }
};

let ret = calculater.sum(2,3);
console.log(ret);