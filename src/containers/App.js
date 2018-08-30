import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import Header from '../components/Header';
import BooksTable from '../components/BooksTable';
import CardContainer from '../components/CardContainer';
import Footer from '../components/Footer';

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

  handleHideShow = () => {
    console.log('hide/show table');
    
    const currentState = {...this.state};
    currentState.showTable = !currentState.showTable;
    currentState.showCards = !currentState.showCards;
    this.setState(currentState);
  }

  render() {

    const styles = {
      p: {
        color: '#3f51b5',
        fontWeight: 'bold',
        marginLeft: 10,
      },
      btn: {
        margin: 10,
        padding: '0 10px',
      },
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
      return  <div>
                <p>Loading ...</p>
                <p>Please wait a moment!</p>
              </div>
    }

    return (
      <div>
        <Header />

        <p style={styles.p}>Our catalog</p>
        <div>
          <Button 
            variant="outlined" 
            color="secondary"  
            size="small" 
            onClick={() => this.handleHideShow()}
            style={styles.btn}>
            Switch table/cards
          </Button>
          {/* <input 
            type="button"
            value="Switch table/cards"
            style={styles.btn}
            onClick={() => this.handleHideShow()}
          /> */}
        </div>

        {cards}
        {table}

        <Footer />
      </div>
    );
  }
}

export default App;