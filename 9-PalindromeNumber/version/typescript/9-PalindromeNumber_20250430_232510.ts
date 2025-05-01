// Last updated: 4/30/2025, 11:25:10 PM
// palindrome practice
function isPalindrome(x: number): boolean {
  const converted = x.toString();

  if(converted.length === 1) {
    return true;
  }

  for (let i = 0; i < converted.length - 1; i++) {
    if (converted[i] !== converted[converted.length - (i+1)]) {
      return false;
    }    
  }
  return true;
};