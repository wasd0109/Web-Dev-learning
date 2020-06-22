//Question 1

let array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

const sorting = (array) => array.sort((a, b) => a - b);
console.log(sorting(array));

let sortedArray = [1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591];
let bonusArray = [1, "2", "3", 2, 1, 2, "2", "3"];

const checkString = (array) => {
  let result = false;
  array.forEach((num) => {
    if (typeof num === "string") result = true;
  });
  return result;
};

checkString(bonusArray);

let sortToArray = (array) => {
  let oldArray = sorting(array);
  let newArray = [];
  let tempArray = [];
  while (oldArray.length > 0) {
    tempArray = oldArray.filter((num) => oldArray[0] === num);
    if (tempArray.length === 1) tempArray = tempArray[0];
    newArray.push(tempArray);
    oldArray = oldArray.filter((num) => num !== oldArray[0]);
  }
  return newArray;
};

const finalFn = (array) => {
  let result = [];
  if (checkString(array)) {
    let arrayS = array.filter((num) => typeof num === "string");
    let arrayN = array.filter((num) => typeof num === "number");
    arrayS = sortToArray(arrayS);
    arrayN = sortToArray(arrayN);
    result.push(arrayN);
    result.push(arrayS);
  } else result = sortToArray(array);
  return result;
};

finalFn(bonusArray);

//Question 2
const findTarget = (array, target) => {
  let targetIndex = [];
  for (let i = 0; i < array.length; i++)
    for (let j = 0; j < array.length; j++)
      if (array[i] + array[j] === target && i != j) {
        targetIndex.push(array[i]);
        targetIndex.push(array[j]);
        return targetIndex;
      }
};

findTarget([1, 2, 3], 4);

//Question 3
const hexToRGB = (hex) => {
  console.log(hex);
  let r = parseInt("0x" + hex.slice(2, 4));
  let g = parseInt("0x" + hex.slice(4, 6));
  let b = parseInt("0x" + hex.slice(6, 8));
  return `r(${r}) g(${g}) b(${b})`;
};

const rgbToHex = (r, g, b) => {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  return `0x${r}${g}${b}`;
};

let colorConverter = (colorCode) => {
  if (colorCode.slice(0, 2) == "0x") {
    return hexToRGB(colorCode);
  } else {
    colorCode = colorCode.split(",");
    return rgbToHex(
      Number(colorCode[0]),
      Number(colorCode[1]),
      Number(colorCode[2])
    );
  }
};

colorConverter("255,255,255");
