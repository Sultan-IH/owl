import React, { Component } from 'react';
import Header from './components/layout/Header.js'
import Todos from './components/Todos.js'
import AddTodo from './components/AddTodo'
import uuid from 'uuid'
import { BrowserRouter,Route} from "react-router-dom";
import './App.css';
import profile, { Profile } from './components/Profile.js';
import ProjectList from './components/ProjectList.js';
import CreateNewProject from './CreateNewProject.js';
import NavigationBar from './components/NavigationBar.js';
import MyProjects from './components/MyProjects.js';
import About from './components/About.js';
class App extends Component {
  state = {
    projects: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  // Toggle Complete
  // markComplete = (id) => {
  //   this.setState({
  //     todos: this.state.todos.map(
  //       todo => {
  //         if (todo.id == id) {
  //           todo.completed = !todo.completed;
  //         }
  //         return todo;
  //       }
  //     )
  //   })
  // }

  // delTodo = id => {
  //   this.setState({
  //     todos: [...this.state.todos.filter(
  //       todo => todo.id != id)]
  //   })
  // }

  addTodo = (projectItem) => {
    const newTodo = {
      id: uuid.v4(),
      // title,
      completed : false
   }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render() {
    return (
      // <ProjectList ></ProjectList>
      <BrowserRouter>

      <div className="App">
      <NavigationBar/>
        <div className="container">
        
          <Route path="/projects" component={ProjectList} />
          <Route path="/profile" component={Profile} />
          <Route path="/newProject" component={CreateNewProject} />

          <Route path="/myProjects" component={MyProjects} />
          <Route path="/about" component={About} />
          {/* <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete}
            delTodo={this.delTodo} /> */}
            {/* <ProjectList/> */}
        </div>


      </div>
      </BrowserRouter>
    );
  }
}

export default App;
