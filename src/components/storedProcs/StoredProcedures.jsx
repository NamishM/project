import React from 'react';
import DbEntities from '../DbEntities';
import StoredProcedure from './StoredProcedure.jsx';
import { getStoredProcs } from '../../api';

const StoredProcedures = ({match}) => (
  <DbEntities
    getData={getStoredProcs}
    DbEntity={StoredProcedure}
    title="Stored Procedure"
    type="Procs"
    match={match}
  />
);

export default StoredProcedures;
