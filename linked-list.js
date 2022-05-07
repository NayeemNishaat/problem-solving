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

// Warning: Easy But Not Recommended
// function traverseLLAsc() {
// 	while (root !== null) {
// 		console.log(root.value);
// 		root = root.next;
// 	}
// }

function traverseLLDsc() {
	function traverseLLDscFactory(root) {
		if (root !== null) {
			traverseLLDscFactory(root.next);
			console.log(root.value);
		}
	}

	traverseLLDscFactory(root);
}

function traverseLLAsc(root) {
	if (root !== null) {
		console.log(root.value);
		traverseLLAsc(root.next);
	}
}

function searchLL(root, value) {
	if (root !== null) {
		if (root.value === value) {
			console.log("Found", value);
		}

		searchLL(root.next, value);
	}
}

function deleteLL(value) {
	function deleteLLFactory(root, value) {
		if (root === null) return root;

		// Part: If value is the first/middle element
		if (root.value === value) {
			root = root.next;
			return root;
		}

		// Part: If value is the last element
		if (root.next === null) {
			return null;
		}

		root.next = deleteLLFactory(root.next, value);

		return root;
	}
	root = deleteLLFactory(root, value);
}

// Chapter: Insert/Create
createLL(10);
createLL(20);
createLL(30);
createLL(40);
// createLL(50);
// console.log(root);

// Chapter: Traverse
// traverseLLAsc();
// traverseLLDsc();
// traverseLLAsc(root);

// Chapter: Search
// searchLL(root, 30);

// Chapter: Delete
deleteLL(40);
console.log(root);
