
var MyStack = function () {
    this.q1 = [];
    this.q2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    let n = this.q1.length;
    for (let i = 0; i < n - 1; i++) {
        this.q2.push(this.q1.shift());

    }

    let ans = this.q1.shift();

    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
    return ans;

};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    let n = this.q1.length;
    for (let i = 0; i < n - 1; i++) {
        this.q2.push(this.q1.shift());
    }
    let frontEle = this.q1[0];
    this.q2.push(this.q1.shift());

    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
    return frontEle;  // ✅ MISSING LINE
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q1.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()

 */





// =====================2. valid parentheses==============

var isValid = function (s) {
    let stack = [];
    let map = {
        "(": ")",
        "{": "}",
        "[": "]",
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i]);

        } else {

            let top = stack.pop()

            if (!top || s[i] != map[top]) {
                return false;
            }
        }
    }

    return stack.length===0;
};

// ==========================min stack======================

var MinStack = function() {
    this.s=[];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.s.length===0){
        this.s.push([val,val])
    }else{
        let minval=Math.min(val,this.s[this.s.length-1][1])
        this.s.push([val,minval]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.s.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
   return this.s[this.s.length-1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.s[this.s.length-1][1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
