import React from 'react';
import DbEntities from '../DbEntities';
import TableType from './TableType.jsx';
import { getTableTypeData } from '../../api';

const TableTypes = ({match}) => (
  <DbEntities
    getData={getTableTypeData}
    DbEntity={TableType}
    title="Table Types"
    type="TableTypes"
    match={match}
  />
);

export default TableTypes;
