// let promise = new Promise((resolve, reject)=>{
//     resolve("Hello Sam");
// });

// promise.then(msg => alert(msg));

function createGreeting(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=> resolve("Hello Sam"),2000);
    })
}

createGreeting().then((msg)=> console.log(msg));