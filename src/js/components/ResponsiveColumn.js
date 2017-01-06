import React from "react";
import {Grid, Row, Column, observeGrid} from 'react-cellblock';

const ResponsiveColumn = observeGrid(function (props) {
  const { 
    children,
    classes,
    colWidth,
    width 
  } = props;

  if (colWidth <= 6) {
    return (
      <Column>
        <div class={ classes }>
          { children }
        </div>
      </Column>
    );
  }

  return (
    <Column width={ width }>
      { children }
    </Column>
  );
});

export default ResponsiveColumn;
