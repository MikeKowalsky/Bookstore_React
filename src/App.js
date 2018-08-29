import React, { Component } from 'react';

import BooksTable from './BooksTable';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      books: [],
      isLoading: true,
    };
  }

  componentDidMount(){
    fetch('https://api.myjson.com/bins/udbm5')
      .then(response => response.json())
      .then(data => {
        this.setState({ books: data.books });
        // console.log(this.state.books[0]);
        this.setState({ isLoading: false})
        }
      );    
  }

  render() {

    const style = {
      color: 'red',
      fontWeight: 'bold',
      paddingLeft: '10px',
    }

    if(this.state.isLoading){
      return <p>Loading ...</p>
    }

    return (
      <div>
        <header>
          <h1>Bookstore in React</h1>
        </header>

        <p style={style}>Table with books</p>

        <BooksTable booksArray={this.state.books}/>

      </div>
    );
  }
}

export default App;



