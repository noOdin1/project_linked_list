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

  at(index) {
    if (index == 0 || index > this.totalNodes) {
      return undefined;
    }
    let tmpNode = this.headNode;
    for (let i = 1; i < index; i++) {
      tmpNode = tmpNode.nextNode;
    }
    return tmpNode;
  }

  pop() {
    if (this.totalNodes === 0) {
      return undefined;
    }
    let tmpNode = this.headNode;
    this.headNode = tmpNode.nextNode;
    tmpNode.nextNode = null;
    this.totalNodes -= 1;
    return tmpNode;
  }

  contains(value) {
    let retVal = false;
    let tmpNode = this.headNode;
    for (let i = 0; i < this.totalNodes; i++) {
      if (tmpNode.val === value) {
        retVal = true;
        break;
      }
      tmpNode = tmpNode.nextNode;
    }
    return retVal;
  }

  findIndex(value) {
    let index = -1;
    let tmpNode = this.headNode;
    for (let i = 1; i <= this.totalNodes; i++) {
      if (tmpNode.val === value) {
        index = i;
        break;
      }
      tmpNode = tmpNode.nextNode;
    }
    return index;
  }

}
