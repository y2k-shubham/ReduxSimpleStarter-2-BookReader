import { combineReducers } from 'redux';
import BooksReducer from './reducer_books.js';
import ActiveBook from './reducer_active_book.js';

// any key to the object provided in combineReducers ends up being a key in our application state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
