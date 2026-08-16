let checkEven = new Promise((resolve, reject) => {
    let number = 4;
    if (number % 2 === 0) resolve("The number is even!");
    else reject("The number is odd!");
});
checkEven
    .then((message) => console.log(message)) // On success
    .catch((error) => console.error(error)); // On failure
    //----------------------------------------------------------------//
const myPromise = new Promise((res, rej)=>{
    document.getElementById("btn1").addEventListener("click", ()=>{
        res("Resolved");
    })

    document.getElementById("btn2").addEventListener("click", ()=>{
        rej("Rejected");
    })   
});
console.log(myPromise)
myPromise.then((mesage) => console.log(mesage)).catch(err => console.log(err))
// res(value): Marks the promise as fulfilled and provides a result.
// rej(error): Marks the promise as rejected with an error.
//----------------------------------------------------------------------

                            //  Creating promise withour using promise
async function myFn(){
    // return "Shahzad"
    // throw new Error("Lost");
}

const resu = myFn()

console.log(resu)