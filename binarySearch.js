const binarySearch = (arr, num) => {
  arr.sort((a, b) => a - b);
  const chopArr = (choppedArr) => {
    if (choppedArr.length === 1 && choppedArr[0] !== num) return -1;
    let mid = Math.floor(choppedArr.length / 2);

    if (choppedArr[mid] === num) return choppedArr[mid];
    if (choppedArr[mid] > num) return chopArr(choppedArr.slice(0, mid));
    else return chopArr(choppedArr.slice(mid + 1, choppedArr.length));
  };

  return chopArr(arr);
};

const testArr = [3, 4, 6, 2, 3, 645, 2, 3, 6, 83, 23, 13];

console.log(binarySearch(testArr, 92));
