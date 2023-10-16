function long_array(arr)
  {
    var max_str = arr[0].length;
    var ans = arr[0];
    for (var i = 1; i < arr.length; i++) {
        var maxi = arr[i].length;
        if (maxi > max_str || maxi == max_str) {
            ans = arr[i];
            max_str = maxi;
        }
    }
    return ans;
}
console.log(long_array(["aa", "ad", "vcd", "aba"]));
