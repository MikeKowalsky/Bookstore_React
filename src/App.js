import React, { Component } from 'react';

import BooksTable from './BooksTable';
import CardContainer from './CardContainer';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      books: [],
      isLoading: true,
      showTable: false,
      showCards: true,
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

  handleHideShowTable = () => {
    console.log('hide/show table');
    
    const currentState = {...this.state};
    currentState.showTable = !currentState.showTable;
    this.setState(currentState);
  }

  handleHideShowCards = () => {
    console.log('hide/show cards');

    const currentState = {...this.state};
    currentState.showCards = !currentState.showCards;
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

    let cards;
    if(this.state.showCards){
      cards = <CardContainer booksArray={this.state.books} />;
    } else {
      cards = '';
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
        <div>
          <input 
            type="button"
            value="Hide/Show table"
            style={style.btn}
            onClick={() => this.handleHideShowTable()} 
          />
          <input 
            type="button"
            value="Hide/Show cards"
            style={style.btn}
            onClick={() => this.handleHideShowCards()} 
          />
        </div>

        {cards}
        {table}

      </div>
    );
  }
}

export default App;



