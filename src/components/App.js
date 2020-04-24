import React, { Fragment } from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

import { getUsers } from "../api";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.getUsersFromApi = this.getUsersFromApi.bind(this);

    this.state = {
      userJson: [],
    };
  }

  // call a GET API
  getUsersFromApi() {
    const callUsersApi = getUsers();

    callUsersApi.then((json) => {
      console.log("json", json);

      this.setState({
        userJson: json.map((user) => <li key={user.id}>{user.name}</li>),
      });
    });
  }

  render() {
    const { userJson } = this.state;

    return (
      <Fragment>
        <AddTodo />
        <VisibleTodoList />
        <Footer />

        <br></br>
        <br></br>

        <button onClick={this.getUsersFromApi}>Get Users from API</button>

        <br></br>
        <br></br>
        <ul>{userJson}</ul>
      </Fragment>
    );
  }
}

export default App;
