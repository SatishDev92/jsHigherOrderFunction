let num = prompt("Up to which number would you like to get the array index?");

let arr = [];
let flag = 0;

for (let i = 1; i <= num; i++) {
    arr.push(i);
}

console.log(arr);

arr.forEach((val) => {
    flag = 0;

    for (let j = 2; j <= val / 2; j++) {
        if (val % j === 0) {
            flag = 1;
            break;
        }
    }

    if (flag === 0 && val > 1) {
        console.log(val, "is a prime number");
    } else {
        console.log(val, "is a composite number");
    }
});
