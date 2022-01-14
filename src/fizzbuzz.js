function fizzBuzz (n) {
    if(n%3 == 0 && n%5 == 0)
        return "fizzbuzz"
    if(n%3 == 0)
        return "Fizz"
    if(n%5 == 0)
        return "Buzz"
    return null
}

module.exports = fizzBuzz
