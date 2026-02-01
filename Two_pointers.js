
// ======================== 1.Find the Index of the First Occurrence in a String=================

function strStr(haystack, needle) {
  // Edge case: empty needle
  if (needle === "") return 0;

  // Loop through haystack
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let j = 0;

    // Check character by character
    while (j < needle.length && haystack[i + j] === needle[j]) {
      j++;
    }

    // If we matched the whole needle
    if (j === needle.length) {
      return i;
    }
  }

  return -1;
}
