import React from 'react';
import {
  Link
} from 'react-router-dom';
import DbEntity from '../DbEntity';

const Columns = () => (
  <tr>
    <th>Table Name</th>
    <th>IsUpdate</th>
    <th>IsDelete</th>
    <th>IsInsert</th>
    <th>IsAfter</th>
    <th>IsInsteadOf</th>
    <th>IsDisabled</th>
  </tr>
);

const Row = ({entity, instance, schemaName, name}) => (
  <tr>
    <td data-title="Table Name">
      <Link to={`/${instance}/${schemaName}/${entity.name}`}>
        {entity.name}
      </Link>
    </td>
    <td data-title="IsUpdate">{entity.idUpdate}</td>
    <td data-title="IsDelete">{entity.isDelete}</td>
    <td data-title="IsInsert">{entity.isInsert}</td>
    <td data-title="IsAfter">{entity.isAfter}</td>
    <td data-title="IsInsteadOf">{entity.isInsteadOf}</td>
    <td data-title="Disabled">{entity.isDisabled}</td>
  </tr>
);

const Trigger = ({entity, schemaName, instance}) => (
  <DbEntity
    entity={entity}
    schemaName={schemaName}
    instance={instance}
    Columns={Columns}
    Row={Row}
  />
);

export default Trigger;
