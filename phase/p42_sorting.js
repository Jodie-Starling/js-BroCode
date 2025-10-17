// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings


/*
array.sort(compareFunction)
告诉 sort() 我希望的排序方式

在 JS 中，比较函数告诉 .sort() 两个元素谁排前谁排后。
返回负数 → 前；返回正数 → 后；返回 0 → 不变。

<0、>0、=0 这些返回值能起作用，是因为 sort() 的底层实现在使用它。

function sort(array, compare) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // compare 返回负数 -> a 应该排在 b 前
      if (compare(array[i], array[j]) > 0) {
        // 如果 compare 返回正数 -> a 比 b 大，交换位置
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
}

*/


let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.sort();
console.log(fruits); // Output: ['Apple', 'Banana', 'Mango', 'Orange']


let numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 5, 10, 25, 40, 100]

let numbers2 = [40, 100, 1, 5, 25, 10];
numbers2.sort();
console.log(numbers2); // Output: [1, 10, 100, 25, 40, 5] (lexicographic order)
// 以字符串形式比较数字，因此 "100" 在 "25" 之前，因为 "1" 小于 "2"


const people = [{ name: 'John', age: 30, gpa: 3.5 },
                { name: 'Jane', age: 25, gpa: 3.8 },
                { name: 'Bob', age: 35, gpa: 2.9 },
                { name: 'Alice', age: 28, gpa: 3.2 }];

people.sort((a, b) => a.age - b.age);
console.log(people); // Output: Sorted by age
people.sort((a, b) => b.gpa - a.gpa);
console.log(people); // Output: Sorted by gpa

people.sort((a, b) => b.name.localeCompare(a.name));
console.log(people); // Output: Sorted by name in descending order
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people); // Output: Sorted by name in descending order