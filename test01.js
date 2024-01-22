// 1.1 ------------------------------------------------
Date.prototype.daysTo = function (date) {
  const date1 = new Date(this.valueOf());
  const date2 = new Date(date.valueOf());

  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

var days = new Date(2019, 0, 1).daysTo(new Date(2019, 0, 2));
console.log("Day difference: " + days);
console.log();

// 1.2 ------------------------------------------------
const inputArray = [
  { amount: 10000, quantity: 10 },
  { amount: 5000, quantity: 5 },
  { amount: 2500, quantity: 2.5 },
  { amount: 1000, quantity: 1 },
];

const orderedTotalAmountArray = (arr) => {
  let outPutArr = [];

  arr.forEach((e) => {
    e.Total = e.amount * e.quantity;
    outPutArr.push(e);
  });

  outPutArr.sort((a, b) => {
    return a.Total - b.Total;
  });

  return outPutArr;
};

console.log("Input Array: ");
inputArray.forEach((e) => {
  console.log(e);
});

const output = orderedTotalAmountArray(inputArray);
console.log("Output Array: ");
output.forEach((e) => {
  console.log(e);
});
console.log();

// 1.3 ------------------------------------------------
const srcObject = {
  a: 1,
  b: 2,
  c: { ca: 3, cb: 4 },
  d: 4,
};

const prototypeObject = {
  a: true,
  c: null,
};

const objectProjection = (srcObject, prototypeObject) => {
  const outPutObj = {};

  for (const key in prototypeObject) {
    if (prototypeObject.hasOwnProperty(key)) {
      outPutObj[key] = srcObject[key];
    }
  }

  return outPutObj;
};

console.log("Input Object: ");
console.log(srcObject);

const outputObj = objectProjection(srcObject, prototypeObject);
console.log("Output Object: ");
console.log(outputObj);
