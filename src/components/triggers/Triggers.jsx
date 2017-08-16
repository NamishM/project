import React from 'react';
import DbEntities from '../DbEntities';
import Trigger from './Trigger.jsx';
import { getTriggerData } from '../../api';

const Triggers = ({match}) => (
  <DbEntities
    getData={getTriggerData}
    DbEntity={Trigger}
    title="Triggers"
    type="Triggers"
    match={match}
  />
);

export default Triggers;
