import React, { Component } from 'react';
import './App.css';
import Customers from './Customers';
import { Button, Row, Col } from 'reactstrap';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      customers: [],
      show: false
    }
  }

  clickHandler(e) {
    let showCards = !this.state.show
    this.setState({
      show: showCards
    });
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/customers")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            customers: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, customers } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {

      return (


        <div className="App" >

          <Button onClick={this.clickHandler.bind(this)} className="btn btn-danger text-white">Show Cards</Button>

          {
            this.state.show ?
              <Row className="mt-5">
                <Col>
                  <Customers className="bg-primary text-white px-3 mx-5" key={this.state.customers[0].id} firstName={this.state.customers[0].firstName} lastName={this.state.customers[0].lastName} userName={this.state.customers[0].userName} pin={this.state.customers[0].pin} />
                </Col>
                <Col>
                  <Customers className="bg-danger text-white px-3 mx-5" key={this.state.customers[1].id} firstName={this.state.customers[1].firstName} lastName={this.state.customers[1].lastName} userName={this.state.customers[1].userName} pin={this.state.customers[1].pin} />
                </Col>
                <Col>
                  <Customers className="bg-success text-white px-3 mx-5" key={this.state.customers[2].id} firstName={this.state.customers[2].firstName} lastName={this.state.customers[2].lastName} userName={this.state.customers[2].userName} pin={this.state.customers[2].pin} />
                </Col>
              </Row>
              : null
          }
        </div>

      );

    }
  }

}


export default App;
