import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import ContextComponentC from './components/ContextComponentC';
import {UserProvider} from './components/UserContext'
import BindingExample from './components/BindingExample';

class App extends Component {
  render() {
    return (
      <div>

        {/* <UserProvider value="Pranav">
          <ContextComponentC></ContextComponentC>

        </UserProvider> */}

        <BindingExample></BindingExample>


        
      </div>
    )
  }
}

export default App;


