import React, { Component } from 'react';
import BookList from '../containers/book_list.js';

export default class App extends Component {
  render() {
    return (
      <div>
      	Hello
      	<BookList />
      </div>
    );
  }
}
