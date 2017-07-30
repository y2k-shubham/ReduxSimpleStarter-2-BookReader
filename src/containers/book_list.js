// Library imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Manual imports
import { selectBook } from '../actions/index.js';

class BookList extends Component {
	renderList() {
		return (this.props.books.map((book) => {
			return (
				<li key={book.title}
					className="list-group-item"
					onClick={() => {
						this.props.selectBook(book);
					}}>
						<div>{book.title}</div>
				</li>
			);
		}));
	}

	render() {
		console.log('BookList render()');
		return (
			<ul className="list-group col-sm-4">
					{this.renderList()}
			</ul>
		);
	}
}

// Whatever is returned will show up as props inside BookList
function mapStateToProps(state) {
	return ({
		books: state.books
	});
}

// Whatever is returned will show up as props inside BookList
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed to all of our Reducers
	return bindActionCreators({
		selectBook: selectBook
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);