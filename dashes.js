let number = prompt("Enter a number");
let input = [number[0]];
for(let i = 1; i < number.length; i++) {
    if ((number[i-1] % 2 === 0) && number[i] % 2 === 0) {
        input.push('-', number[i]);
    } else {
        input.push(number[i])
    }
}

alert(input.join(''));