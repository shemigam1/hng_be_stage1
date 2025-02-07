export const checkPrime = (num) => {
    let isPrime = true;
    let n = num
    if (n <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime
}

export const isPerfectNumber = (n) => {
    if (!Number.isInteger(n) || n <= 0) {
        return false;
    }
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== n / i) {
                sum += n / i;
            }
        }
    }
    const isPerfect = sum === n;
    return isPerfect;
}

export const checkArmstrong = (num) => {
    const digits = num.toString().split('');
    const order = digits.length;
    const sum = digits.reduce(
        (acc, digit) =>
            acc + Math.pow(parseInt(digit), order), 0);
    if (sum === num) {
        return "armstrong";
    }
}

export const checkEven = (num) => {
    if (num % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}

export const digitSum = (num) => {
    return num.toString().split("")
        .reduce((sum, digit) =>
            sum + parseInt(digit), 0);
}