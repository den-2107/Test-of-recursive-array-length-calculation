const testCases = [
  {
    name: "Empty array",
    array: [],
  },
  {
    name: "Not empty array",
    array: [1, "2", {}, []],
  },
  {
    name: "Array with undefined",
    array: [1, undefined, 2],
  },
  {
    name: "Array with null",
    array: [1, null, 2],
  },
  {
    name: "Array with NaN",
    array: [1, NaN, 2],
  },
  {
    name: "Array with a gap",
    array: [1, , 2],
  },
  {
    name: "3 gaps array",
    array: [, , ,],
  },
];

const solutions = [
  {
    name: "egogre's first",
    func: (array) => {
      const arrayLength = (array) => {
        if (array.pop() === undefined) return 0;
        return arrayLength(array) + 1;
      };

      return arrayLength(array);
    },
  },
  {
    name: "egogre's second",
    func: (array) => {
      const arrayLength = (array) => (array.pop() ? arrayLength(array) : 0);
      return arrayLength(array);
    },
  },
  {
    name: "egogre's third",
    func: (array) => {
      const arrayLength = (array) => {
        const keys = [...array.keys()].map((_) => true);
        const counter = (_) => (keys.pop() ? counter() + 1 : 0);
        return counter();
      };

      return arrayLength(array);
    },
  },
  {
    name: "alex",
    func: (array) => {
      const arrayLength = (array, increment = 0) => {
        if (array.length === 0) return increment;

        array.pop();

        increment += 1;

        return arrayLength(array, increment);
      };

      return arrayLength(array);
    },
  },
  {
    name: "den",
    func: (array) => {
      let i = 0;
      const arrayLength = (array) => {
        if (array.pop() === undefined) {
          return i;
        } else {
          i++;
        }
      };

      return arrayLength(array);
    },
  },
];

/*
Так, тут напишу весь код, который написал в решении на Stepik

const arr = [1, 2, 3, 5, 7,];

let i = 0;
function getLength(arr) {
  if (arr.pop() === undefined) {
    return i;
  } else {
    i++;
    return getLength(arr);
  }
}
*/

solutions.forEach((solution) => {
  console.log(`Testing ${solution.name}...`);

  let passed = 0,
    failed = 0;

  testCases.forEach((testCase, i) => {
    const expected = testCase.array.length;
    const answer = solution.func(testCase.array);
    const testCaseName = `${i + 1}. ${testCase.name}`;

    if (answer === expected) {
      console.log(testCaseName + " passed!");
      passed++;
    } else {
      console.error(
        `${testCaseName} failed! Expected: ${expected}, got: ${answer}`
      );
      failed++;
    }
  });

  console.log(
    `${solution.name} has been tested! Passed: ${passed}, Failed: ${failed}`
  );
  console.log();
});
