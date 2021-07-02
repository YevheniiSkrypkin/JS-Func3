const arr = [1, 2, 3, -1, -2, -3];

function func(value) {
    const exampleArr = [];
    if (!value.length) return 'Error 1';

    for (let i = 0; i <= value.length - 1; i++) {
        if (value[i] >= 0) exampleArr.push(value[i])
    }
    
    return exampleArr.length ? exampleArr : null;
}

console.log(func(arr))