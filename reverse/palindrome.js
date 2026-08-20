const button= document.getElementById("btn");

button.addEventListener("click", ()=>{
    let string = document.getElementById("input").value;
    console.log("Given String:",string);
    let checkPal = "";
    for(let i= string.length-1; i>=0; i--){
        checkPal += string[i];
    }
    console.log("reversed :",checkPal);
    if(string === checkPal){
        console.log("Yes palindrome");
        document.getElementById("result").innerText = "Palindrome" + checkPal;
    }else{
        console.log("Not palindrome");
    }
})