
// Producer Part
let Inventory = {
    laptop :{
        asusVivoBook : 12,
        ThinkPad :3,
    },
    phone : {
        samsungS26 : 10,
        iphone17Pro : 12,
    } 
}

let cart = [];

function checkInventory(domain, product, quantity){
    return new Promise((resolve, reject) =>
        setTimeout(()=>{
        if(Inventory[domain] && Inventory[domain][product]>=quantity){
            console.log("Available");
            resolve({domain, product, quantity});
        }
        else{
            console.log("Not Available");
            reject("Out of Stock");
        }
    },1000));
}

function addToCart(item){
    return new Promise((resolve)=>{
        setTimeout(() => {
            cart.push(item)
            resolve();
        },1000);
    })
}

function payment(amount){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(amount>0)
            {
                resolve(`Payment done: ${amount}`);
            }
            else{
                reject("No amount received");
            }
        },1000)
    })
}
//Consumer Part

// let customer = prompt("What are you looking for ?","laptop");

checkInventory("laptop","ThinkPad",2)
    .then(addToCart)
    .then(()=> payment(1000))
    .then(result => {
        console.log(result);
        console.log(cart.map(item => console.log(item)));
        })
    .catch(err => console.log(err));