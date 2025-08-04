function addition(a: number, b: number): number;
function addition(a: string, b: string): string;
function addition(a: any, b: any): any {
  return a + b;
}

console.log(addition(2, 3));      // 5
console.log(addition("a", "b"));  // "ab"
