import React, { Component } from "react";
import Header from "./layout/header";
import Todos from "./components/Todos";
import AddTodo from "./AddTodo";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Organize Garage!",
        completed: false
      },
      {
        id: 2,
        title: "Bake Cookies",
        completed: true
      }
    ]
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  clickYo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = title => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            clickYo={this.clickYo}
          />
          <AddTodo addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;

//todos on line 29 is a prop

// import React from "react";
// import TodoList from "./components/TodoComponents/TodoList";
// import TodoForm from "./components/TodoComponents/TodoForm";

// class App extends React.Component {
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state

//   state = {
//     tasks: [
//       {
//         task: "Learn React, please",
//         id: 1528817077286,
//         completed: false
//       },
//       {
//         task: "Learn how to loop swoop and pull",
//         id: 1528817084358,
//         completed: false
//       }
//     ],
//     taskInput: " "
//   };

//   changeHandler = e => {
//     e.preventDefault();
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   addTask = e => {
//     e.preventDefault();
//     const newTask = {
//       task: this.state.taskInput,
//       id: Date.now(),
//       completed: false
//     };
//     this.setState({
//       tasks: [...this.state.tasks, newTask],
//       taskInput: ""
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h2>Todo List</h2>
//         <TodoList tasks={this.state.tasks} />
//         <TodoForm
//           taskInput={this.state.taskInput}
//           changeHandler={this.changeHandler}
//           addTask={this.addTask}
//         />
//       </div>
//     );
//   }
// }

// export default App;
