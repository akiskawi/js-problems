function makeSentance(str) {
  let firstLetter = str.charAt(0).toUpperCase();
  str = firstLetter + str.slice(1);
  const punCodes = [".", ",", "?", "!"];
  !punCodes.includes(str.charAt(str.length - 1))
    ? console.log(str + ".")
    : console.log(str);
}

makeSentance("given a sentence!");
