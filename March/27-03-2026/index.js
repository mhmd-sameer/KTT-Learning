
// function loadScript(src,callback){
//     let script = document.createElement('script');
//     script.src =    src;

//     script.onload = () => callback(script);
//     script.onerror = () => callback(new Error(`Script loading error for ${src}`));
//     document.head.appendChild(script);
// }


// function loadScript(src){
//     return new Promise(function execute(resolve, reject){
//         let script = document.createElement('script');
//         script.src = src;
        
//         script.onload = () => resolve(script);
//         script.onerror = () => reject(new Error(`Error on loading ${src}`));
        
//         document.head.append(script);
//     })
// }

// let promise = loadScript('myScript.js');

// promise.then(
//     script => alert(`script is loaded`),
//     error => alert(`script failed to load`)
// );


// function greetUser(name, callback) {
//     alert(`Hello ${name}`)
//     callback();
// }

// greetUser("Sameer",()=>{alert("welcome")});



// function multiplication(num,callback) {
//     callback(num*2);
// }

// multiplication(2,(result)=>{alert(result)})


// function fetchData(callback){
//     setTimeout(()=> callback("Data Received"),3000)
// }

// fetchData((phrase)=>{alert(`Message : ${phrase}`)});

// Error 1st Callback

// function divide(a, b, callback){
//     if(b===0){
//         callback(new Error(`Error on dividing`));
//     }
//     else{
//         callback(a/b);
//     }
// }

// divide(10,3,(err,result)=>{
//     if(err) alert(err)
//     else alert(result);
// });


//Callback Hell Simulation

// function step1(callback){
//     setTimeout(()=> 
//         console.log("Step1 done"),
//         callback(),
//         10000);
// }

// function step2(callback){
//     setTimeout(()=>
//         console.log("step2 done"),
//         callback(),
//         5000);
// }

// function step3(callback){
//     setTimeout(()=>
//     console.log("step3 done"),
//     callback(),
//     1000);
// }

// step1(()=>
//     step2(()=>{
//         step3(()=>{
//             alert("Hello im done");
//         })
// }))




