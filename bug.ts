function compare(a: any, b: any): number {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

const arr = [1, 2, 'a', 4, 5];
arr.sort(compare); //Error