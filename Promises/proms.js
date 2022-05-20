//Promises
//Successful -> resolve
//Failed -> reject

let proms = new Promise((resolve, reject)=> {
    let a;
    setTimeout(()=>{
        a =1+1;
        if (a==2){ //successfully kept the promise
            resolve("Successfully Kept the Promise")
        } else{
            reject("Failed to kept the Promise")
        }
    }, 4000)
})

// .then from resolve and .then from reject

proms.then((message) =>{
    console.log("This is from then", message )
}).catch((message)=>{
    console.log("This is from catch", message)
})

console.log("I'm after promise");

//Uses: Image downloading . Download hote hote onnano code jeno kaj kore