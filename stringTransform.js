function transformString(str) {
  const length = str.length;

  if (length % 15 === 0) {
    // If divisible by 15, reverse the string and then replace characters with ASCII codes
    const reversedStr = str.split("").reverse().join("");
    return reversedStr
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  } else if (length % 5 === 0) {
    // If divisible by 5, replace characters with ASCII codes
    return str
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  } else if (length % 3 === 0) {
    // If divisible by 3, reverse the string
    return str.split("").reverse().join("");
  } else {
    // If not divisible by 3 or 5, return the original string
    return str;
  }
}

// Example usage
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"

/*
Explanation:
Divisibility by 15:

If the length of the string is divisible by 15, we first reverse the string and then replace each character with its ASCII code.
Divisibility by 5:

If the length of the string is divisible by 5, we replace each character with its ASCII code.
Divisibility by 3:

If the length of the string is divisible by 3, we simply reverse the string.
Other Cases:

If none of the above conditions are met, we return the original string.
Examples:
Input: "Hamburger"

Length: 9 (divisible by 3)
Output: "regrubmaH"
Input: "Pizza"

Length: 5 (divisible by 5)
Output: "80 105 122 122 97"
Input: "Chocolate Chip Cookie"

Length: 21 (divisible by 3)
Output: "eikooCpihCetalocohC"
*/
