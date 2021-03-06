import React from 'react';
import {
  Link
} from 'react-router-dom';
import DbEntity from '../DbEntity';

const Columns = () => (
  <tr>
    <th className="c1">Column Name</th>
    <th className="c2">Data Type</th>
    <th className="c3">Nulls?</th>
    <th className="c4">PKey?</th>
    <th className="c5">FKey?</th>
    <th className="c6">Ref Table</th>
    <th className="c7">Description</th>
  </tr>
);

const Row = ({entity, instance, schemaName, name}) => (
  <tr>
    <td data-title="Column Name">
      <Link to={`/${instance}/${schemaName}/${name}/${entity.name}`}>
        {entity.name}
      </Link>
    </td>
    <td data-title="Data Type">{entity.dataType}</td>
    <td data-title="Nulls?">{entity.allowNulls}</td>
    <td data-title="PKey?">{entity.pKey}</td>
    <td data-title="FKey?">{entity.fKey}</td>
    <td data-title="Ref Table">{entity.refTable}</td>
    <td data-title="Description">{entity.desc}</td>
  </tr>
);

const Table = ({entity, schemaName, instance}) => (
  <DbEntity
    entity={entity}
    schemaName={schemaName}
    instance={instance}
    Columns={Columns}
    Row={Row}
    download
  />
);

export default Table;
