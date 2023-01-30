function fibs(n) {
  if (n <= 0) return "n must be greater than 0";
  if (n === 1) return [0];
  else if (n === 2) return [0, 1];
  else {
    let res = [0, 1];
    while (n > 2) {
      let newTerm = res[res.length - 2] + res[res.length - 1];
      res.push(newTerm);
      n--;
    }
    return res;
  }
}

function fibsRec(n) {
  if (n <= 0) return "n must be greater than 0";
  if (n === 1) return [0];
  else if (n === 2) return [0, 1];
  else {
    return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
  }
}

let test = fibsRec(30);
console.log(test);
