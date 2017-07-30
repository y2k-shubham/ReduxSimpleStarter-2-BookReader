// selectBook is an action-creator, it needs to return an action
// An action is an object with a 'type' property
export function selectBook(book) {
	return ({
		type: 'BOOK_SELECTED',
		payload: book 
	});
}