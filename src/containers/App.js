import React, { Component } from 'react';

import Header from '../components/Header';
import Modal from '../components/Modal';
import Navigation from '../components/Navigation';
import TableSec from '../components/TableSec';
import CardContainer from '../components/CardContainer';
import Footer from '../components/Footer';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      books: [],
      newBooks: [],
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
        this.setState({ newBooks: data.books });
        // console.log(this.state.books[0]);
        this.setState({ isLoading: false})
        }
      );    
  }

  handleHideShow = () => {    
    const currentState = {...this.state};
    currentState.showTable = !currentState.showTable;
    currentState.showCards = !currentState.showCards;
    this.setState(currentState);
  }

  handleChange = (e) => {
    const currentState = {...this.state};

    let newBooks = currentState.books.filter(b => {
      let titleFilter = b.titulo.includes(e.target.value) ? true : false;
      let descriptionFilter = b.descripcion.includes(e.target.value) ? true : false;
      return titleFilter || descriptionFilter;
    })

    currentState.newBooks = newBooks;
    this.setState(currentState);
  }

  render() {

    let table;
    if(this.state.showTable){
      table = <TableSec booksArray={ this.state.newBooks } />;
      //table = <BooksTable booksArray={this.state.books}/>;
    } else {
      table = '';
    }

    let cards;
    if(this.state.showCards){
      cards = <CardContainer booksArray={ this.state.newBooks } />;
    } else {
      cards = '';
    }

    if(this.state.isLoading){
      return  <div>
                <p>Loading ...</p>
                <p>Please wait a moment!</p>
              </div>
    }

    return (
      <div>
        <Header />
        <Modal />

        <Navigation 
          changed={this.handleChange}
          clicked={this.handleHideShow} />

        {cards}
        {table}

        <Footer />
      </div>
    );
  }
}

export default App;