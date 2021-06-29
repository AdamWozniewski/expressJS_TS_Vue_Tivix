import React from 'react';
import { typesOfItems } from '../static/types';

const { typeA } = typesOfItems;

const pageContext = React.createContext(typeA);

export default pageContext;
