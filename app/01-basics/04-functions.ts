/*
 * $Required
 * Implement map function which will be used by testMap()
 * Expected result - for each element of array: "Hello, <name>"  
 */
function map(list, mapper) {
  return [];
}

function testMap() {
  let names: string[] = ["Bob", "Ed", "Kate"];
  let mapper: Function = function (name: string) {
    return "Hello, " + name;
  };
  let greetings: string[] = map(names, mapper);
  console.log("map:", greetings);
}

/*
 * $Optional
 * Implement filter function which will be used by testFilter()
 * Expected result - array of 3 elements
 */
function filter(list, filteringAlgorithm) {
  return [];
}

function testFilter() {
  let names: string[] = ["Bob", "Ed", "Brian", "Ben", "Kate"];
  let startingWithB: Function = function (name) {
    return name[0].toUpperCase() === "B";
  };
  let namesStartingWithB: string[] = filter(names, startingWithB);
  console.log("filter:", namesStartingWithB);
}

/*
 * $Optional
 * Implement reduce function which will be used by testReduce()
 * Expected result - 14
 */
function reduce(list, iterator) {
  return null;
}

function testReduce() {
  let sumFn: Function = function (memo: any, item: any, index: number, list: any[]): any {
    return memo + item;
  };
  console.log("reduce 1:", reduce([2, 5, 7], sumFn));
}

export function functionsApp() {
  // testMap();
  // testFilter();
  // testReduce();
}