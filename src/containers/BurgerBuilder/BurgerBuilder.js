import React, {Component} from 'react';
import Auxilliary from '../../hoc/Auxilliary/Auxilliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1
    }
  }

  render() {
    return (
      <Auxilliary>
        <Burger ingredients={this.state.ingredients}/>
        <div>Build Controls</div>
      </Auxilliary>
    );
  }
}

export default BurgerBuilder;
