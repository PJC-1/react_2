var React = require('react');
var ReactDOM = require('react-dom');


var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers'],
            pokemon: ['palossand', 'alakazam', 'decidueye', 'vikavolt', 'alola nine-tails', 'mimikyu']
        }
    },
    render: function(){

      var todos = this.state.todos;
      todos = todos.map(function(item,index){
        return(
          <TodoItem item={item} key={index}/>
        );
      })
      var pokemon = this.state.pokemon;
      pokemon = pokemon.map(function(item,index){
        return(
          <PokemonItem item={item} key={index}/>
        );
      })
      return(
          <div id="todo-list">
              <p>The busiest people have the most leisure...</p>
              <ul>{todos}</ul>
              <br></br>
              <p>Pokemon I want to use in sun and moon...</p>
              <ul>{pokemon}</ul>
          </div>
      );
    }// render
});

// create TodoItem component
var TodoItem = React.createClass({
  render: function(){
    return(
      <li>
          <div className="todo-item">
              <span className="item-name">{this.props.item}</span>
          </div>
      </li>
    );
  }// render
});

// create PokemonItem component
var PokemonItem = React.createClass({
  render: function(){
    return(
      <li>
          <div className="pokemon-item">
              <span className="item-name">{this.props.item}</span>
          </div>
      </li>
    )
  }// render
});

// we add props into a component here in the 'component tag' and then we can
// reference them from within the component above.
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
