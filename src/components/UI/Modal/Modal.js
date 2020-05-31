import React from 'react';
import classes from './Modal.module.css';
import Auxilliary from '../../../hoc/Auxilliary/Auxilliary';
import Backdrop from '../Backdrop/Backdrop';
const modal = (props) => (
  <Auxilliary>
  <Backdrop show={props.show} />
  <div
    className={classes.Modal}
    style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.show ? '1' : '0'
    }}>
    {props.children}
  </div>
  </Auxilliary>
);

export default modal;
