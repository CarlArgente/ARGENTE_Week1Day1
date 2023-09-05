import React, { Component } from "react";
import Display from "./Display";

class App extends Component {
  state = {
    fullName: "Carl Emerson Llamera Argente",
    age: 23,
    position: "Azure DevOps Trainee",
    contactNumber: "0945-866-2584",
    coWorkers: [
      {
        id: 1,
        name: "Eldrin Brylle Latayan",
      },
      {
        id: 2,
        name: "Enrico Emil Dela Rosa",
      },
      {
        id: 3,
        name: "Paolo Barbosa",
      },
      {
        id: 4,
        name: "Ryan Rasuman",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>Carl Emerson Llamera Argente | Week 1 - Day - 1 | Assignment</h1>
        <p>
          Hello, my name is {this.state.fullName} with the age of{" "}
          {this.state.age}
        </p>
        <p>
          My position name is {this.state.position} and my contact number is{" "}
          {this.state.contactNumber}
        </p>
        <Display coWorkers={this.state.coWorkers} />
      </div>
    );
  }
}
export default App;

//rsc + enter function base component
//rcc + enter class base component
