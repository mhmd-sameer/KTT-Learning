let arr = [];

while(true) {
    let num = prompt("Enter a number : ");
    if(num=='' || num==null) break;
    arr.push(+num);
}

let sum=0;

for(let i=0;i<arr.length;i++) {
    sum+=arr[i];
}

alert(sum);