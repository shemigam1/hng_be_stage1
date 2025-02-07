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
    const numOfDigits = num.length;
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder ** numOfDigits;
        temp = parseInt(temp / 10);
    }

    console.log(sum == num);

    if (sum == num) {
        return ['armstrong', checkEven(num)]
    } else return [checkEven(num)]
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