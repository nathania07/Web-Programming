/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    // 1. Create a new array with the same length as the string
    let result = [];
    
    // 2. Loop through the string 's'
    for (let i = 0; i < s.length; i++) {
        // Use the assignment operator (=) 
        // Put the character s[i] at the position indices[i]
        result[indices[i]] = s[i];
    }
    
    // 3. Join the array back into a string and return it
    return result.join("");
};
