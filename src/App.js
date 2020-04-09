import React from 'react';
import { Data } from './data.js';
import { TodoList, TodoForm } from './components';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: Data()
    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <br />
        <TodoList todo={this.state.todo} />
      </div>
    );
  }
}

export default App;
