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
    return currentNode;
  }

  findMin() {
    let currentNode = this.root;
    if (currentNode == null) return null;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    if (currentNode === null) return null;
    return currentNode;
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
    return currentNode;
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (node === null) return null;
      if (data === node.data) {
        if (node.right === null && node.left === null) return null;
        if (node.right === null) return node.left;
        if (node.left === null) return node.right;

        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  preOrder() {
    const printTree = (node) => {
      if (node === null) {
        return '';
      }

      return `${node.data + ' '}${printTree(node.left)}${printTree(
        node.right
      )}`;
    };

    return printTree(this.root);
  }

  postOrder() {
    const printTree = (node) => {
      if (node === null) {
        return '';
      }

      return `${printTree(node.left)}${printTree(node.right)}${
        node.data + ' '
      }`;
    };

    return printTree(this.root);
  }

  bfs() {}
}

const testArr = [9, 67, 52, 72, 14, 23, 76, 12];
const myTree = new BST();

testArr.forEach((e) => myTree.add(e));

console.log(myTree.preOrder());
myTree.remove(67);
console.log(myTree.preOrder());
