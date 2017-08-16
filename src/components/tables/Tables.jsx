import React from 'react';
import DbEntities from '../DbEntities';
import Table from './Table.jsx';
import { getTableData } from '../../api';

const Tables = ({match}) => (
  <DbEntities
    getData={getTableData}
    DbEntity={Table}
    title="Tables"
    type="Tables"
    match={match}
  />
);

export default Tables;
