function compare(a: any, b: any): number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b);
  } else {
    // Handle incomparable types
    // Could throw an error, return 0 (treat as equal), or use a different strategy
    throw new Error('Incomparable types');
  }
}

const arr = [1, 2, 'a', 'b', 4, 5];

try {
  arr.sort(compare);
  console.log(arr); 
} catch (error) {
  console.error(error.message)
}
// Or use type assertion (less safe):
const arr2 = [1, 2, 'a' as any, 4, 5];
arr2.sort(compare);