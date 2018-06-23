import React, { Component } from 'react'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import TodoCard from './todoCard'

import './style.css'


class TodoContainer extends Component {
  state = {
    title: "",
    body: "",
    todos: []
  }

  addToDo = () => {
    let newElement =  {
      title: this.state.title,
      date: new Date(Date.now()).toString(),
      body: this.state.body
    }
    this.setState(prevState => ({
      todos: [...prevState.todos, newElement],
      title: '',
      body: ''
    }))
  }

  removeItem(index) {
    this.setState({
      todos: this.state.todos.filter((_, i) => i !== index)
    });
  }

  onTitleChange = (e) => {
    this.setState({ title: e.target.value})
  }

  onBodyChange = (e) => {
    this.setState({ body: e.target.value})
  }

  render() {
    return (
      <div>
        <div className="todo-inputs">
          <Input
            value={this.state.title}
            placeholder="Title"
            className='input'
            onChange={this.onTitleChange}
          />
          <Input
            value={this.state.body}
            placeholder="Remember..."
            className='input'
            onChange={this.onBodyChange}
          />
          <Button
            variant="fab"
            disabled={this.state.title === "" ? true : false}
            color="primary"
            aria-label="add"
            className="button"
            onClick={this.addToDo}
          >
            <AddIcon />
          </Button>
        </div>

        <div className="todo-container">
        {
          this.state.todos.map((todo, i) =>
            <TodoCard
              title={todo.title}
              date={todo.date}
              body={todo.body}
              key={i}
              removeItem={() => this.removeItem(i)}
            />
          )
        }
        </div>
      </div>
    )
  }
}

export default TodoContainer