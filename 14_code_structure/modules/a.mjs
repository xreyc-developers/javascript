const PIE = 3.14;

function f() {
  console.log('FUNCTION INSIDE MODULE A');
}

// THIS IS NOT ACCESSIBLE
function f1() {}

export { PIE, f }
