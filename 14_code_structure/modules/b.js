export const CAKE = 'CHOCOLATE';

function g() {
  console.log('FUNCTION INSIDE MODULE B');
}

// ONLY ONE DEFAULT IS ALLOWED
export default g;
