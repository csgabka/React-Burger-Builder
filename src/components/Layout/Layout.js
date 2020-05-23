import React from 'react';
import Auxilliary from '../../hoc/Auxilliary/Auxilliary';
import classes from './Layout.module.css';

const layout = ( props ) => {
  return (
    <Auxilliary>
      <div>A lot TODO still</div>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Auxilliary>
  );

}

export default layout;
