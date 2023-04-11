const arr = [1, 6, 4];
arr.sort();
console.log(arr);
let set = new Set();
let i = arr.length - 1;
while (i >= 0) {
  set.add(arr[i]);
  let tmp = arr[i];
  for (let j = 0; j < i; j++) {
    tmp += arr[j];
    set.add(tmp);
  }
  tmp = arr[i];
  for (let j = 0; j < i; j++) {
    tmp -= arr[j];
    if (tmp > 0) set.add(tmp);
  }
  i -= 1;
}
console.log(set);
