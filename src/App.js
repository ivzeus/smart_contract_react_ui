import React, { Component } from 'react';
import { FilePicker } from 'react-file-picker';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contractReady: true,
      functionList: ['foo', 'doge', 'gabbage'],
      functionABI: [
        {
          name: 'param1',
          type: 'string'
        },
        {
          name: 'param2',
          type: 'string'
        },
        {
          name: 'param3',
          type: 'uint256'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Smart contract</h1>
        </header>
        <form className="App-form">
          <label style={{}}>Contract address</label>
          <div className="App-input">
            <input type="text" style={{minWidth:'50%'}}></input>
          </div>

          <label>Contract abi</label>
          <div className="App-input">
            <textarea type="text" style={{minWidth:'50%'}}></textarea>
          </div>
          <FilePicker 
            extension={['json']} 
            onChange={FileObject => {}}
            onError={errMsg => {}}>
            <button type="reset">Select abi file</button>
          </FilePicker>
          <button type="reset">Proceed</button>

          {
            this.state.contractReady ?
            <div>
              <br/>
              <label>Contract functions:</label>
              <div className="App-input">
                <select>
                  {
                    this.state.functionList.map((item, idx) => {
                      return <option value={item}>{item}</option>
                    })
                  }
                </select>
                <form>
                  {
                    this.state.functionABI.map((item, idx) => {
                      return (
                        <div>
                          <label>{item.name}</label>
                          <input type={item.type}></input>
                        </div>
                      )
                    })
                  }
                </form>
              </div>
            </div>
            :
            <div/>
          }
        </form>
        <footer>
          <button>Reset form
          </button>
        </footer>
      </div>
    );
  }
}

export default App;
