var React = require('react');

var AddItem = React.createClass({
  render: function(){
    return(
      <form id="add-todo">
          <input type="text" required />
          <input type="submit" value="Hit me" />
      </form>
    );
  }
})

module.exports = AddItem;
