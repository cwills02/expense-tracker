import React from 'react';

import classes from './Header.module.css';
import Auxillary from '../Auxillary';

const header = (props) => {
    return (
      <Auxillary>
        <h1 className={classes.HeaderTitle}>Expense Tracker</h1>
        <h3 className={classes.Subtitle}>Add A New Item:</h3>
      </Auxillary>
    );
};

export default header;