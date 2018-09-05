import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Header from '../components/Header';
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
      container: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      textField: {
        margin: 10,
        width: 400,
      },
    }

    let table;
    if(this.state.showTable){
      table = <TableSec booksArray={this.state.newBooks} />;
    } else {
      table = '';
    }

    let cards;
    if(this.state.showCards){
      cards = <CardContainer booksArray={this.state.newBooks} />;
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

        <div style={styles.container}>

          <form>
            <TextField
              id="search"
              label="Search field"
              type="search"
              style={styles.textField}
              margin="normal"
              onChange={(e) => this.handleChange(e)}
            />
          </form>

          <Button 
            variant="outlined" 
            color="secondary"  
            size="small" 
            onClick={() => this.handleHideShow()}
            style={styles.btn}>
            Switch table/cards
          </Button>

        </div>


        {cards}
        {table}

        <Footer />
      </div>
    );
  }
}

export default App;