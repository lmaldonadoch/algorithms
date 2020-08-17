class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;

    if (node === null) return (this.root = new Node(data));
    else {
      const searchTree = (node) => {
        if (data < node.data) {
          if (node.left === null) return (node.left = new Node(data));
          else return searchTree(node.left);
        } else if (data > node.data) {
          if (node.right === null) return (node.right = new Node(data));
          else return searchTree(node.right);
        } else return null;
      };

      return searchTree(node);
    }
  }

  findMax() {
    let currentNode = this.root;
    if (currentNode == null) return null;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    if (currentNode === null) return null;
    return currentNode.data;
  }

  findMin() {
    let currentNode = this.root;
    if (currentNode == null) return null;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    if (currentNode === null) return null;
    return currentNode.data;
  }

  find(data) {
    let currentNode = this.root;
    if (currentNode == null) return null;
    while (currentNode.data !== data && currentNode.data) {
      if (currentNode.data > data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    if (currentNode === null) return null;
    return currentNode.data;
  }
}

const testArr = [9, 67, 52, 72, 14, 23, 76, 12];
const myTree = new BST();

testArr.forEach((e) => myTree.add(e));

console.log(myTree.findMax());
console.log(myTree.findMin());
console.log(myTree.find(23));
