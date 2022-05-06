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
	else if (key > root.key) root.right = deleteAndReturnRoot(root.right, key);
	// Point: The Deletable Node is found
	else {
		// Part: Node has Only One Child or No Child
		if (root.left === null) return root.right;
		else if (root.right === null) return root.left;

		//  Part: Node has Two Children
		// Point: Get the Inorder Successor's Key and Replace It with the deleting Node's Key
		root.key = minValue(root.right);

		// Point: Finally Delete the Inorder Successor Node by Passing the Temp Root and the Root Key. But this will Not Delete the OG Root Key Because the Temp Root is sent as the Root to be deleted.
		root.right = deleteAndReturnRoot(root.right, root.key);
	}

	return root;
}

function minValue(root) {
	// Key: Get Minimum Value from Right Subtree
	let min = root.key;
	while (root.left !== null) {
		min = root.left.key;
		root = root.left; // Warning: Updating Temporary Root Not the OG Root
	}
	return min;
}

function SearchKey(root, key) {
	if (root === null) return console.log("Not Found!");

	if (root.key === key) return console.log("Found");

	if (key < root.key) root.left = SearchKey(root.left, key);

	if (key > root.key) root.right = SearchKey(root.right, key);
}

// Key: Create/Insert/Update BST
insertKey(100);
insertKey(50);
insertKey(250);
insertKey(20);
insertKey(90);
insertKey(290);
insertKey(350);
insertKey(150);
insertKey(2000);

// Key: Delete BST
deleteKey(100);
// deleteKey(2000);
console.log(root);

// Key: Traverse BST
// traverseAsc(root);
// traverseDsc(root);

// Key: Search BST
// SearchKey(root, 295);
