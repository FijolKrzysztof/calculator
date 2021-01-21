import './App.css';
import {Container, Col, Form, Button} from 'react-bootstrap';
import { Component } from 'react';

let data;
let convertedData;
let duplicate;

class Input extends Component {
	render() {
  	return <Button onClick={(e) => this.getOperation(e)} block className="btn-lg" variant="outline-primary">{convertedData}</Button>;
  }
  
  getOperation = (e) => {
    let equation = e.target.innerHTML;
    document.getElementById('form').value = equation;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {inputList: []};
    this.addButton = this.addButton.bind(this);
  }

  addButton() {
    const inputList = this.state.inputList;
    this.setState({
        inputList: inputList.concat(<Input key={inputList.length} />)
    });
  }

  handleChange = (e) => {
    data = e.target.value;
    let lastValue = data.charAt(data.length-1);
    if(lastValue === '=') {
      data = data.slice(0, -1);
      this.count();
    }  
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container style={{marginTop: 100, marginBottom: 50}}>
            <Col>
              <Form style={{marginBottom: 50}} onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label>Calculator</Form.Label>
                  <Form.Control className="form-control form-control-lg" id="form" placeholder="0123456789 . + - * / ( ) =" onChange={this.handleChange} /> 
                  <Form.Text className="text-muted">Only recognises the above characters</Form.Text>
                </Form.Group>
              </Form>
              {this.state.inputList}
            </Col>
          </Container>
        </header>
      </div>
    );
  }

  count = () => {
    convertedData = '';
    for(let i = 0; i < data.length; i++) {
      switch(data[i]) {
        case '0':
          convertedData += '0';
          break;
        case '1':
          convertedData += '1';
          break;
        case '2':
          convertedData += '2';
          break;
        case '3':
          convertedData += '3';
          break;
        case '4':
          convertedData += '4';
          break;
        case '5':
          convertedData += '5';
          break;
        case '6':
          convertedData += '6';
          break;
        case '7':
          convertedData += '7';
          break;
        case '8':
          convertedData += '8';
          break;
        case '9':
          convertedData += '9';
          break;
        case '.':
          convertedData += '.';
          break;
        case '+':
          convertedData += '+';
          break;
        case '-':
          convertedData += '-';
          break;
        case '*':
          convertedData += '*';
          break;
        case '/':
          convertedData += '/';
          break;
        case '(':
          convertedData += '(';
          break;
        case ')':
          convertedData += ')';
          break;
        default:
      }
    }
    let result;
    try{
      result = eval(convertedData);
    } catch {
      result = 'Error';
    }
    if(result === undefined) result = '';
    document.getElementById('form').value = result;
    if(duplicate !== result && result !== 'Error' && result !== '') this.addButton();
    duplicate = result;
  }
}

export default App;
