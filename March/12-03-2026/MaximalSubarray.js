function getMaxSubSum(arr) {
    let max=-Infinity;
    let cur=0;
    for(let i=0;i<arr.length;i++) {
        cur+=arr[i];
        if(cur<0) cur=0;
        if(cur>max) max=cur;
    }
    alert(max);
}

getMaxSubSum([-1, 2, 3, -9]) 
getMaxSubSum([2, -1, 2, 3, -9])
getMaxSubSum([-1, 2, 3, -9, 11])
getMaxSubSum([-2, -1, 1, 2])
getMaxSubSum([100, -9, 2, -3, 5])
getMaxSubSum([-1, -2, -3])