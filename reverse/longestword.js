let greater =0;
let string ="";
document.getElementById("btn").addEventListener("click",()=>{
    let input = document.getElementById("input").value;
    let sentence = input.toLowerCase();
    const words = sentence.replace(/[^a-zA-Z0-9 ]/g, "").split(" ");
    for(let element of words) {
        if(element.length > greater){
            greater = element.length;
            string = element;
        }        
    }
    console.log(string, greater);
})