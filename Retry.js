class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    let N = Number(prompt("input"))
  if (N < 5) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  let result = 2;
  for (;;) {
    try {
      result = primitiveMultiply(a, b);
      break;
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) {
        throw e;
      }
    }
  }
  return result;
}

console.log(reliableMultiply(8, 8));
// → 64