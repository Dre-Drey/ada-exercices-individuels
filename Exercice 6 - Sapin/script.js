const ligne = (arr) => {
  let sapin = "";
  let espace = " ";
  for (let i = 0; i < arr.length; i++) {
    let space = espace.repeat(arr.length - i - 1);
    sapin += space + arr[i] + "\n";
  }

  return sapin;
};

const xMas = (n) => {
  let base1 = "+";
  let base2 = "/*\\";
  let etages = [base1, base2];
  let stars = 1;
  let etoile = "*";

  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 && i > 0) {
      let sapin = "/" + etoile.repeat(stars) + "\\";
      etages.push(sapin);
    } else {
      stars += 2;
      let sapin = "/" + etoile.repeat(stars) + "\\";
      etages.push(sapin);
    }
  }
  return ligne(etages);
};
console.log(xMas(12));
