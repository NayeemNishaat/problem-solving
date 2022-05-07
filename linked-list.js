class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

let root = null;

function createLL(value) {
	function createLLFactory(root, value) {
		if (root === null) return (root = new Node(value));
		root.next = createLLFactory(root.next, value);
		return root;
	}

	root = createLLFactory(root, value);
}

function traverseLLAsc() {
	while (root !== null) {
		console.log(root.value);
		root = root.next;
	}
}

function traverseLLDsc() {
	function traverseLLDscFactory(root) {
		if (root !== null) {
			return console.log(root.value);
		}
		root = traverseLLDsc(root);
		return root;
	}

	root = traverseLLDscFactory(root);
}

// Chapter: Insert/Create LL
createLL(10);
createLL(20);
createLL(30);
createLL(40);
createLL(50);
// console.log(root);

// traverseLLAsc();
traverseLLDsc();
