// Last updated: 5/5/2025, 8:03:57 PM
// Roman numeral solution
function romanToInt(s) {
  // Map for Roman numeral values
  const romanValues = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    // Get current and next symbol values
    const currentVal = romanValues[s[i]];
    const nextVal = i + 1 < s.length ? romanValues[s[i + 1]] : 0;

    // Apply subtraction rule if current is less than next
    if (currentVal < nextVal) {
      result += (nextVal - currentVal);
      i++; // Skip the next character as we've already used it
    } else {
      result += currentVal;
    }
  }

  return result;
}