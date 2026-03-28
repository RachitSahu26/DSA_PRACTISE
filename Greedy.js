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


// =============Two City Scheduling============
var twoCitySchedCost = function (costs) {
    costs.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]));
    let ans = 0;
    let n = costs.length / 2;

    for (let i = 0; i < n; i++) {
        ans += costs[i][0];
    }
    for (let i = n; i < 2 * n; i++) {
        ans += costs[i][1];
    }

    return ans;
};


// =================insert interval=======
var insert = function(arr, x) {
    let n = arr.length;
    let ans = [];

    let i = 0;
    while(i < n && arr[i][1] < x[0]) {
        ans.push(arr[i]);
        ++i;
    } 

    while(i < n && arr[i][0] <= x[1]){
        x[0] = Math.min(x[0], arr[i][0]);
        x[1] = Math.max(x[1], arr[i][1]);
        ++i;
    }
    ans.push(x);

    while(i < n){
        ans.push(arr[i]);
        ++i;
    }
    return ans;
};

// ============merge interval===========

var merge = function(arr) {
    arr.sort((a, b) => (a[0] - b[0]));
    let ans = [arr[0]];
    for(let i = 1; i < arr.length; i++){
        if(arr[i][0] <= ans[ans.length - 1][1]){
            ans[ans.length-1][1] = Math.max(ans[ans.length-1][1], arr[i][1])
        } else {
            ans.push(arr[i]);
        }
    }
    return ans;
};

// ==============partition labels====
var partitionLabels = function(s) {
    let last = {};
    let ans = [];
    for (let i = 0; i < s.length; i++) {
        last[s[i]] = i;
    }

    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, last[s[i]]);
        if (i === end) {
            ans.push(end - start + 1);
            start = i + 1;
        }
    }
    return ans;
};


// ====================TASK SCHEDULE====================
var leastInterval = function(tasks, n) {
    let freq = Array(26).fill(0);
    let maxFreq = 0;

    for (let i = 0; i < tasks.length; i++) {
        let curr = tasks[i].charCodeAt() - 65;  // Map 'A'-'Z' to 0-25
        freq[curr]++;
        maxFreq = Math.max(maxFreq, freq[curr]);
    }
    let countMaxFreq = 0;
    for (let i = 0; i < 26; i++) {
        if (freq[i] === maxFreq) {
            countMaxFreq++;
        }
    }
    let cycles = (maxFreq - 1) * (n + 1) + countMaxFreq;
    return Math.max(tasks.length, cycles);
};

// =================gas station==============

var canCompleteCircuit = function (gas, cost) {
    let currGain = 0;
    let totalGain = 0;
    let ans = 0;
    for (let i = 0; i < gas.length; i++) {
        let gain = gas[i] - cost[i];
        currGain += gain;
        totalGain += gain;

        if (currGain < 0) {
            ans = i + 1;
            currGain = 0;
        }
    }
    return totalGain < 0 ? -1 : ans;
};
// =================car polling ==============

var carPooling = function(trips, carCapacity) {
    let loc = Array(1001).fill(0);
    for (let i = 0; i < trips.length; i++) {
        let [passengers, from, to] = trips[i];
        loc[from] += passengers;   // Pick up passengers
        loc[to] -= passengers;     // Drop off passengers
    }
    let usedCapacity = 0;
    for (let i = 0; i < 1001; i++) {
        usedCapacity += loc[i];
        if (usedCapacity > carCapacity) {
            return false; 
        }
    }
    return true; 
};
