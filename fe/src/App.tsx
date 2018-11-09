import * as React from 'react';
import './App.css';
import { Auth } from './Auth';

class App extends React.Component<{}, {log: string[]}> {

  constructor(props: {}){
    super(props);
      this.state = {
        log: []
      };
  }

  public render(){
    return(
      <div style={{padding: '100px', display: 'flex', flexDirection: 'row'}}>
        <div style={{flex: 1}}>
          <button onClick={this.onLoginButtonClick}>Login</button>
        </div>
        <div style={{flex: 1}}>
          {this.renderLog()}
        </div>
      </div>
    );
  }

  private renderLog = () => {
    return this.state.log.map(x => {
      return <p key={Math.random()}>{x}</p>
    })
  }

  private onLoginButtonClick = () => {
    const auth = new Auth(this.logCallback);
    auth.login();
  }

  private logCallback = (...text: string[]) => {
    const { log } = this.state;
    const newLog = [...log, text.join(' ')];
    this.setState({log: newLog});
  }

}

export default App;
