// ===================1.Subsets===============
var subsets = function(arr) { 
    let result = []; 
    let backtrack = (path, start) => { 
        result.push([...path]); 
        for(let i = start; i < arr.length; i++){ 
            path.push(arr[i]); 
            backtrack(path, i+1); 
            path.pop(); 
        } 
    } 
    backtrack([], 0); 
    return result; 
};
// ===================2. Combinations==============
var combine = function (n, k) {
    let result = [];
    let backTrack = (path, start) => {
        if(path.length==k){
            result.push([...path])
            return 
        }
        for (let i = start; i <= n; i++) {
            path.push(i)
            backTrack(path, i + 1);
            path.pop();
        }
    }
    backTrack([], 1);
    return result;
};


// ====================Permutation=========


var permutation = (arr) => {
    let result = [];
    let n = arr.length;
    let backTrack = (path) => {

        if(path.length===n){
            result.push([...push]);
           
        }
        for (let i = 0; i < n; i++) {
            if (!path.includes(arr[i])) {
                path.push(arr[i])
                backTrack(path);
                path.pop()
            }
        }
    }
    backTrack([])
    return result;
}



var permuteUnique = function (arr) {
    let result = [];

    arr.sort((a, b) => a - b);

    const backTrack = (path, choice) => {
        if (path.length === arr.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < choice.length; i++) {
            // Skip duplicates
            if (i > 0 && choice[i] === choice[i - 1]) {
                continue;
            }

            path.push(choice[i]);

            backTrack(
                path,
                [...choice.slice(0, i), ...choice.slice(i + 1)]
            );

            path.pop();
        }
    };

    backTrack([], arr);

    return result;
};
