import React from 'react';
import DbEntities from '../DbEntities';
import Function from './Function.jsx';
import { getFunctions } from '../../api';

const Functions = ({match}) => (
  <DbEntities
    getData={getFunctions}
    DbEntity={Function}
    title="Functions"
    type="Functions"
    match={match}
  />
);

export default Functions;
