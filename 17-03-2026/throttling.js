
function getData() {
    console.log("Throttles");
}

function throttle(getData,ms) {
    let isThrottled = false;
    let savedArgs;
    let savedThis;

    return function wrapper(...args) {
        if(isThrottled) {
            savedArgs = args;
            savedThis = this;
            return ;
        }

        getData.apply(this,args);
        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;

            if(savedArgs) {
                wrapper.apply(savedThis,savedArgs);
                savedArgs = savedThis = null;
            }
            
        },ms)
    }
}

let throt = throttle(getData,1000);