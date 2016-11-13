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
            <li>{item}</li>
        );
      })
      return(
          <div id="todo-list">
              <p>The busiest people have the most leisure...</p>
              <ul>{todos}</ul>
          </div>
      );
    }// render
});


// we add props into a component here in the 'component tag' and then we can
// reference them from within the component above.
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
