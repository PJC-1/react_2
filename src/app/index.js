var React = require('react');
var ReactDOM = require('react-dom');


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
    }
});

// create TodoItem component
var TodoItem = React.createClass({
  render: function(){
    return(
      <li>
          <div className="todo-item">
              <span className="item-name">{this.props.item}</span>
              <span className="item-delete" onClick={this.handleDelete}> x </span>
          </div>
      </li>
    );
  },// render

  // Custom functions
  handleDelete: function(){
    this.props.onDelete(this.props.item);
  }
});

// we add props into a component here in the 'component tag' and then we can
// reference them from within the component above.
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
