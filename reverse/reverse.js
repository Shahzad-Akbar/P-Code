const button = document.getElementById("btn");

// let str = "shahzad";
let revStr = "";

button.addEventListener("click", ()=>{
    let input = document.getElementById("input").value;
    console.log(input)

    console.log("Clicked for reverse")
    // let revStr = str.split("").reverse().join("");
    
    for(let i=input.length-1; i>=0; i--){  
        revStr += input[i];                       //withoud reverse() method
    }
    
    console.log("After Reversing:", revStr);
    document.getElementById("result").innerText = "Result :" + revStr;
})
