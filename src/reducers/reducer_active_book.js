// state argument isn't application state, it is only (that property of) the state this reducer is responsible for
export default function(state=null, action) {
	switch (action.type) {
		case 'BOOK_SELECTED':
			return action.payload;

		default:
			return state;
	}
}