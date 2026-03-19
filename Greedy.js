var lemonadeChange = function(bills) {
    let wallet = [0, 0]; 
    for (let i = 0; i < bills.length; ++i) {
        if (bills[i] === 5) {
            wallet[0]++;
        } else if (bills[i] === 10) {
            wallet[1]++;
            wallet[0]--;
        } else { // bill is 20
            if (wallet[1] > 0) {
                wallet[1]--;
                wallet[0]--;
            } else {
                wallet[0] -= 3;
            }
        }
        if (wallet[0] < 0) {
            return false;
        }
    }
    return true;
}; 
// ==========Assign Cookies===============
var findContentChildren = function(g, s) {
    s.sort((a, b) => a - b);
    g.sort((a, b) => a - b);

    let i = 0; // child index
    let j = 0; // cookie index

    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            ++i;
            ++j;
        } else {
            ++j;
        }
    }
    return i;
};
