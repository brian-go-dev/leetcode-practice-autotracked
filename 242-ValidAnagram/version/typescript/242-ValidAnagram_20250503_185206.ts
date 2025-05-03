// Last updated: 5/3/2025, 6:52:06 PM
// anagram in typescript O(n) solution
function isAnagram(s: string, t: string): boolean {
  let counter  = {};

  const new1 = s.toLowerCase().replaceAll(" ", "");
  const new2 = t.toLowerCase().replaceAll(" ", "");

  if(new1.length !== new2.length) {
    return false
  }
  
  for(let i = 0; i < new1.length; i++) {
    if(!counter[new1[i]]) {
      counter[new1[i]] = 1;
      
    }
    else{
      counter[new1[i]]++;
    }
  }

  for(let i = 0; i < new2.length; i++) {
    if(!counter[new2[i]]) {
      return false;
    }
    else {
      counter[new2[i]]--;
    }
  }
   
   return true;
};