class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length = 1;
    } else {
      node.next = this.head;
      this.head = node;
      this.length += 1;
    }
  }

  append(data) {
    const node = new Node(data);

    if (!this.tail) {
      this.head = node;
      this.tail = node;
      this.length = 1;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length += 1;
    }
  }

  reverse() {
    let prev = null;
    let next;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    while (node !== null) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }

  printList() {
    const result = [this.head.data];
    let current = this.head;

    while (current.next !== null) {
      result.push(current.next.data);
      current = current.next;
    }

    return result.join('=>');
  }
}

const myList = new LinkedList();
myList.prepend(1);
myList.prepend(2);
myList.prepend(3);
myList.prepend(4);
myList.reverse();

console.log(myList.printList());
