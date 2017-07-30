// library imports
import React, { Component } from 'react';
// component imports
import BookList from '../containers/book_list.js';
import BookDetail from '../containers/book_detail.js';

export default class App extends Component {
  render() {
    return (
      <div>
      	<BookList />
      	<BookDetail />
      </div>
    );
  }
}
