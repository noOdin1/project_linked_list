/* linked_list.test.js */
import { Node, LinkedList } from "./linked_list";

describe("Test for Linked List class when the list is empty", () => {
  test("Test size() when list is empty", () => {
    let tmpList = new LinkedList();
    expect(tmpList.size()).toEqual(0);
  });
  test("Test head() when list is empty", () => {
    let tmpList = new LinkedList();
    expect(tmpList.head()).toEqual(undefined);
  });
  test("Test tail() when list is empty", () => {
    let tmpList = new LinkedList();
    expect(tmpList.tail()).toEqual(undefined);
  });
  test("Test at() when list is empty", () => {
    let tmpList = new LinkedList();
    expect(tmpList.at(1)).toEqual(undefined);
  });
  test("Test pop() when list is empty", () => {
    let tmpList = new LinkedList();
    expect(tmpList.pop()).toEqual(undefined);
  });
  test("Test contains() when list is empty", () => {
    let tmpList = new LinkedList();
    expect(tmpList.contains()).toEqual(false);
  });
  test("Test findIndex() when list is empty", () => {
    let tmpList = new LinkedList();
    expect(tmpList.findIndex("something")).toEqual(-1);
  });
  test("Test toString() when list is empty", () => {
    let tmpList = new LinkedList();
    expect(tmpList.toString()).toEqual(null);
  });
  test("Test append() when list is empty", () => {
    let tmpList = new LinkedList();
    tmpList.append("squirrel");
    expect(tmpList.head().val).toEqual("squirrel");
  });
  test("Test prepend() when list is empty", () => {
    let tmpList = new LinkedList();
    tmpList.prepend("squirrel");
    expect(tmpList.head().val).toEqual("squirrel");
  });
  test("Test insertAt() when list is empty", () => {
    let tmpList = new LinkedList();
    // need an anonymous function to trigger the 'Throw' statement
    expect(() => tmpList.insertAt(2, "cat", "dog")).toThrow(
      "Index out of range",
    );
  });
  test("Test removeAt() when list is empty", () => {
    let tmpList = new LinkedList();
    // need an anonymous function to trigger the 'Throw' statement
    expect(() => tmpList.removeAt(2)).toThrow("Index out of range");
  });
});
