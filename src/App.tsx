import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.less';

interface Props{
}
interface State{
}
//@ts-ignore
@connect(
  state=>state,
  {}
)
class App extends Component<Props, State> {
  constructor(props: Props){
    super(props)
    this.state={}
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
