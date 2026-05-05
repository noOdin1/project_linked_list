/* linked_list.test.js */
import { Node, LinkedList } from "./linked_list";

describe("Test for Linked List class when the list is empty", () => {
  let tmpList;
  beforeEach(() => {
    // before each test, reset tmpList to a new empty Linked List
    tmpList = new LinkedList();
  });
  test("Test size() when list is empty", () => {
    expect(tmpList.size()).toEqual(0);
  });
  test("Test head() when list is empty", () => {
    expect(tmpList.head()).toEqual(undefined);
  });
  test("Test tail() when list is empty", () => {
    expect(tmpList.tail()).toEqual(undefined);
  });
  test("Test at() when list is empty", () => {
    expect(tmpList.at(1)).toEqual(undefined);
  });
  test("Test pop() when list is empty", () => {
    expect(tmpList.pop()).toEqual(undefined);
  });
  test("Test contains() when list is empty", () => {
    expect(tmpList.contains()).toEqual(false);
  });
  test("Test findIndex() when list is empty", () => {
    expect(tmpList.findIndex("something")).toEqual(-1);
  });
  test("Test toString() when list is empty", () => {
    expect(tmpList.toString()).toEqual(null);
  });
  test("Test append() when list is empty", () => {
    tmpList.append("squirrel");
    expect(tmpList.head().val).toEqual("squirrel");
  });
  test("Test prepend() when list is empty", () => {
    tmpList.prepend("squirrel");
    expect(tmpList.head().val).toEqual("squirrel");
  });
  test("Test insertAt() when list is empty", () => {
    // need an anonymous function to trigger the 'Throw' statement
    expect(() => tmpList.insertAt(2, "cat", "dog")).toThrow(
      "Index out of range",
    );
  });
  test("Test removeAt() when list is empty", () => {
    // need an anonymous function to trigger the 'Throw' statement
    expect(() => tmpList.removeAt(2)).toThrow("Index out of range");
  });
});

describe("Test for Linked List class when there is one item on the list", () => {
  test("Test size() when list has 1 item", () => {
    let tmpList = new LinkedList();
    tmpList.append("dog");
    expect(tmpList.size()).toEqual(1);
  });
  test("Test head() when list has 1 item", () => {
    let tmpList = new LinkedList();
    tmpList.append("dog");
    // Returns a 'Node' object
    expect(tmpList.head()).toEqual({ nextNode: null, val: "dog" });
  });
  test("Test tail() when list has 1 item", () => {
    let tmpList = new LinkedList();
    tmpList.append("dog");
    // Returns a 'Node' object
    expect(tmpList.tail()).toEqual({ nextNode: null, val: "dog" });
  });
  test("Test at() when list has 1 item", () => {
    let tmpList = new LinkedList();
    tmpList.append("dog");
    // Returns a 'Node' object
    expect(tmpList.at(1)).toEqual({ nextNode: null, val: "dog" });
  });
  test("Test pop() when list has 1 item", () => {
    let tmpList = new LinkedList();
    tmpList.append("dog");
    // Returns a 'Node' object
    expect(tmpList.pop()).toEqual({ nextNode: null, val: "dog" });
    // Test to see if size is correct
    expect(tmpList.size()).toEqual(0);
  });
  test("Test contains() when list has 1 item", () => {
    let tmpList = new LinkedList();
    tmpList.append("dog");
    expect(tmpList.contains("dog")).toEqual(true);
  });
  test("Test findIndex() when list has 1 item", () => {
    let tmpList = new LinkedList();
    tmpList.append("dog");
    expect(tmpList.findIndex("dog")).toEqual(1);
  });
  test("Test toString() when list has 1 item", () => {
    let tmpList = new LinkedList();
    tmpList.append("dog");
    expect(tmpList.toString()).toEqual("(dog) -> null");
  });
  test("Test append() when list has 1 item", () => {
    let tmpList = new LinkedList();
    tmpList.append("dog");
    tmpList.append("squirrel");
    expect(tmpList.toString()).toEqual("(dog) -> (squirrel) -> null");
  });
  test("Test prepend() when list has 1 item", () => {
    let tmpList = new LinkedList();
    tmpList.append("dog");
    tmpList.prepend("squirrel");
    expect(tmpList.toString()).toEqual("(squirrel) -> (dog) -> null");
  });
  test("Test insertAt() when list has 1 item, after 1", () => {
    let tmpList = new LinkedList();
    tmpList.append("dog");
    tmpList.insertAt(1, "cat", "squirrel");
    expect(tmpList.toString()).toEqual("(dog) -> (cat) -> (squirrel) -> null");
  });
  test("Test insertAt() when list has 1 item, at 1 (2 item to add)", () => {
    let tmpList = new LinkedList();
    tmpList.append("dog");
    tmpList.insertAt(1, "cat", "squirrel");
    expect(tmpList.toString()).toEqual("(dog) -> (cat) -> (squirrel) -> null");
    expect(tmpList.size()).toEqual(3);
  });
  test("Test insertAt() when list has 1 item, at 1 (1 item to add)", () => {
    let tmpList = new LinkedList();
    tmpList.append("dog");
    tmpList.insertAt(1, "cat");
    expect(tmpList.toString()).toEqual("(dog) -> (cat) -> null");
    expect(tmpList.size()).toEqual(2);
  });
  test("Test removeAt() when list has 1 item", () => {
    let tmpList = new LinkedList();
    tmpList.append("dog");
    // need an anonymous function to trigger the 'Throw' statement
    expect(() => tmpList.removeAt(2)).toThrow("Index out of range");
  });
});
