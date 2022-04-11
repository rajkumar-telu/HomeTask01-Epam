function add(n) {
    sum = function (m) {
        console.log("------", n, m)
        return add(n + m)
    }
    sum.valueOf = function () {
        return n
    }
    return sum
}