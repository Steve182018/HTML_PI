function total(coins, n, sum) {
    if (sum == 0)
        return 1;
    if (sum < 0)
        return 0;
    if (n <= 0)
        return 0;
    
    var t1 = total(coins, n - 1, sum)
    var t2 = total(coins, n, sum - coins[n - 1])

    return t1 + t2;
}

var coins = [1, 2, 5];
var n = coins.length;
console.log(total(coins, n, 5));