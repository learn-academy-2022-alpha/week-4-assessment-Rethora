// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe('shuffle', () => {
  it('takes in an array, removes the first item from the array and shuffles the remaining content', () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors1Expected = ["yellow", "blue", "pink", "green"] // can be a different order

    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    const colors2Expected = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"] // can be a different order

    expect(shuffle(colors1)).toEqual(expect.arrayContaining(colors1Expected))
    expect(shuffle(colors2)).toEqual(expect.arrayContaining(colors2Expected))

    // tests to see that the first item in the array has been removed
    expect(shuffle(colors1)).toEqual(expect.not.arrayContaining([colors1[0]]))
    expect(shuffle(colors2)).toEqual(expect.not.arrayContaining([colors2[0]]))
  })
})

// ERROR:
// ● shuffle › takes in an array, removes the first item from the array and shuffles the remaining content
// ReferenceError: shuffle is not defined

// b) Create the function that makes the test pass.

// PSEUDO CODE:
// create a function named shuffle
// shuffle will take an array parameter named arr
// we can remove the first item of the array using a built in method
// we can then randomly sort the items in the array
// we can return the new array

// CODE:
// original solution:
// const shuffle = arr => arr.slice(1).sort(() => Math.random() - 0.5)

// Passed the test!

const shuffle = arr => {
  // define sorting methods
  const myAwesomeSortingMethods = {
    aToZ: (a, b) => a > b ? 1 : -1,
    zToA: (a, b) => b > a ? 1 : -1,
    aToZSecondLetter: (a, b) => a[1] > b[1] ? 1 : -1,
    zToASecondLetter: (a, b) => b[1] > a[1] ? 1 : -1,
    aToZLastLetter: (a, b) => a[a.length - 1] > b[b.length - 1] ? 1 : -1,
    zToALastLetter: (a, b) => b[b.length - 1] > a[a.length - 1] ? 1 : -1,
    byShortestLength: (a, b) => a.length > b.length ? 1 : -1,
    byLongestLength: (a, b) => b.length > a.length ? 1 : -1,
    byDanesFavoriteColors: (a, b) => a === 'blue' || a === 'yellow' || a === 'periwinkle' || a === 'aquamarine' ? -1 : 0
  }

  // get all the keys of our sorting methods object
  const sortingMethodsArr = Object.keys(myAwesomeSortingMethods)
  // get a random index from our sorting methods array
  const randomIdx = Math.floor(Math.random() * sortingMethodsArr.length)
  // get the name of the random sorting method, so we can access it in our object
  const randomSortingMethod = sortingMethodsArr[randomIdx]
  // as well as log to see how the array is being sorted
  console.log(`Sorting with: ${randomSortingMethod}`)
  // sort and return array with our random custom sorting method
  return arr.slice(1).sort(myAwesomeSortingMethods[randomSortingMethod])
}

// Passed the test!


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe('minMax', () => {
  it('takes an array of numbers and returns an array of the minimum and maximum numbers in that order', () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    const nums1Expected = [-8, 90]

    const nums2 = [109, 5, 9, 67, 8, 24]
    const nums2Expected = [5, 109]

    expect(minMax(nums1)).toEqual(nums1Expected)
    expect(minMax(nums2)).toEqual(nums2Expected)
  })
})

// ERROR:
// ● minMax › takes an array of numbers and returns an array of the minimum and maximum numbers in that order
// ReferenceError: minMax is not defined

// b) Create the function that makes the test pass.

// PSEUDO CODE:
// create a function named minMax
// minMax will take an array parameter named arr
// we can use a built in method to find the smallest number in the array
// we can also use a built in method to find the largest number in the array
// we can return an array with the first element being the smallest number and the second being the largest number

// CODE:
const minMax = arr => [Math.min(...arr), Math.max(...arr)]

// Passed the test!


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe('noDuplicates', () => {
  it('takes in two arrays as arguments and returns one array with no duplicate values', () => {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
    const testArrayExpected = [3, 7, 10, 5, 4, 8, 2, 1]

    expect(noDuplicates(testArray1, testArray2)).toEqual(testArrayExpected)
  })
})

// ERROR:
// ● noDuplicates › takes in two arrays as arguments and returns one array with no duplicate values
// ReferenceError: noDuplicates is not defined

// b) Create the function that makes the test pass.

// PSEUDO CODE:
// create a function named noDuplicates
// noDuplicates will take a single parameter that will be dynamic for arrays
// this will allow us to call the function with as many arguments as we want
// we can do this by using the spread operator on our parameter
// we can flatten all the arrays passed to our function into a single array
// we will remove all duplicates from the flattened array
// we can then return the array with no duplicates

// CODE:
const noDuplicates = (...args) => [...new Set(args.flat())]

// Passed the test!
