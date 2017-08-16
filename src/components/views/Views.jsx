import React from 'react';
import DbEntities from '../DbEntities';
import View from './View.jsx';
import { getViewData } from '../../api';

const Views = ({match}) => (
  <DbEntities
    getData={getViewData}
    DbEntity={View}
    title="Views"
    type="Views"
    match={match}
  />
);

export default Views;
