class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
    this.searched = false;
    this.parent = null;
  }
}

class Graph {
  constructor(nodes) {
    this.nodes = nodes;
  }

  DFS(node) {
    const result = [];

    const traverse = (visitedNode) => {
      visitedNode.searched = true;
      result.push(visitedNode.value);

      visitedNode.edges.forEach((edge) => {
        if (edge.searched !== true) traverse(edge);
      });
      return false;
    };

    traverse(node);
    graph.nodes.forEach((node) => (node.searched = false));
    return result;
  }

  BFS(node) {
    const result = [];
    const queue = [node];
    while (queue.length > 0) {
      let currentNode = queue.shift();
      result.push(currentNode.value);
      currentNode.searched = true;
      currentNode.edges.forEach((edge) => {
        if (edge.searched === false) queue.push(edge);
      });
    }

    graph.nodes.forEach((node) => (node.searched = false));
    return result;
  }
}

const node0 = new Node(0);
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

node0.edges = [node2];
node1.edges = [node4];
node2.edges = [node5, node0, node3];
node3.edges = [node2];
node4.edges = [node1, node5];
node5.edges = [node4, node2];

const graph = new Graph();
graph.nodes = [node0, node1, node2, node3, node4, node5];

console.log('DFS ' + graph.DFS(node0));
console.log('BFS ' + graph.BFS(node0));
