class Node {
	constructor(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	}
}

function traverseLR(root) {
	if (root !== null) {
		traverseLR(root.left);
		console.log("LR", root.key);
		traverseLR(root.right);
	}
}

function traverseRL(root) {
	if (root !== null) {
		traverseRL(root.right);
		console.log("RL", root.key);
		traverseRL(root.left);
	}
}

function searchKey(root, key) {
	if (root !== null) {
		searchKey(root.left, key);
		searchKey(root.right, key);
		if (root.key === key) return console.log("Found!", key);
	}
}

// function deleteKey(root, key) {
// 	root = deleteKeyAndReturnRoot(root, key);
// }

function deleteKey(root, key) {
	if (root === null) return root;

	if (root.key === key) {
		if (root.left === null) {
			root.key = root.right; // Remark: Replacing root.key with root.right
			root.right = deleteKey(root.left, root.key); // Remark: After replacing now deleting root.right by assigning root.left because it's null!
			return root;
		}
		if (root.right === null) {
			root.key = root.left;
			root.left = deleteKey(root.right, root.key);
			return root;
		}

		root.key = leftMost(root.left);

		root.left = deleteKey(root.left, root.key); // Warning: Deleting root.left by assigning null
	}

	// Important: Basically Traversing and Updating
	root.left = deleteKey(root.left, key); // Note: Traversing and Updating Left
	root.right = deleteKey(root.right, key); // Note: Traversing and Updating Right

	return root;
}

function leftMost(root) {
	while (root.left) {
		root = root.left;
	}
	return root.key;
}

// Chapter: Inserting/Creating Binary Tree
const root = new Node(12);
root.left = new Node(8);
// root.right = new Node(80);
// root.left.left = new Node(45);
// root.left.right = new Node(455);
// console.log(root);

// Chapter: Traversing Binary Tree
// traverseLR(root);
// traverseRL(root);

// Chapter: Serching Binary Tree
// searchKey(root, 80);

// Chapter: Delete Binary Tree
deleteKey(root, 12);
console.log(root);
