import React, { Component } from "react";
import { UserContext } from "../App.js";

class Dashboard extends Component {
  render() {
    return (
      <div>
        Dashboard
        <UserContext.Consumer>
          {(values) => {
            return (
              <h1>
                ID: {values.id}
                <br />
                Name: {values.name}
                <br />
                Email: {values.email}
                <br />
              </h1>
            );
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default Dashboard;
