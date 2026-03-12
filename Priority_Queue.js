


// ===================1. Kth Largest Element in an Array=================
var findKthLargest = function(nums, k) {
    let pq=new MinPriorityQueue();
    for(let i=0; i<nums.length; i++){
        pq.enqueue(nums[i]);

        if(pq.size()>k){
            pq.dequeue()
        }
    }

    return pq.front();
};


================ 2. Kth Largest Element in a Stream==============
var KthLargest = function (k, nums) {
    this.heap = new MinPriorityQueue();
    this.k = k;

    for (let i = 0; i < nums.length; i++) {
        this.add(nums[i]);
    }
    return null;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.heap.enqueue(val)

    if (this.heap.size() > this.k) {
        this.heap.dequeue();
    }

    return this.heap.front()
};

