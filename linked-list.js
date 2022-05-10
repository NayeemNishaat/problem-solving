class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

let root = null;

export function createLL(value) {
	function createLLFactory(root, value) {
		if (root === null) return (root = new Node(value));
		root.next = createLLFactory(root.next, value);
		return root;
	}

	return (root = createLLFactory(root, value));
}

// Warning: Easy But Not Recommended
// function traverseLLAsc() {
// 	while (root !== null) {
// 		console.log(root.value);
// 		root = root.next;
// 	}
// }

export function traverseLLDsc() {
	function traverseLLDscFactory(root) {
		if (root !== null) {
			traverseLLDscFactory(root.next);
			console.log(root.value);
		}
	}

	traverseLLDscFactory(root);
}

export function traverseLLAsc(root) {
	if (root !== null) {
		console.log(root.value);
		traverseLLAsc(root.next);
	}
}

export function searchLL(root, value) {
	if (root === null) return;
	if (root.value === value) {
		// console.log("Found", value);
		return `Found ${value}`;
	}

	return searchLL(root.next, value);
}

export function deleteLL(value) {
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

export function updateLL(currentValue, updatedValue) {
	function searchLL(root, value) {
		if (root === null) return;

		if (root.value === value) {
			root.value = updatedValue;
		}

		searchLL(root.next, value);
	}
	searchLL(root, currentValue);
}

// Chapter: Insert/Create
createLL(10);
createLL(20);
createLL(30);
createLL(40);
createLL(50);
// console.log(root);

// Chapter: Traverse
// traverseLLAsc();
// traverseLLDsc();
// traverseLLAsc(root);

// Chapter: Search
// searchLL(root, 30);

// Chapter: Delete
// deleteLL(30);
// console.log(root);

// Chapter: Update
// updateLL(10, 100);
// updateLL(20, 100);
// console.log(root);
