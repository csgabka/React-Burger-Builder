import React from 'react';
import Auxilliary from '../../hoc/Auxilliary/Auxilliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = ( props ) => {
  return (
    <Auxilliary>
      <div>A lot TODO still</div>
      <Toolbar />
      <main className={classes.Content}>
        {props.children}
      </main>
    </Auxilliary>
  );

}

export default layout;
