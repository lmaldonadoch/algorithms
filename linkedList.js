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
      this.head = node.next;
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
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);

console.log(myList.printList());
