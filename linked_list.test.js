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
  test("Test insertAt() when list is empty, index = 0", () => {
    // need an anonymous function to trigger the 'Throw' statement
    expect(() => tmpList.insertAt(0, "dog")).toThrow("Index out of range");
  });
  test("Test insertAt() when list is empty, adding 1 item, index = 1", () => {
    tmpList.insertAt(1, "cat");
    expect(tmpList.head()).toEqual({ nextNode: null, val: "cat" });
  });
  test("Test insertAt() when list is empty, adding 1 item, index = 2", () => {
    // need an anonymous function to trigger the 'Throw' statement
    expect(() => tmpList.insertAt(2, "cat")).toThrow("Index out of range");
  });
  test("Test insertAt() when list is empty, adding 2 items", () => {
    // need an anonymous function to trigger the 'Throw' statement
    tmpList.insertAt(1, "cat", "dog");
    expect(tmpList.head()).toEqual({
      val: "cat",
      nextNode: {
        val: "dog",
        nextNode: null,
      },
    });
  });
  test("Test removeAt() when list is empty, index = 0", () => {
    // need an anonymous function to trigger the 'Throw' statement
    expect(() => tmpList.removeAt(0)).toThrow("Index out of range");
  });
  test("Test removeAt() when list is empty, index = 1", () => {
    // need an anonymous function to trigger the 'Throw' statement
    expect(() => tmpList.removeAt(1)).toThrow("Index out of range");
  });
  test("Test removeAt() when list is empty, index = 2", () => {
    // need an anonymous function to trigger the 'Throw' statement
    expect(() => tmpList.removeAt(2)).toThrow("Index out of range");
  });
});

describe("Test for Linked List class when there is one item on the list", () => {
  let tmpList;
  beforeEach(() => {
    tmpList = new LinkedList();
    tmpList.append("dog");
  });
  test("Test size() when list has 1 item", () => {
    expect(tmpList.size()).toEqual(1);
  });
  test("Test head() when list has 1 item", () => {
    // Returns a 'Node' object
    expect(tmpList.head()).toEqual({ nextNode: null, val: "dog" });
  });
  test("Test tail() when list has 1 item", () => {
    // Returns a 'Node' object
    expect(tmpList.tail()).toEqual({ nextNode: null, val: "dog" });
  });
  test("Test at() when list has 1 item", () => {
    // Returns a 'Node' object
    expect(tmpList.at(1)).toEqual({ nextNode: null, val: "dog" });
  });
  test("Test pop() when list has 1 item", () => {
    // Returns a 'Node' object
    expect(tmpList.pop()).toEqual({ nextNode: null, val: "dog" });
    // Test to see if size is correct
    expect(tmpList.size()).toEqual(0);
  });
  test("Test contains() when list has 1 item", () => {
    expect(tmpList.contains("dog")).toEqual(true);
  });
  test("Test findIndex() when list has 1 item", () => {
    expect(tmpList.findIndex("dog")).toEqual(1);
  });
  test("Test toString() when list has 1 item", () => {
    expect(tmpList.toString()).toEqual("(dog) -> null");
  });
  test("Test append() when list has 1 item", () => {
    tmpList.append("squirrel");
    expect(tmpList.toString()).toEqual("(dog) -> (squirrel) -> null");
  });
  test("Test prepend() when list has 1 item", () => {
    tmpList.prepend("squirrel");
    expect(tmpList.toString()).toEqual("(squirrel) -> (dog) -> null");
  });

  test("Test insertAt() when list has 1 item, 1 item to add, index = 0", () => {
    expect(() => tmpList.insertAt(0, "cat")).toThrow("Index out of range");
  });
  test("Test insertAt() when list has 1 item, 1 item to add, index = 1", () => {
    tmpList.insertAt(1, "cat");
    expect(tmpList.toString()).toEqual("(cat) -> (dog) -> null");
    expect(tmpList.size()).toEqual(2);
  });
  test("Test insertAt() when list has 1 item, 1 item to add, index = 2", () => {
    // console.log();
    tmpList.insertAt(2, "cat");
    expect(tmpList.toString()).toEqual("(dog) -> (cat) -> null");
    expect(tmpList.size()).toEqual(2);
  });
  test("Test insertAt() when list has 1 item, 1 item to add, index = 3", () => {
    expect(() => tmpList.insertAt(3, "cat")).toThrow("Index out of range");
  });

  test("Test insertAt() when list has 1 item, 2 items to add, index = 0", () => {
    expect(() => tmpList.insertAt(0, "cat", "squirrel")).toThrow(
      "Index out of range",
    );
  });
  test("Test insertAt() when list has 1 item, 2 items to add, index = 1", () => {
    tmpList.insertAt(1, "cat", "squirrel");
    expect(tmpList.toString()).toEqual("(cat) -> (squirrel) -> (dog) -> null");
  });
  test("Test insertAt() when list has 1 item, 2 items to add, index = 2", () => {
    tmpList.insertAt(2, "cat", "squirrel");
    expect(tmpList.toString()).toEqual("(dog) -> (cat) -> (squirrel) -> null");
  });
  test("Test insertAt() when list has 1 item, 2 items to add, index = 3", () => {
    expect(() => tmpList.insertAt(3, "cat", "squirrel")).toThrow(
      "Index out of range",
    );
  });

  test("Test removeAt() when list has 1 item, index = 0", () => {
    expect(() => tmpList.removeAt(0)).toThrow("Index out of range");
  });
  test("Test removeAt() when list has 1 item, index = 1", () => {
    expect(tmpList.removeAt(1)).toEqual({ nextNode: null, val: "dog" });
    expect(tmpList.size()).toEqual(0);
  });
  test("Test removeAt() when list has 1 item, index = 2", () => {
    expect(() => tmpList.removeAt(2)).toThrow("Index out of range");
  });
});

describe("Test for Linked List class when there is 2 items on the list", () => {
  let tmpList;
  beforeEach(() => {
    tmpList = new LinkedList();
    tmpList.append("dog");
    tmpList.append("cat");
  });

  // 2 items on the list, 1 item to add
  test("Test insertAt() when list has 2 items, 1 item to add, index = 0", () => {
    expect(() => tmpList.insertAt(0, "hamster")).toThrow("Index out of range");
  });
  test("Test insertAt(), list has 2 items, 1 item to add, index = 1", () => {
    tmpList.insertAt(1, "squirrel");
    expect(tmpList.toString()).toEqual("(squirrel) -> (dog) -> (cat) -> null");
  });
  test("Test insertAt(), list has 2 items, 1 item to add, index = 2", () => {
    tmpList.insertAt(2, "squirrel");
    expect(tmpList.toString()).toEqual("(dog) -> (squirrel) -> (cat) -> null");
  });
  test("Test insertAt(), list has 2 items, 1 item to add, index = 3", () => {
    tmpList.insertAt(3, "squirrel");
    expect(tmpList.toString()).toEqual("(dog) -> (cat) -> (squirrel) -> null");
  });
  test("Test insertAt() when list has 2 items, 1 item to add, index = 4", () => {
    expect(() => tmpList.insertAt(4, "hamster")).toThrow("Index out of range");
  });

  // 2 items on the list, 2 items to add
  test("Test insertAt() when list has 2 items, 2 item to add, index = 0", () => {
    expect(() => tmpList.insertAt(0, "hamster", "squirrel")).toThrow(
      "Index out of range",
    );
  });
  test("Test insertAt(), list has 2 items, 2 item to add, index = 1", () => {
    tmpList.insertAt(1, "hamster", "squirrel");
    expect(tmpList.toString()).toEqual(
      "(hamster) -> (squirrel) -> (dog) -> (cat) -> null",
    );
  });
  test("Test insertAt(), list has 2 items, 2 item to add, index = 2", () => {
    tmpList.insertAt(2, "hamster", "squirrel");
    expect(tmpList.toString()).toEqual(
      "(dog) -> (hamster) -> (squirrel) -> (cat) -> null",
    );
  });
  test("Test insertAt(), list has 2 items, 1 item to add, index = 3", () => {
    tmpList.insertAt(3, "hamster", "squirrel");
    expect(tmpList.toString()).toEqual(
      "(dog) -> (cat) -> (hamster) -> (squirrel) -> null",
    );
  });
  test("Test insertAt() when list has 2 items, 1 item to add, index = 4", () => {
    expect(() => tmpList.insertAt(4, "hamster", "squirrel")).toThrow(
      "Index out of range",
    );
  });
});
