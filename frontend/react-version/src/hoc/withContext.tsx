import React from 'react';
import PageContext from '../context';

const withContext = (Component: any) =>
  function contextComponent (props: object) {
  return <PageContext.Consumer>
    { context => <Component { ...props } pageContext={ context } /> }
  </PageContext.Consumer>
};

export default withContext;
