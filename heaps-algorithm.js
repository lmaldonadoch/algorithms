const getPermutations = (arr) => {
  const result = [];

  const swapInPlace = (arrToSwap, indexA, indexB) => {
    const temp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB];
    arrToSwap[indexB] = temp;
  };

  const generate = (n, heapArr) => {
    if (n === 1) {
      result.push(heapArr.slice());
      return;
    }

    generate(n - 1, heapArr);

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swapInPlace(heapArr, i, n - 1);
      } else {
        swapInPlace(heapArr, 0, n - 1);
      }
      generate(n - 1, heapArr);
    }
  };

  return result;
};

/*
Given an array of 4 numbers, return a sting with the latest hour you can form using those numbers
or '' if you can not form a valid 24h time with those numbers.
*/

const heapAlgorithm = (arr) => {
  if (arr[0] === 0 && arr[1] === 0 && arr[2] === 0 && arr[3] === 0)
    return '00:00';
  let result = [0, 0, 0, 0];

  const swapInPlace = (auxArr, indexA, indexB) => {
    const temp = auxArr[indexA];
    auxArr[indexA] = auxArr[indexB];
    auxArr[indexB] = temp;
  };

  const permutations = (heapArr, n = heapArr.length) => {
    if (n === 1) {
      const hour = Number(`${heapArr[0]}${heapArr[1]}`);
      const minute = Number(`${heapArr[2]}${heapArr[3]}`);

      const currentHour = Number(`${result[0]}${result[1]}`);
      const currentMinute = Number(`${result[2]}${result[3]}`);

      if (hour > currentHour && hour < 24 && minute < 60) result = [...heapArr];
      else if (hour === currentHour && minute > currentMinute && minute < 60)
        result = [...heapArr];

      return result;
    }

    permutations(heapArr, n - 1);

    for (let i = 0; i < n - 1; i += 1) {
      if (n % 2 === 0) {
        swapInPlace(heapArr, i, n - 1);
      } else {
        swapInPlace(heapArr, 0, n - 1);
      }

      permutations(heapArr, n - 1);
    }
  };

  permutations([...arr]);

  if (result[0] === 0 && result[1] === 0 && result[2] === 0 && result[3] === 0)
    return '';

  return `${result[0]}${result[1]}:${result[2]}${result[3]}`;
};

console.log(heapAlgorithm([1, 2, 3, 4]));
