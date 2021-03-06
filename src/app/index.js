var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css');

// Module requires, enabled by webpack
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');

var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers']
        }
    },
    render: function(){
      var todos = this.state.todos;
      todos = todos.map(function(item,index){
        return(
          <TodoItem item={item} key={index} onDelete={this.onDelete}/>
        );
      }.bind(this));
      return(
          <div id="todo-list">
              <p>The busiest people have the most leisure...</p>
              <ul>{todos}</ul>
              <AddItem onAdd={this.onAdd}/>
          </div>
      );
    },// render

    // Custom functions
    onDelete: function(item){
      var updatedTodos = this.state.todos.filter(function(val, index){
        console.log("item: " + item + " value: " + val);
        console.log("item !== val ", item !== val);
        return item !== val;
      });
      this.setState({
        todos: updatedTodos
      });
    },
    onAdd: function(item){
      var updatedTodos = this.state.todos;
      updatedTodos.push(item);
      this.setState({
        todos: updatedTodos
      })
    }
});

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
