import { Node, LinkedList } from "./linked_list.js";
/* main.js */

let newList = new LinkedList();

newList.prepend("dog");
newList.append("cat");
newList.append("camel");
newList.append("chicken");
newList.prepend("squirrel");
newList.prepend("hamster");
console.dir(newList);
console.log("size: " + newList.size());
console.dir(newList.head());
console.dir(newList.tail());

console.log(newList.at(10));
console.log("newList is typeof: " + typeof newList);
console.log("Head node is typeof: " + typeof newList.head());
console.dir(newList.at(5));
console.log(newList.toString());

console.dir(newList.pop());
console.log(newList.toString());

console.log("newList contains hamster: " + newList.contains("hamster"));
console.log("newList contains camel: " + newList.contains("camel"));

console.log("dog is at index: " + newList.findIndex("dog"));
console.log("cat is at index: " + newList.findIndex("snake"));

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.dir(list.removeAt(3));
console.log(list.toString());
console.dir(list.removeAt(3));
console.log(list.toString());

// list.insertAt(5, "gecko", "bats");
list.insertAt(2, "gecko", "bats");
console.log(list.toString());
list.insertAt(6, "mouse", "monkey");
console.log(list.toString());
list.insertAt(6, "fox");
console.log(list.toString());

console.log("list size: " + list.size());

try {
  console.log(list.insertAt(12, "wolf", "otter"));
} catch (err) {
  console.log("Error message - ", err);
}

console.log(list.toString());
const myList = new LinkedList();
myList.append("dog");
console.log(myList.at(1));
console.log(myList.head());
console.log(myList.pop());

const anotherList = new LinkedList();
anotherList.insertAt(1, "cat", "dog");
console.log(anotherList.head());
