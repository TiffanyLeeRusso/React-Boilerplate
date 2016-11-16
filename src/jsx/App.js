import React, { Component } from 'react';
//import $ from 'jquery';
import Header from './Header.js';
import Content from './Content.js';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // Fetch the data
    /*
    $.ajax({
      url: 'sample.json',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({list: data.jsondata});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
    */
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;
