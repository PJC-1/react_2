var React = require('react');
var ReactDOM = require('react-dom');

// Create component
var TodoComponent = React.createClass({
    render: function(){
      return(
        <div>
          <h1>hello</h1>
          <p>world</p>
        </div>
      );
    }
});

// put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
