import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    axios.get('/api/users').then(data => {
      console.log(data);
    });
  }

  render() {
    return <div>hello</div>;
  }
}

export default App;
