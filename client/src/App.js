import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import DocumentsList from './components/DocumentsList/DocumentsList';
import FilterForm from './components/FilterForm';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {

  state = {
    name: '',
    toggle: false,
    filteredArr: []
  }
 
  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  onSubmit = e => {
    e.preventDefault();
    if ((this.state.name !== '' && !null) && !this.state.toggle) {
      this.toggle();
      let arr = [];
      arr = this.props.item.items.filter(item => {
        return item.name.toLowerCase().search(this.state.name.trim().toLowerCase()) !== -1
      })
      this.setState({ filteredArr: arr })
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, toggle: false});
  }


  render(){
    return (
      <div className="App h-100 d-flex flex-column">
        <Header />
        <FilterForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          toggle={this.toggle}
        />
        <DocumentsList state={this.state} />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  item: state.item
})

export default connect(mapStateToProps)(App);
