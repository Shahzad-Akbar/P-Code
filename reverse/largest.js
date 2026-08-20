const button = document.getElementById("btn");

let Arr = [223,140,34,2,243,666];
let Arr2 = [1,2,2,3,4,4,3,1,5];
const seen = new Set();
const duplicate = new Set()
let largest = 0;
let largest2 =0;
let smallest = Arr[0];
let sum = 0;
let countEven = 0;
let countOdd = 0;

button.addEventListener("click", ()=>{
     console.log("Given Array =", Arr);
                               //finding largest value
    for(let i=0; i<Arr.length; i++){
        if(Arr[i] > largest){
            largest=Arr[i];
        }     
    }
                            //Finding 2nd largest value
    for(let i=0; i<Arr.length; i++){
        if(Arr[i] < largest && Arr[i] > largest2){
            largest2=Arr[i];
        }
        
    }
                           //finding smallest value
    for(let i=0; i<Arr.length; i++){
        if(Arr[i] < smallest){
            smallest = Arr[i];
        }      
    }
                               //finding sum
    for(let i=0; i<Arr.length; i++){
                sum += Arr[i];
    }
                                   //Even and odd
    for(let i=0; i<Arr.length; i++){
            if(Arr[i] % 2=== 0){
                countEven++;
            }else{
                countOdd++;
            }
    }

                             //Finding duplicated then remove
    for(const i of Arr2){
        if(seen.has(i)){
            duplicate.add(i);
        }else{
            seen.add(i)
        }
    }
                             //its easy way
    const duplicated = Arr2.filter((num, index)=>{
        return Arr2.indexOf(num) !== index;
    })
    const uniqued = Arr2.filter((num, index)=>{
        return Arr2.indexOf(num) !== index;
    })

    
    
    console.log("Largest =", largest);
    console.log("Largest2 =", largest2);
    console.log("smallest =", smallest);
    console.log("sum =", sum);
    console.log("Average =", (sum/Arr.length))
    console.log("Even number:",countEven, "Odd Number:",countOdd);
    console.log("Unique Number:", [...seen] )
    console.log("Duplicate value =", [...duplicate])
    console.log("Dup Value:", [...duplicated]);

})