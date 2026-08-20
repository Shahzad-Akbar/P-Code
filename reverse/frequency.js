let arr = [1,2,3,4,3,2,4,5,6,6];

document.getElementById("btn").addEventListener("click",()=>{
    const frequency = arr.reduce((acc, count) =>{
    acc[count] = (acc[count] || 0) +1;
    return acc;
},{});

console.log(frequency);
                          //for string
let input = document.getElementById("input").value;
let text = input.toLowerCase();
let string = text.split("");
const frq = string.reduce((acc, count) =>{
    acc[count] = (acc[count] || 0) +1;
    return acc;
},{});
console.log(frq);
                                                 //finding constant
let vowel= 0;
let consonent = 0;
for(let i=0; i<string.length; i++){
    if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' ||string[i] === 'u' ){
        vowel++;
    }else{
        consonent++;
    }
}
console.log("Vowel=",vowel, "consonant=", consonent);
})

 