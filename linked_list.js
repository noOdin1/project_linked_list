/* linked_list.js */

/* class definition for a node point */
class Node {
  constructor(val = null, nextNode = null) {
    // Initial conditions of a node point
    this.val = val;
    this.nextNode = null;
  }
}

/* class definition for a linked list */
class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this.totalNodes = 0;
  }

  size() {
    return this.totalNodes;
  }

  head() {
    if (this.totalNodes === 0) {
      return undefined;
    }
    return this.headNode;
  }

  tail() {
    if (this.totalNodes === 0) {
      return undefined;
    }
    return this.tailNode;
  }

}
