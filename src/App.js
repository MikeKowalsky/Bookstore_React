import React, { Component } from 'react';

import BooksTable from './BooksTable';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      books: [],
      isLoading: true,
      showTable: true,
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

  handleHideShowClick = () => {
    console.log('hide/show table');
    
    const currentState = {...this.state};
    currentState.showTable = !currentState.showTable;
    this.setState(currentState);
  }

  render() {

    const style = {
      p: {
        color: 'red',
        fontWeight: 'bold',
        marginLeft: '10px',
      },
      btn: {
        marginLeft: '10px',
      }
    }

    let table;
    if(this.state.showTable){
      table = <BooksTable booksArray={this.state.books} />;
    } else {
      table = '';
    }

    if(this.state.isLoading){
      return <p>Loading ...</p>
    }

    return (
      <div>
        <header>
          <h1>Bookstore in React</h1>
        </header>

        <p style={style.p}>Table with books</p>
        <input 
          type="button"
          value="Hide/Show table"
          style={style.btn}
          onClick={() => this.handleHideShowClick()} 
        />

        {table}

      </div>
    );
  }
}

export default App;



