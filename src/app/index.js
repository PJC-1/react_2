var React = require('react');
var ReactDOM = require('react-dom');


var TodoComponent = React.createClass({
    render: function(){
      return(
          <div>
          
          </div>
      );
    }// render
});


// we add props into a component here in the 'component tag' and then we can
// reference them from within the component above.
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
