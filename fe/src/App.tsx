import * as React from 'react';
import './App.css';
import { Auth } from './Auth';

class App extends React.Component<{}, {log: string[]}> {

  private auth: Auth;

  constructor(props: {}){
    super(props);
    this.auth = new Auth(this.logFunction);
  }

  public render(){
    return(
      <div style={{padding: '100px', display: 'flex', flexDirection: 'row'}}>
        <div style={{flex: 1, flexDirection: 'column', display: 'flex', border: '1px solid black', padding: '10px'}}>
          <button onClick={this.onSignUpButtonClick}>SignUp</button>
          <button onClick={this.onLoginButtonClick}>Login</button>
        </div>
      </div>
    );
  }

  private onSignUpButtonClick = () => {
    this.auth.signUp();
  }

  private onLoginButtonClick = () => {

  }

  private logFunction = (...text: string[]) => {
    console.log(...text)
  }


}

export default App;
