import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

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
        margin: 10,
        fontSize: '1.5em',
      },
      btn: {
        margin: 10,
        padding: '0 10px',
      },
      container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      textField: {
        width: 200,
      },
      gridItem: {
        display: 'flex',
        justifyContent: 'center',
      }
    }

    let table;
    if(this.state.showTable){
      table = <TableSec booksArray={this.state.newBooks} />;
      //table = <BooksTable booksArray={this.state.books}/>;
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

        <Grid style={styles.container} container>

          <Grid item xs={12} sm={4} style={styles.gridItem}>
            <p style={styles.p}>Our catalog:</p>
          </Grid>

          <Grid item xs={12} sm={4} style={styles.gridItem}>
            <form style={styles.form}>
              <TextField
                id="search"
                label="Search field"
                type="search"
                style={styles.textField}
                onChange={(e) => this.handleChange(e)}
              />
            </form>
          </Grid>

          <Grid item xs={12} sm={4} style={styles.gridItem}>
            <Button 
              variant="outlined" 
              color="secondary"  
              size="small" 
              onClick={() => this.handleHideShow()}
              style={styles.btn}>
              Switch table/cards
            </Button>
          </Grid>

        </Grid>


        {cards}
        {table}

        <Footer />
      </div>
    );
  }
}

export default App;