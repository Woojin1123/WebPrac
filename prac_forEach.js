// let arr = { apple: "03", index_mvl: 31, index_nM: "좋음" };
// let arr2 = [1, 2, 3, 4, 5];
// let arr3 = "안녕하세요";
// let rest = [7, 8, 9];

// console.log([...arr3]);
// console.log([1, 2, 3, 4, ...rest]);
// // arr2.forEach((element, index, arr) => {
// //   console.log(element);
// //   console.log(index);
// //   console.log(arr);
// // });

// // Object.entries(arr).forEach(([key, value], idx, arr) => {
// //   console.log(`요소: ${key} , ${value} 인덱스: ${idx} 배열 : ${arr}`);
// // });

// // [...arr3].forEach((ele) => {
// //   console.log(ele);
// // });

// //CallBack

function first(param) {
  console.log(1);
  param();
}

function second() {
  console.log(2);
}

first();
