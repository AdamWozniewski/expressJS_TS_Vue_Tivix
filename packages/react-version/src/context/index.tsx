import React from 'react';
import { typesOfItems } from '../static/types';

const { typeA }: { [key: string]: string } = typesOfItems;

const pageContext: React.Context<string> = React.createContext(typeA);

export default pageContext;
