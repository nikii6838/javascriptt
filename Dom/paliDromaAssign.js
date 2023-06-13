function ispalindrome(str) {
  var reversedstr = "";
  
  for (var i = str.length - 1; i >= 0; i--) {
    reversedstr += str[i];
  }
  
  if (reversedstr.toLowerCase() === str.toLowerCase()) {
    console.log(`${str} is a Palindrome`);
  } else {
    console.log(`${str} is Not a Palindrome`);
  }
}

ispalindrome("madam");
ispalindrome("141");
ispalindrome("Sunday");
ispalindrome("mom");
ispalindrome("listen");
ispalindrome("dad");
