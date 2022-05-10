import { createLL, searchLL } from "../index";

let root;

test("create linked list", () => {
	createLL(20);
	createLL(30);
	root = createLL(40);

	expect(root).not.toBe(null);
});

test("search an item inside the linked list", () => {
	expect(searchLL(root, 30)).toEqual("Found 30");
});
