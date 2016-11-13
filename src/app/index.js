var React = require('react');
var ReactDOM = require('react-dom');


var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap']
        }
    },
    render: function(){
      return(
          <div id="todo-list">
              <p>The busiest people have the most leisure...</p>
              <ul>
                  <li>{this.state.todos[0]}</li>
                  <li>{this.state.todos[1]}</li>
                  <li>{this.state.todos[2]}</li>
              </ul>
          </div>
      );
    }// render
});


// we add props into a component here in the 'component tag' and then we can
// reference them from within the component above.
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
