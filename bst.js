class Node {
	constructor(key) {
		this.key = key;
		this.left = this.right = null;
	}
}

let root = null;

function insertKey(key) {
	root = insertAndReturnRoot(root, key);
}

function insertAndReturnRoot(root, key) {
	if (root === null) root = new Node(key);

	if (key < root.key) root.left = insertAndReturnRoot(root.left, key);

	if (key > root.key) root.right = insertAndReturnRoot(root.right, key);

	return root;
}

function traverseAsc(root) {
	if (root !== null) {
		traverseAsc(root.left);
		console.log("Asc", root.key);
		traverseAsc(root.right);
	}
}
function traverseDsc(root) {
	if (root !== null) {
		traverseDsc(root.right);
		console.log("Dsc", root.key);
		traverseDsc(root.left);
	}
}

function deleteKey(key) {
	root = deleteAndReturnRoot(root, key);
}

function deleteAndReturnRoot(root, key) {
	// Point: If Empty Tree
	if (root === null) return root;

	// Point: If Not Empty Find the Node to be Deleted
	if (key < root.key) root.left = deleteAndReturnRoot(root.left, key);
	else if (key > root.key) root.right = deleteAndReturnRoot(root.left, key);
	// Point: The Deletable Node is found
	else {
		// Part: Node has Only One Child or No Child
		if (root.left === null) return root.right;
		else if (root.right === null) return root.left;

		//  Part: Node has Two Children
		// Point: Get the Inorder Successor
		root.key = minValue(root.right);

		// Point: Delete the inorder successor
		root.right = deleteAndReturnRoot(root.right, root.key);
	}

	return root;
}

// Key: Get Minimum Value from Right Subtree
function minValue(root) {
	let min = root.key;
	while (root.left !== null) {
		min = root.left.key;
		root = root.left;
	}
	return min;
}

// Key: Create/Insert/Update BST
insertKey(100);
insertKey(50);
insertKey(250);
insertKey(20);
insertKey(90);
insertKey(290);
insertKey(2000);
console.log(root);

// Key: Delete BST
deleteKey(20);
// deleteKey(2000);

// Key: Traverse BST
traverseAsc(root);
traverseDsc(root);
