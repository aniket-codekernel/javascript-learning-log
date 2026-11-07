//F.Memoization
//If any function run that give me output and that function runs again and again  so that will cousme memort time and what if that value stored in cashes if we need a value 

let sum = 0;
const calc=(n)=>{
    for(let i=0; i<=n;i++){
        sum+=1
    }
    return sum;
}

const memo=(fun)=>{
    let cach={}
    return function(...arg){
        let n=arg[0];
        if(n in cach){
            console.log(cach)
            console.log("cach")
            cach[n]
            return
        }else{
            console.log("calculting first time")
            let result=fun(n)
            cach[n]=result;
            result
            return
        }
    }

}


console.time();
const effec=memo(calc)
console.log(effec(5))
console.timeEnd()

console.time();
console.log(effec(5))
console.timeEnd()

























